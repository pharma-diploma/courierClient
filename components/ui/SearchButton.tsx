import SearchIcon from '@/assets/svg/SearchIcon';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SearchButton = (props: any) => {
  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity {...props} style={[ styles.input, {position: "absolute", top: insets.top + 20}]}>
      <SearchIcon style={{ position: 'absolute', left: 24 }} />
      <Text style={{fontSize: 16, color: "#7D7D7D"}}>Знайти ліки</Text>
    </TouchableOpacity>
  )
}

export default SearchButton

const styles = StyleSheet.create({
    input: {
        width: '95%',
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
        elevation: 5,
        justifyContent: 'center',
        zIndex: 1000,
    },
})