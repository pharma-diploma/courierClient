
import BackIcon from '@/assets/svg/pharmacy/BackIcon'
import CharacteristicsIcon from '@/assets/svg/product/CharacteristicsIcon'
import DescriptionIcon from '@/assets/svg/product/DescriptionIcon'
import FavoriteIcon from '@/assets/svg/product/FavoriteIcon'
import MapIcon from '@/assets/svg/product/MapIcon'
import NextIcon from '@/assets/svg/product/NextIcon'
import Header from '@/components/Header'
import GradientButton from '@/components/ui/GradientButton'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductScreen = () => {
  const { id } = useLocalSearchParams();

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [product, setProduct] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/${id}`);
        if (!res.ok) throw new Error('Не вдалося завантажити продукт');
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        setError('Не вдалося завантажити продукт');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header
        title=""
        titleStyle={{
          fontWeight: 700,
        }}
        style={{paddingHorizontal: 20}}
        leftContent={<BackIcon />}
        leftContentStyle={{elevation: 2, backgroundColor: 'white', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}
        rightContent={<FavoriteIcon />}
        rightContentStyle={{elevation: 2, backgroundColor: 'white', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}
        onLeftPress={() => router.back()}
      />
      <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>
        <Image
          source={{ uri: product?.image }}
          style={{ width: '100%', height: 200, borderRadius: 10, marginBottom: 20 }}
        />
        {loading && <Text>Завантаження...</Text>}
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        {product && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{product.name}</Text>
            <Text style={{ marginTop: 10 }}>{product.description}</Text>


            <View style={{ width: '100%', marginTop: 30, flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 500,
                }}>
                    Ціна в
                </Text>
                <View>
                    <MaskedView maskElement={
                        <Text style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: 'black', // цвет не важен, главное чтобы был
                        textDecorationLine: 'underline',
                        }}>
                        Дніпрі
                        </Text>
                    }>
                        <LinearGradient
                            colors={['#158EFF', '#158EFF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '500',
                            opacity: 0, // текст невидим, используется только маска
                            textDecorationLine: 'underline',
                        }}>
                            Дніпрі
                        </Text>
                        </LinearGradient>
                    </MaskedView>
                </View>

            </View>
            <Text style={{
                fontSize: 24,
                fontWeight: 400,

            }}>
                від 
                <Text style={{fontWeight: 700}}>
                    {" "}{product.minPrice}{" "}
                </Text>
                до 
                <Text style={{fontWeight: 700}}>
                    {" "}{product.maxPrice}{" "}
                </Text>
                грн.
            </Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <GradientButton
                    title="У кошик"
                    style={{width: "48%"}}
                    onPress={() => {}}
                />
                <TouchableOpacity style={{
                    width: "48%",
                    backgroundColor: "#fff",
                    borderWidth: 2,
                    borderColor: "#BEBEBE",
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 6,
                    borderRadius: 40,
                }}>
                    <MapIcon/>
                    <Text style={{fontWeight: 700, fontSize: 20}}>На мапі</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 34, gap: 30}}>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <DescriptionIcon/>
                        <Text style={{fontWeight: 700, fontSize: 16}}>Опис</Text>
                    </View>
                    <NextIcon/>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <CharacteristicsIcon/>
                        <Text style={{fontWeight: 700, fontSize: 16}}>Характеристики</Text>
                    </View>
                    <NextIcon/>
                </TouchableOpacity>
            </View>
            {/* Добавьте другие поля продукта по необходимости */}
          </View>
        )}
      </View>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})