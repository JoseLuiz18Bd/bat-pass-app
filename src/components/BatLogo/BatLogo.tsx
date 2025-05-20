import React from 'react';
import { Text, Image } from 'react-native';

import { styles } from './Style';
import batLogo from '../../../assets/dark-knight-batman.png'; // Adjust the path as necessary

export function BatLogo() {
  return (
    <>
        <Text  style={styles.title}>
            Bat Pass Generator
        </Text>
        <Image source={batLogo} style={styles.logo}/>
    </>
  );
}