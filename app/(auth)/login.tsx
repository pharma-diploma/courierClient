import EyeIcon from '@/assets/svg/auth/EyeIcon'
import LogoIcon from '@/assets/svg/auth/LogoIcon'
import GradientButton from '@/components/ui/GradientButton'
import TitledInput from '@/components/ui/TitledInput'
import { useAuth } from '@/context/AuthContext'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState("");
    const { login } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) {
            setError("Будь ласка, заповніть всі поля.");
            return;
        }
        try {
            const res: any = await fetch(
                `${process.env.EXPO_PUBLIC_API_URL}/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );
            if (res.ok) {
                const user = await res.json();
                await login(user);
                router.replace("/");
            } else {
                setError("Неправильний email або пароль.");
            }
        } catch (e) {
            setError("Помилка з'єднання. Спробуйте пізніше.");
        } finally {
        }
    };
  return (
    <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
    >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flexGrow: 1}}
            >
                <View
                    style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                >
                    <LogoIcon />
                    <Text style={{
                        fontWeight: 700,
                        fontSize: 28,
                    }}>Вітаємо!</Text>

                    <View style={{width: '100%', gap: 22, paddingHorizontal: 20, marginTop: 30}}>
                        <TitledInput
                            title="Email"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Введіть ваш email..."
                            keyboardType="email-address"
                        />
                        <TitledInput
                            title="Password"
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Введіть ваш пароль..."
                            keyboardType="default"
                            secureTextEntry={!showPassword}
                            rightIcon={<EyeIcon />}
                            onRightIconPress={() => setShowPassword(!showPassword)}
                        />
                    </View>
                    <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 30, flexDirection: 'row', justifyContent: 'center', gap: 4, alignItems: 'center'}}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 500,
                        }}>
                            Немає аккаунту?
                        </Text>
                        <TouchableOpacity onPress={() => router.push("/(auth)/register")} activeOpacity={0.7}>
                            <MaskedView maskElement={
                                <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: 'black', // цвет не важен, главное чтобы был
                                textDecorationLine: 'underline',
                                }}>
                                Реєстрація
                                </Text>
                            }>
                                <LinearGradient
                                colors={['#158EFF', '#158EFF']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                >
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    opacity: 0, // текст невидим, используется только маска
                                    textDecorationLine: 'underline',
                                }}>
                                    Реєстрація
                                </Text>
                                </LinearGradient>
                            </MaskedView>
                        </TouchableOpacity>
                    </View>
                    <GradientButton
                        title="Увійти"
                        onPress={() => handleLogin()}
                        style={{ marginTop: 30}}
                    />
                    {error ? (
                        <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>
                    ) : null}
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})