import { StyleSheet, Text, View } from 'react-native';

import BackIcon from '@/assets/svg/BackIcon';
import Header from '@/components/Header';
import Toggle from '@/components/ui/Toggle';
import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import React from 'react';

export default function CartScreen() {
  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [cart, setCart] = React.useState<any[]>([]);
  
  return (
     <View style={{backgroundColor: "white", flex: 1}}>
        <Header
            title="Повідомлення"
            titleStyle={{
                fontWeight: 700,}}
            leftContent={<BackIcon />}
            onLeftPress={() => router.back()}
        />
      <View style={{paddingTop: 100, paddingHorizontal: 20}}>
            <View style={styles.itemsWrapper}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Акційні повідомлення</Text>
            <Toggle
              isActive={user?.notifications?.sales as boolean}
              onToggle={() => {}}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Повідомлення про статус замовлення</Text>
            <Toggle
              isActive={user?.notifications?.orderStatus as boolean}
              onToggle={() => {}}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Повідомлення від кур’єра</Text>
            <Toggle
              isActive={user?.notifications?.deliveryMessage as boolean}
              onToggle={() => {}}
            />
          </View>
        </View>
            
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  itemsWrapper: {
    marginTop: 60,
  },
  item: {
    width: "100%",
    alignItems: "center",
    marginBottom: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  itemText: {
    fontSize: 20,
    maxWidth: "80%",
    fontWeight: 400,
  },
});
