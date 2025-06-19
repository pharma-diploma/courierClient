import LogoIcon from '@/assets/svg/auth/LogoIcon'
import GradientButton from '@/components/ui/GradientButton'
import TitledInput from '@/components/ui/TitledInput'
import { router } from 'expo-router'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const confirmCode = () => {
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
                    }}>Перевірте пошту</Text>

                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        textAlign: 'center',
                        marginTop: 33,
                        paddingHorizontal: 20,
                    }}>
                        Вам надіслано електронний лист на example@mail.com із кодом для входу в систему. Не забудьте перевірити папку спаму.
                        </Text>
                    <View style={{width: '100%', gap: 22, paddingHorizontal: 20, marginTop: 30}}>
                        <TitledInput
                            title="Код"
                            placeholder="Введіть код підтвердження..."
                            keyboardType="numeric"
                        />
                    </View>
                    
                    <GradientButton
                        title="Підтвердити"
                        onPress={() => router.push("/(auth)/setupName")}
                        style={{ marginTop: 43}}
                    />
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default confirmCode

const styles = StyleSheet.create({})