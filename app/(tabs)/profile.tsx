import AccountIcon from '@/assets/svg/profile/AccountIcon';
import LogOutIcon from '@/assets/svg/profile/LogOutIcon';
import NotificationIcon from '@/assets/svg/profile/NotificationIcon';
import OrderIcon from '@/assets/svg/profile/OrderIcon';
import RemoveIcon from '@/assets/svg/profile/RemoveIcon';
import { useAuth } from '@/context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


function ProfileButton({
  icon,
  title,
  onPress,
}: {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      {icon}
      <Text style={{ fontSize: 16, fontWeight: 500 }}>{title}</Text>
    </TouchableOpacity>
  )
}


export default function TabTwoScreen() {
  const {logout, user} = useAuth();
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };

  const buttons = [
    {
      icon: <OrderIcon />,
      title: 'Мої замовлення',
      onPress: () => router.push('/'),
    },
    {
      icon: <AccountIcon />,
      title: 'Обліковий запис',
      onPress: () => router.push('/account'),
    },
    {
      icon: <RemoveIcon />,
      title: 'Видалити обліковий запис',
      onPress: () => router.push('/'),
    },
    {
      icon: <NotificationIcon />,
      title: 'Повідомлення',
      onPress: () => router.push('/notifications'),
    },
    {
      icon: <LogOutIcon />,
      title: 'Вийти',
      onPress: handleLogout,
    },
  ]
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{height: 440, position: 'relative'}}>
          <LinearGradient
              colors={['#158EFF', '#7BBFFF']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{flex: 1,}}
          >
            <View style={{
              paddingTop: insets.top + 100,
              paddingHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20
            }}>
                <Image
                  source={require('@/assets/images/userAvatar.jpg')}
                  style={[{width: 79, height: 79, borderRadius: 40}]}
                />
                <Text style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 700
                }}>
                  {user?.name || 'User Name'}
                </Text>
            </View>
          </LinearGradient>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: 'white',
          elevation: 10,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 2,

          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginTop: -200,
          paddingTop: 40,
          gap: 50,
          paddingHorizontal: 20,
        }}>
          <Text style={{
            fontSize: 28,
            fontWeight: 700,
          }}>Profile</Text>
          {
            buttons.map((button, index) => (
              <ProfileButton
                key={index}
                icon={button.icon}
                title={button.title}
                onPress={button.onPress}
              />
            ))
          }
          
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
