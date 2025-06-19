import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BackIcon from '@/assets/svg/BackIcon';
import EditIcon from '@/assets/svg/profile/account/EditIcon';
import Header from '@/components/Header';
import TitledInput from '@/components/ui/TitledInput';
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
            title="Обліковий запис"
            titleStyle={{
                fontWeight: 700,}}
            leftContent={<BackIcon />}
            onLeftPress={() => router.back()}
            rightContent={<Text style={{color: "#FF9012", fontWeight: 600, fontSize: 16}}>Зберегти</Text>} // Placeholder for right content
            onRightPress={() => router.back()}
        />
      <View style={{paddingTop: 100, paddingHorizontal: 20, marginTop: 20}}>
           <Image
                source={require('@/assets/images/userAvatar.jpg')}
                style={[{width: 117, height: 117, borderRadius: 60, alignSelf: 'center', marginBottom: 20}]}
            />
            <TouchableOpacity
                style={{alignSelf: 'center'}}
            >
                <Text style={{fontSize: 16, color: "#12A4FF", textDecorationLine: "underline"}}>Змінити фото</Text>
            </TouchableOpacity>
            
            <View style={{gap: 22}}>
                <TitledInput
                    title="Ім'я"
                    placeholder="Name"
                    value={user?.name || ''}
                    onChangeText={(value: any) => {}}
                    rightIcon={<EditIcon/>}
                />
                <TitledInput
                    title="Password"
                    placeholder="****************"
                    value={user?.name || ''}
                    onChangeText={(value: any) => {}}
                    rightIcon={<EditIcon/>}
                />
                <TitledInput
                    title="Email"
                    placeholder="****************"
                    value={user?.email || ''}
                    onChangeText={(value: any) => {}}
                    rightIcon={<EditIcon/>}
                />
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
