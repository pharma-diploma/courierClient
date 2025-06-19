import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { View } from "react-native";

interface User {
  _id: string;
  email: string;
  name: string;
  token: string;
  notifications?: {
    sales: boolean;
    orderStatus: boolean;
    deliveryMessage: boolean;
  };
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Восстанавливаем сохранённого пользователя при инициализации
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        // await AsyncStorage.removeItem("user"); // Очистка для тестов, удалить в продакшене
        const storedUser = await AsyncStorage.getItem("user");
        console.log(storedUser);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.error("Ошибка восстановления данных пользователя", e);
      } finally {
        setLoading(false);
      }
    };

    bootstrapAsync();
  }, []);

  const login = async (userData: User) => {
    console.log(userData);
    setUser(userData);
    try {
      await AsyncStorage.setItem("user", JSON.stringify(userData));
    } catch (e) {
      console.error("Ошибка сохранения пользователя", e);
    }
  };

  const logout = async () => {
    setUser(null);
    try {
      await AsyncStorage.removeItem("user");
    } catch (e) {
      console.error("Ошибка удаления пользователя", e);
    }
  };

  const isAuthenticated = !!user;

  // Пока идет загрузка (restore) можно вернуть SplashScreen или null
  if (loading) {
    return <View style={{flex:1, backgroundColor:'#fff'}} />;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};