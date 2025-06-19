import { Dimensions, StyleSheet, Text, View } from 'react-native';

import GradientButton from '@/components/ui/GradientButton';
import { useAuth } from '@/context/AuthContext';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Stage1 = (props: any) => (
  <Svg
    width={135}
    height={331}
    viewBox="0 0 135 331"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_7_1713)">
      <Rect
        x={4}
        y={327}
        width={323}
        height={127}
        rx={63.5}
        transform="rotate(-90 4 327)"
        fill="#F5F5F5"
      />
    </G>
    <Rect
      x={4}
      y={216}
      width={3}
      height={127}
      transform="rotate(-90 4 216)"
      fill="#7E7E7E"
    />
    <Rect
      x={4}
      y={109}
      width={3}
      height={127}
      transform="rotate(-90 4 109)"
      fill="#7E7E7E"
    />
    <Path
      d="M67.5 327C32.4299 327 4 298.57 4 263.5L4 216H131V263.5C131 298.57 102.57 327 67.5 327Z"
      fill="url(#paint0_linear_7_1713)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7_1713"
        x1={131}
        y1={216.128}
        x2={16.5901}
        y2={338.63}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#158EFF" />
        <Stop offset={1} stopColor="#158EFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Stage2 = (props: any) => (
  <Svg
    width={135}
    height={331}
    viewBox="0 0 135 331"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_34_32)">
      <Rect
        x={4}
        y={327}
        width={323}
        height={127}
        rx={63.5}
        transform="rotate(-90 4 327)"
        fill="#F5F5F5"
      />
    </G>
    <Rect
      x={4}
      y={216}
      width={3}
      height={127}
      transform="rotate(-90 4 216)"
      fill="#7E7E7E"
    />
    <Rect
      x={4}
      y={109}
      width={3}
      height={127}
      transform="rotate(-90 4 109)"
      fill="#7E7E7E"
    />
    <Path
      d="M67.5 327C32.4299 327 4 298.57 4 263.5L4 216H131V263.5C131 298.57 102.57 327 67.5 327Z"
      fill="url(#paint0_linear_34_32)"
    />
    <Path d="M4 213L4 109H131V213H4Z" fill="url(#paint1_linear_34_32)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_34_32"
        x1={131}
        y1={216.128}
        x2={16.5901}
        y2={338.63}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#158EFF" />
        <Stop offset={1} stopColor="#158EFF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_34_32"
        x1={131}
        y1={109.12}
        x2={24.5048}
        y2={230.823}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6DFF12" />
        <Stop offset={1} stopColor="#47C8FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);



/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Stage3 = (props: any) => (
  <Svg
    width={135}
    height={331}
    viewBox="0 0 135 331"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_34_59)">
      <Rect
        x={4}
        y={327}
        width={323}
        height={127}
        rx={63.5}
        transform="rotate(-90 4 327)"
        fill="#F5F5F5"
      />
    </G>
    <Rect
      x={4}
      y={216}
      width={3}
      height={127}
      transform="rotate(-90 4 216)"
      fill="#7E7E7E"
    />
    <Rect
      x={4}
      y={109}
      width={3}
      height={127}
      transform="rotate(-90 4 109)"
      fill="#7E7E7E"
    />
    <Path
      d="M67.5 327C32.4299 327 4 298.57 4 263.5L4 216H131V263.5C131 298.57 102.57 327 67.5 327Z"
      fill="url(#paint0_linear_34_59)"
    />
    <Path
      d="M67.5 4C32.4299 4 4 32.4299 4 67.5L4 106H131V67.5C131 32.4299 102.57 4 67.5 4Z"
      fill="url(#paint1_linear_34_59)"
    />
    <Path d="M4 213L4 109H131V213H4Z" fill="url(#paint2_linear_34_59)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_34_59"
        x1={131}
        y1={216.128}
        x2={16.5901}
        y2={338.63}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#158EFF" />
        <Stop offset={1} stopColor="#158EFF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_34_59"
        x1={131}
        y1={105.882}
        x2={26.8408}
        y2={-15.4847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#BC12FF" />
        <Stop offset={1} stopColor="#FF474A" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_34_59"
        x1={131}
        y1={109.12}
        x2={24.5048}
        y2={230.823}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6DFF12" />
        <Stop offset={1} stopColor="#47C8FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);



export default function CartScreen() {
  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [cart, setCart] = React.useState<any[]>([]);

  const [order, setOrder] = React.useState<any>(null);
  const {data} = useLocalSearchParams();
  const parsedData = JSON.parse(data as string);
  const [stage, setStage] = React.useState(1);

  const fetchOrder = async () => {
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/orders/${parsedData.orderId}`);
    const data = await res.json();
    console.log(data);
    setOrder(data);
  };

  useEffect(() => {
    fetchOrder();
  }, [parsedData.orderId]);

  const handleTakeOrder = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/orders/${parsedData.orderId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "delivery" }),
        }
      );
      if (!res.ok) throw new Error("Не удалось обновить статус");
      const updatedOrder = await res.json();
      setOrder(updatedOrder);
      setStage(2); // если нужно поменять стадию
    } catch (e: any) {
      setError(e.message || "Ошибка");
    } finally {
      setLoading(false);
    }
  }
  const handleFinishOrder = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/orders/${parsedData.orderId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "finish" }),
        }
      );
      if (!res.ok) throw new Error("Не удалось обновить статус");
      const updatedOrder = await res.json();
      // setOrder(updatedOrder);
      router.replace("/")
      // setStage(2); // если нужно поменять стадию
    } catch (e: any) {
      console.log(e)
      setError(e.message || "Ошибка");
    } finally {
      setLoading(false);
    }
  }
  
  // useEffect(() => {
  //   const timer1 = setTimeout(() => {
  //     setStage(2);
  //     console.log("first stage done");
  //     const timer2 = setTimeout(() => {
  //       setStage(3);
  //       console.log("second stage done");
  //     }, 2000); // Stage2 держится 10 секунд
  //     return () => clearTimeout(timer2);
  //   }, 2000); // Stage1 держится 10 секунд

  //   return () => clearTimeout(timer1);
  // }, []);
  
  return (
     <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.464717,
          longitude: 35.046183,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
      >
        {/* {!loading && pharmacies.map(pharmacy => (
          <Marker
            key={pharmacy._id}
            coordinate={{
              latitude: pharmacy.coordinates.lat,
              longitude: pharmacy.coordinates.lng,
            }}
            title={pharmacy.name}
            image={{ uri: pharmacy.image }}
            onPress={() => router.push(`/pharmacy/${pharmacy._id}`)}
          />
        ))} */}
        {!loading && order?.items?.map((item: any, idx: number) => {
        const pharmacy = item?.pharmacyProduct?.pharmacy;
        if (!pharmacy?.coordinates) return null;
        return (
          <Marker
            key={pharmacy._id || idx}
            coordinate={{
              latitude: pharmacy.coordinates.lat,
              longitude: pharmacy.coordinates.lng,
            }}
            title={pharmacy.name}
            image={{ uri: pharmacy.image }} // если есть картинка
          />
        );
      })}
      </MapView>
      {
        stage === 1 && (
          <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 300,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'white',
            padding: 16,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              Заберіть замовлення з аптеки
            </Text>
            <Text style={{
              fontSize: 15,
              fontWeight: 'regular',
              marginTop: 20,
              textAlign: 'center',
            }}>
              Щоб почати доставку, вам потрібно отримати замовлення з аптеки
            </Text>
            <GradientButton
            title={loading ? "Приймаємо..." : "Почати доставку"}
            style={{width: "95%", position: "absolute", alignSelf: "center", bottom: 50}}
            onPress={handleTakeOrder}
            disabled={loading}
          />
          </View>
        )
      }
      {
        stage === 2 && (
          <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 300,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'white',
            padding: 16,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              Доставка почалась!
            </Text>
            <Text style={{
              fontSize: 15,
              fontWeight: 'regular',
              marginTop: 20,
              textAlign: 'center',
            }}>
              Вам потрібно доїхати до пункту призначення щоб доставити ліки
            </Text>
            <GradientButton
            title={"Завершити доставку"}
            style={{width: "95%", position: "absolute", alignSelf: "center", bottom: 50}}
            onPress={handleFinishOrder}
            disabled={loading}
          />
          </View>
        )

      }
      
      {/* <SearchButton
        activeOpacity={0.9}
        onPress={() => router.push('/search')}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
