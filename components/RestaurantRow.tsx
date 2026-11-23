import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = { name: string; rating: string; emoji?: string };

export function RestaurantRow({ name, rating, emoji = '🍽️' }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.image}>
        <Text style={{ fontSize: 24 }}>{emoji}</Text>
      </View>
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>⭐ {rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 10,
    borderBottomWidth: 1, borderBottomColor: '#EBEBEB',
  },
  image: {
    width: 50, height: 50, borderRadius: 8, backgroundColor: '#F0F5FA',
    alignItems: 'center', justifyContent: 'center',
  },
  name: { fontSize: 16, color: '#181C2E', marginBottom: 4 },
  rating: { fontSize: 13, color: '#181C2E' },
});