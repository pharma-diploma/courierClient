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

const register = () => {
    const { login } = useAuth();
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const [error, setError] = React.useState("");

    const handleRegister = async () => {
        // Тут можна додати логіку реєстрації
        console.log("Email:", email);

        if (!email || !password || !confirmPassword) {
            setError("Будь ласка, заповніть всі поля.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Паролі не збігаються.");
            return;
        }

        const res: any = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/auth/register`,
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
            router.push("/confirmCode")
        }
        else {
            setError("Помилка реєстрації. Перевірте введені дані.");
        }
    }
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
                    }}>Реєстрація</Text>

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
                        <TitledInput
                            title="Confirm your password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Введіть ваш пароль знову..."
                            keyboardType="default"
                            secureTextEntry={!showConfirmPassword}
                            rightIcon={<EyeIcon />}
                            onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        />
                    </View>
                    <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 30, flexDirection: 'row', justifyContent: 'center', gap: 4, alignItems: 'center'}}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 500,
                        }}>
                            Вже є аккаунт?
                        </Text>
                        <TouchableOpacity onPress={() => router.push("/(auth)/login")} activeOpacity={0.7}>
                            <MaskedView maskElement={
                                <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: 'black', // цвет не важен, главное чтобы был
                                textDecorationLine: 'underline',
                                }}>
                                Увійти
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
                                    Увійти
                                </Text>
                                </LinearGradient>
                            </MaskedView>
                        </TouchableOpacity>
                    </View>
                    <GradientButton
                        title="Реєстрація"
                        onPress={() => handleRegister()}
                        style={{ marginTop: 30}}
                    />
                    {
                        error ? 
                        <Text style={{
                            color: 'red',
                            marginTop: 10,
                        }}>
                            {error}
                        </Text>
                        : null
                    }
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({})