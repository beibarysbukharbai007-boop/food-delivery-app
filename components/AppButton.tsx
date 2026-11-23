import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = { title: string; onPress: () => void; color?: string };

export function AppButton({ title, onPress, color = '#8E24AA' }: Props) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { height: 52, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  text: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});