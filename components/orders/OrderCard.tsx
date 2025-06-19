import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GradientButton from '../ui/GradientButton';

interface OrderCardProps {
    _id: string;
    image: string;

}


const OrderCard = ({_id, image}: OrderCardProps) => {
const { user } = useAuth();
const handleAddToCart = async () => {
    if (!user?._id) return; // или user?._id, если у вас так
    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/cart/${user._id}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pharmacyProductId: _id }),
      });
      if (!res.ok) throw new Error('Не вдалося додати до кошика');
      // Можно показать уведомление об успехе
      console.log(res.status);
      const data = await res.json();
      console.log(data)
    } catch (e) {
      // Можно показать уведомление об ошибке
      console.error(e);
    }
  };
  return (
    <TouchableOpacity style={{
        backgroundColor: "white", 
        padding: 16,
        paddingVertical: 11,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}
    >
        <Image 
          source={{ uri: image }} 
          style={{ width: 60, height: 60, borderRadius: 12 }}
        />
      {/* <View style={{flexDirection: "row", gap: 14,  maxWidth: '70%'}}>
      </View> */}
        <View style={{justifyContent: 'space-between'}}>
            <Text style={{
                fontSize: 12,
                fontWeight: '500',
            }}>{_id}</Text>
        </View>
      <GradientButton
        title="Деталі"
        onPress={() => router.push({
            pathname: '/order',
            params: { 
                data: JSON.stringify({orderId: _id}) },
            }
        )}
        style={{ height: 34, padding: 0, width: 60 }}
        textStyle={{ fontSize: 14, fontWeight: '500' }}
      />
    </TouchableOpacity>
  )
}

export default OrderCard

const styles = StyleSheet.create({})