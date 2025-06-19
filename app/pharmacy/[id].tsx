import BackIcon from '@/assets/svg/pharmacy/BackIcon';
import RatingIcon from '@/assets/svg/pharmacy/RatingIcon';
import ShipIcon from '@/assets/svg/pharmacy/ShipIcon';
import TimeIcon from '@/assets/svg/pharmacy/TimeIcon';
import ProductCard from '@/components/cards/ProductCard';
import SearchInput from '@/components/ui/SearchInput';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Pharmacy = () => {
  const insets = useSafeAreaInsets();
    const { id } = useLocalSearchParams();
    const [pharmacyDetails, setPharmacyDetails] = React.useState<any>(null);
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');


    const [newProducts, setNewProducts] = React.useState<any[]>([]);
    const [popularProducts, setPopularProducts] = React.useState<any[]>([]);
    const [allProducts, setAllProducts] = React.useState<any[]>([]);


    const fetchNewProducts = async () => {
      try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/pharmacy/${id}/new`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setNewProducts(data);
      } catch (error) {
        console.error('Error fetching new products:', error);
      }
    };
    const fetchPopularProducts = async () => {
      try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/pharmacy/${id}/popular`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setPopularProducts(data);
      } catch (error) {
        console.error('Error fetching popular products:', error);
      }
    };
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/pharmacy/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching all products:', error);
      }
    };
    
    const handleSearch = async () => {
      console.log(query, id);
      if (!query.trim() || !id) return;
      setLoading(true);
      setError('');
      try {
        const res = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}/products/pharmacy/${id}/search/${encodeURIComponent(query)}`
        );
        if (!res.ok) throw new Error('Помилка пошуку');
        const data = await res.json();
        setResults(data);
      } catch (e) {
        console.log(error);
        setError('Не вдалося знайти результат');
      } finally {
        setLoading(false);
      }
    };
    

    const fetchFarmacyDetails = async () => {
      try {
          const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pharmacies/${id}`);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPharmacyDetails(data);
          return data;
      } catch (error) {
          console.error('Error fetching pharmacy details:', error);
      }
    }

    useEffect(() => {
      fetchFarmacyDetails();
      fetchNewProducts();
      fetchPopularProducts();
      fetchAllProducts();
    }, [])
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity style={{position: 'absolute', top: insets.top + 30, left: 30, zIndex: 10, backgroundColor: "white", width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 50}} onPress={() => router.back()}>
        <BackIcon/>
      </TouchableOpacity>
      {
        pharmacyDetails ?
          <Image
            source={{ uri: pharmacyDetails.logo }}
            style={{ width: '100%', height: 200 }}
          />
          :
          <View style={{ width: '100%', height: 200, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Завантаження...</Text>
          </View>
      }
      <View style={{backgroundColor: 'white', padding: 16, borderRadius: 25, marginTop: -40, flex: 1, height: "100%", shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 15}}>
        {
          pharmacyDetails ?
          <View>
            <Image
              source={{ uri: pharmacyDetails.logo }}
              style={{ width: 100, height: 100, borderRadius: 10, alignSelf: 'center', marginBottom: 16 }}
            />
            <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 700}}>{pharmacyDetails.name}</Text>

            <View style={{flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between', marginTop: 27}}>
              <View style={{backgroundColor: "#FFFFFF", width: 107, elevation: 2, paddingVertical: 12, justifyContent: "center", borderRadius: 40, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <RatingIcon/>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 500
                }}>89%</Text>
              </View>
              <View style={{backgroundColor: "#FFFFFF", width: 107, elevation: 2, paddingVertical: 12, justifyContent: "center", borderRadius: 40, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <TimeIcon/>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 500
                }}>15-25’</Text>
              </View>
              <View style={{backgroundColor: "#FFFFFF", width: 107, elevation: 2, paddingVertical: 12, justifyContent: "center", borderRadius: 40, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <ShipIcon/>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 500
                }}>34,99₴</Text>
              </View>
            </View>

            <View style={{marginTop: 27}}>
              <SearchInput
                  style={{backgroundColor: "#F8F8F8",}}
                  value={query}
                  onChangeText={(v: string) => {setQuery(v); handleSearch()}}
                  // onSubmitEditing={handleSearch}
              />
            </View>

            {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
            {error ? <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text> : null}
            <FlatList
              data={results}
              keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
              renderItem={({ item }) => (
                <ProductCard
                    key={`popular-${item._id}`}
                    _id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    description={item.description}
                  />
              )}
              ListEmptyComponent={
                !loading && !error ? (
                  <Text style={{ textAlign: 'center', marginTop: 32, color: '#888' }}>
                    Нічого не знайдено
                  </Text>
                ) : null
              }
              contentContainerStyle={{ gap: 12, }}
              style={{ marginTop: 24 }}
            />


            <View style={{marginTop: 30}}>
              <Text style={{fontSize: 20, fontWeight: 700}}>Найпопулярніші</Text>
              <View style={{gap: 12, marginTop: 20}}>
              {
                popularProducts.map((item, idx) => (
                  <ProductCard
                    key={`popular-${idx}`}
                    _id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    description={item.description}
                  />
                ))
              }
              </View>
            </View>
            <View style={{marginTop: 30}}>
              <Text style={{fontSize: 20, fontWeight: 700}}>Новинки</Text>
              <View style={{gap: 12, marginTop: 20}}>
              {
                newProducts.map((item, idx) => (
                  <ProductCard
                    key={`new-${idx}`}
                    _id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    description={item.description}
                  />
                ))
              }
              </View>
            </View>
            <View style={{marginTop: 30}}>
              <Text style={{fontSize: 20, fontWeight: 700}}>Усі товари</Text>
              <View style={{gap: 12, marginTop: 20}}>
              {
                allProducts.map((item, idx) => (
                  <ProductCard
                    key={`all-${idx}`}
                    _id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    description={item.description}
                  />
                ))
              }
              </View>
            </View>
          </View>
          :
          <Text style={{textAlign: 'center'}}>Завантаження інформації про аптеку...</Text>
        }
      </View>
    </ScrollView>
  )
}

export default Pharmacy

const styles = StyleSheet.create({})