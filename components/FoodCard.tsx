import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = { name: string; place: string; price: number; emoji?: string; onAdd: () => void };

export function FoodCard({ name, place, price, emoji = '🍔', onAdd }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Text style={{ fontSize: 56 }}>{emoji}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.place}>{place}</Text>
      <View style={styles.row}>
        <Text style={styles.price}>${price}</Text>
        <TouchableOpacity style={styles.plus} onPress={onAdd}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%', borderRadius: 16, backgroundColor: '#fff', padding: 12, marginBottom: 16,
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, elevation: 4,
  },
  image: { height: 90, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 14, fontWeight: '700', color: '#181C2E', marginTop: 6 },
  place: { fontSize: 12, color: '#A0A5BA', marginTop: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  price: { fontSize: 16, fontWeight: '700', color: '#181C2E' },
  plus: {
    width: 28, height: 28, borderRadius: 14, backgroundColor: '#FF7622',
    alignItems: 'center', justifyContent: 'center',
  },
  plusText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});