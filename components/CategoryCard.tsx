import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = { label: string; icon: string; active?: boolean; onPress: () => void };

export function CategoryChip({ label, icon, active = false, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.chip, active && styles.chipActive]} onPress={onPress}>
      <Text style={{ fontSize: 18 }}>{icon}</Text>
      <Text style={[styles.text, active && { color: '#fff' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 6, paddingHorizontal: 14,
    borderRadius: 30, backgroundColor: '#fff', marginRight: 10, marginBottom: 24,
    borderWidth: 1, borderColor: '#EDEDED',
  },
  chipActive: { backgroundColor: '#FFB84D', borderColor: '#FFB84D' },
  text: { marginLeft: 8, fontSize: 14, fontWeight: '600', color: '#181C2E' },
});