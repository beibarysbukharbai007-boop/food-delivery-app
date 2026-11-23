import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = { onPress: () => void };

export function BackButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.arrow}>←</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { marginBottom: 20, alignSelf: 'flex-start' },
  arrow: { fontSize: 24, color: '#000000' },
});