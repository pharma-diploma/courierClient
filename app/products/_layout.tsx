import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function PharmacyProductsLayout() {
  return (
    <Stack
        screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
        }}
    >
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
