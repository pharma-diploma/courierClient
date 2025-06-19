import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface ToggleProps {
    isActive: boolean;
    onToggle: any;
}

const Toggle = ({isActive, onToggle}: ToggleProps) => {
    const [isToggled, setIsToggled] = useState(isActive);
    const Toggle = () => {
        setIsToggled(prev => !prev);
        onToggle();
    }
  return (
    <TouchableOpacity style={[isToggled ? styles.active : styles.Toggle]} onPress={() => Toggle()}>
        <View style={[isToggled ? styles.ToggleCircleActive : styles.ToggleCircle]}></View>
    </TouchableOpacity>
  )
}

export default Toggle

const styles = StyleSheet.create({
    Toggle: {
        width: 61,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        borderRadius: 28,
        backgroundColor: '#DFDFDF',
        height: 29
    },
    active: {
        width: 61,
        borderWidth: 3,
        borderColor: '#158EFF',
        borderRadius: 28,
        backgroundColor: '#158EFF',
        height: 29
    },
    ToggleCircle: {
        position: 'absolute',
        width: 23,
        height: 23,
        backgroundColor: '#7B7B7B',
        borderRadius:20
    },
    ToggleCircleActive: {
        position: 'absolute',
        width: 23,
        height: 23,
        right: 0,
        backgroundColor: '#158EFF',
        borderRadius:20
    },
})