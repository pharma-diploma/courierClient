import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


interface TitledInputProps {
    title: string;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    rightIcon?: React.ReactNode;
    onRightIconPress?: () => void;
}

const TitledInput = (props: TitledInputProps) => {
  return (
    <View>
        <Text style={styles.title}>
            {props.title}
        </Text>
        <View style={styles.inputWrapper}>
            <TextInput
                style={[styles.input, props.rightIcon ? { paddingRight: 45 } : null]}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType={props.secureTextEntry ? 'password' : 'none'}
                returnKeyType="done"
                submitBehavior='blurAndSubmit'
                placeholderTextColor="#999"
                selectionColor="#000"
                underlineColorAndroid="transparent"
                clearButtonMode="while-editing"
            />
            {props.rightIcon && (
                <TouchableOpacity
                    style={styles.rightIcon}
                    onPress={props.onRightIconPress}
                    activeOpacity={0.7}
                >
                    {props.rightIcon}
                </TouchableOpacity>
            )}
        </View>
    </View>
  )
}

export default TitledInput

const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
        fontSize: 16,
    },
    inputWrapper: {
        position: 'relative',
        justifyContent: 'center',
        marginTop: 14,
    },
    input: {
        backgroundColor: '#F8F8F8',
        borderRadius: 15,
        paddingVertical: 22,
        paddingHorizontal: 25,
        fontSize: 16,
    },
    rightIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});