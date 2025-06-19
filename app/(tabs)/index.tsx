import OrderCard from '@/components/orders/OrderCard';
import { useFocusEffect } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [pharmacies, setPharmacies] = React.useState<any[]>([]);
  const [orders, setOrders] = React.useState([])
  const [loading, setLoading] = React.useState(true);
  const insets = useSafeAreaInsets();
  const fetchOrders = async () => {
    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/orders/active/unassigned`);
      const data = await res.json();
      console.log(data.length);
      setPharmacies(data);
      setOrders(data);
    } catch (e) {
      // обработка ошибки
      setPharmacies([]);
    } finally {
      setLoading(false);
    }
  };
  // fetchOrders();
  React.useEffect(() => {
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log("fetch orders");
        fetchOrders();
    }, [])
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top + 20}]}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: 'bold',
        }}
      >Замовлення</Text>
      <View style={{gap: 10, marginTop: 20}}>
        {
          orders.map((order: any, idx) => (
            <OrderCard
              key={order._id}
              _id={order._id}
              image={order.items[0].pharmacyProduct?.product.image}
              />
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
