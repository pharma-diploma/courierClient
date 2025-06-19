import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'


interface GradientButtonProps {
    title: string
    onPress: () => void
    style?: ViewStyle
    textStyle?: TextStyle
    disabled?: boolean
}


const GradientButton = (props: GradientButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}
      disabled={props.disabled}
      activeOpacity={0.8}
    >
      {
        props.style?.backgroundColor ?
        <View style={[styles.gradient, { backgroundColor: props.style.backgroundColor }]}>
          <Text style={[styles.text, props.textStyle]}>
            {props.title}
          </Text>
          </View>
          :
          <LinearGradient
            colors={['#158EFF', '#158EFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={[styles.text, props.textStyle]}>
              {props.title}
            </Text>
          </LinearGradient>

      }
    </TouchableOpacity>
  )
}

export default GradientButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    overflow: 'hidden',
    height: 64,
    width: 212,
  },
  gradient: {
    height: '100%',
    // paddingVertical: 14,
    // paddingHorizontal: 24,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 20,
  },
})