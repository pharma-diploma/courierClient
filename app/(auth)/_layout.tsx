import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function AuthLayout() {
  return (
    <Stack>
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="confirmCode" options={{ headerShown: false }} />
        <Stack.Screen name="setupName" options={{ headerShown: false }} />
    </Stack>
  );
}
