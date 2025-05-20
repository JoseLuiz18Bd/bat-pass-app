import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './Style';

interface BatTextInputProps {
  pass: string; // Optional prop for input value        
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput 
        style={styles.inputer}
        placeholder='pass'
        value={props.pass}
    />

  );
}