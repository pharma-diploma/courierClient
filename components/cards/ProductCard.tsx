import { useAuth } from '@/context/AuthContext';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GradientButton from '../ui/GradientButton';

interface ProductCardProps {
    _id: string;
    name: string;
    image: string;
    price: number;
    description?: string;
}


const ProductCard = ({_id, name, image, price, description}: ProductCardProps) => {
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
        onPress={() => router.push({
            pathname: '/products/[id]',
            params: { id: _id }
        })}
    >
      <View style={{flexDirection: "row", gap: 14,  maxWidth: '70%'}}>
        <Image 
          source={{ uri: image }} 
          style={{ width: 60, height: 60, borderRadius: 12 }}
        />
        <View style={{justifyContent: 'space-between'}}>
            <Text style={{
                fontSize: 16,
                fontWeight: '500',
            }}>{name}</Text>
            <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 500,
                }}>
                    від
                </Text>
                <View>
                    <MaskedView maskElement={
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'black', // цвет не важен, главное чтобы был
                        }}>
                        {price}₴
                        </Text>
                    }>
                        <LinearGradient
                            colors={['#158EFF', '#158EFF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '500',
                            opacity: 0, // текст невидим, используется только маска
                        }}>
                            {price}₴
                        </Text>
                        </LinearGradient>
                    </MaskedView>
                </View>
            </View>
        </View>
      </View>
      <GradientButton
        title="У кошик"
        onPress={handleAddToCart}
        style={{ height: 34, padding: 0, width: 112 }}
        textStyle={{ fontSize: 14, fontWeight: '500' }}
      />
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({})