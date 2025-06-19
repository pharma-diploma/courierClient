import MinusIcon from '@/assets/svg/cart/MinusIcon';
import PlusIcon from '@/assets/svg/cart/PlusIcon';
import { useAuth } from '@/context/AuthContext';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface OrderItemCardProps {
    _id: string;
    name: string;
    image: string;
    price: number;
    description?: string;
}


const OrderItemCard = ({_id, name, image, price, description}: OrderItemCardProps) => {
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
    <View style={{
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
      <View style={{paddingVertical: 6, paddingHorizontal: 10, backgroundColor: "#F4F4F4", borderRadius: 40, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 17}}>
            <TouchableOpacity>
                <MinusIcon/>
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity>
                <PlusIcon/>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderItemCard

const styles = StyleSheet.create({})