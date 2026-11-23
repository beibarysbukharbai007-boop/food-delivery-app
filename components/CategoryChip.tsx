import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = { name: string; price: string; emoji: string; onPress: () => void };

export function CategoryCard({ name, price, emoji, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={{ fontSize: 56 }}>{emoji}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.sub}>
        Starting <Text style={styles.price}>{price}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 130, height: 180, borderRadius: 16, backgroundColor: '#fff', marginRight: 14,
    marginBottom: 24, alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, elevation: 4,
  },
  name: { fontSize: 16, fontWeight: '700', color: '#181C2E', marginTop: 8 },
  sub: { fontSize: 12, color: '#A0A5BA', marginTop: 4 },
  price: { color: '#181C2E', fontWeight: '700' },
});