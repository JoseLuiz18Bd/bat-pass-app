import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './Style';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import genetarePass from '../../services/PasswordService';
import * as Clipboard from 'expo-clipboard'; // Importing Clipboard for copy functionality

export function BatButton() {
    const [pass, setPass] = useState(''); // State to hold the input value
    
    function handleGenerateButton() {
        let generateToken = genetarePass();
        setPass(generateToken); // Clear the input field
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass); // Copy the pass to clipboard
    }
    return (
        <>
            <BatTextInput pass={pass}/>
            <Pressable
                onPress={handleGenerateButton}
                style={styles.button}
            >
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>
            <Pressable
                onPress={handleCopyButton}
                style={styles.button}
            >
                <Text style={styles.text}>⚡COPY</Text>
            </Pressable>
        </>
    );
    
}