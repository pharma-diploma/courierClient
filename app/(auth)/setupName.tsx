import LogoIcon from '@/assets/svg/auth/LogoIcon'
import GradientButton from '@/components/ui/GradientButton'
import TitledInput from '@/components/ui/TitledInput'
import { useAuth } from '@/context/AuthContext'
import { router } from 'expo-router'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const setupName = () => {
    const { user, login } = useAuth();
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");

    const handleConfirmName = async () => {
        if (!name) {
            setError("Введіть ім'я");
            return;
        }
        console.log(user?._id);
        console.log(name)
        try {
            const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/setup-name`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user?.token}`,
                },
                body: JSON.stringify({
                    userId: user?._id,
                    name,
                }),
            });
            if (res.ok) {
                // Обновляем пользователя в контексте
                await login({ ...user, name } as any);
                router.replace("/");
            } else {
                setError("Не вдалося оновити ім'я");
            }
        } catch (e) {
            setError("Помилка з'єднання");
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <LogoIcon />
                        <Text style={{ fontWeight: 700, fontSize: 28 }}>Введіть ваше ім’я</Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            textAlign: 'center',
                            marginTop: 33,
                            paddingHorizontal: 20,
                        }}>
                            Будь ласка, вкажіть ім'я, яким ми будемо звертатися до вас у вашому профілі.
                        </Text>
                        <View style={{ width: '100%', gap: 22, paddingHorizontal: 20, marginTop: 30 }}>
                            <TitledInput
                                title=""
                                value={name}
                                onChangeText={setName}
                                placeholder="Введіть своє ім'я..."
                                keyboardType="default"
                            />
                        </View>
                        <GradientButton
                            title="Підтвердити"
                            onPress={handleConfirmName}
                            style={{ marginTop: 43 }}
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

export default setupName

const styles = StyleSheet.create({})