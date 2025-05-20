import React from "react";
import { View } from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home() {
  return (
    <View style={styles.appContainer}>  
      <View style={styles.containerLogo}>
        <BatLogo />
      </View>
      <View style={styles.containerInput}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
}