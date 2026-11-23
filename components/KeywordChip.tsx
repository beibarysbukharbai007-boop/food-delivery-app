import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = { label: string; onPress: () => void };

export function KeywordChip({ label, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.chip} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 8, paddingHorizontal: 18, borderRadius: 30, borderWidth: 1,
    borderColor: '#EDEDED', marginRight: 10, marginBottom: 16,
  },
  text: { color: '#181C2E', fontSize: 14 },
});