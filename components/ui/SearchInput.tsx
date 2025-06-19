import SearchIcon from '@/assets/svg/SearchIcon';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SearchInput = (props: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[ styles.input]}>
      <SearchIcon style={{ position: 'absolute', left: 24 }} />
      <TextInput
        {...props}
        placeholder='Знайти ліки'
        style={{ flex: 1, fontSize: 16, color: 'black' }}
        placeholderTextColor={"#7D7D7D"}
        returnKeyType="done"
        submitBehavior='blurAndSubmit'
        underlineColorAndroid="transparent"
        clearButtonMode="while-editing"
    />
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    input: {
        width: '100%',
        alignSelf: 'center',
        height: 64,
        backgroundColor: '#F8F8F8',
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingLeft: 63,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        justifyContent: 'center',
        zIndex: 1000,
    },
})