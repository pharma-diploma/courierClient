import BackIcon from '@/assets/svg/BackIcon'
import LastSearchIcon from '@/assets/svg/search/LastSearchIcon'
import RemoveIcon from '@/assets/svg/search/RemoveIcon'
import ProductCard from '@/components/cards/ProductCard'
import Header from '@/components/Header'
import SearchInput from '@/components/ui/SearchInput'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const search = () => {
  const [lastRequests, setLastRequests] = React.useState<string[]>([]);
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    AsyncStorage.getItem('lastRequests').then(data => {
      if (data) setLastRequests(JSON.parse(data));
    });
  }, []);

  const addRequest = async (query: string) => {
    let updated = [query, ...lastRequests.filter(r => r !== query)].slice(0, 10);
    setLastRequests(updated);
    await AsyncStorage.setItem('lastRequests', JSON.stringify(updated));
  };

  const removeRequest = async (query: string) => {
    let updated = lastRequests.filter(r => r !== query);
    setLastRequests(updated);
    await AsyncStorage.setItem('lastRequests', JSON.stringify(updated));
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/search/${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error('Помилка пошуку');
      const data = await res.json();
      setResults(data);
      await addRequest(query);
    } catch (e) {
        console.log(error);
      setError('Не вдалося знайти результат');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{backgroundColor: "white", flex: 1}}>
        <Header
            title="Знайти"
            titleStyle={{
                fontWeight: 700,}}
            leftContent={<BackIcon />}
            onLeftPress={() => router.back()}
        />
      <View style={{paddingTop: 100, paddingHorizontal: 20}}>
            <SearchInput
                style={{backgroundColor: "#F8F8F8"}}
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={handleSearch}
            />

            {
                lastRequests.length !== 0 && !loading && !error && results.length === 0 &&
                <View style={{
                    marginTop: 37
                }}>
                    <Text style={{
                        fontWeight: 700,
                        fontSize: 20
                    }}>Останні запити</Text>
                    <View style={{marginTop: 27}}>
                    {
                        lastRequests.map((request, index) => (
                            <>
                            <View style={{
                                marginTop: 20,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 20
                                }}>
                                    <LastSearchIcon/>
                                    <Text
                                        key={index}
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 400,
                                        }}
                                    >
                                        {request}
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => removeRequest(request)}>
                                    <RemoveIcon />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                height: 1,
                                backgroundColor: "#ABABAB",
                                marginTop: 20
                            }} />
                            </>
                        ))
                    }
                    </View>
                </View>
            }
            {loading && <Text>Завантаження...</Text>}
            {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
            {results.length > 0 && (
              <View style={{marginTop: 30}}>
                {results.map((item, idx) => (
                  <ProductCard
                    _id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.minPrice}
                    description={item.description}
                    key={idx}
                  />
                ))}
              </View>
            )}
      </View>
    </View>
  )
}

export default search

const styles = StyleSheet.create({})