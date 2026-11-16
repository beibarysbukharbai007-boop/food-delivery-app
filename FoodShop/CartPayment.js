import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ORANGE = '#fe7622';
const NIGHT = '#14142b';

function Cart({ onNext }) {
  const [items, setItems] = useState([
    { id: 1, name: 'Pizza Calzone European', price: 32, qty: 2 },
    { id: 2, name: 'Pizza Calzone European', price: 32, qty: 1 },
  ]);

  const change = (id, d) =>
    setItems(items.map(i => (i.id === id ? { ...i, qty: Math.max(1, i.qty + d) } : i)));
  const remove = id => setItems(items.filter(i => i.id !== id));
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <SafeAreaView style={[s.screen, { backgroundColor: NIGHT }]}>
      <View style={s.header}>
        <Text style={[s.title, { color: '#fff' }]}>Cart</Text>
        <Text style={s.done}>DONE</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        {items.map(i => (
          <View key={i.id} style={s.item}>
            <View style={s.pic} />
            <View style={{ flex: 1 }}>
              <Text style={s.itemName}>{i.name}</Text>
              <Text style={s.itemPrice}>${i.price * i.qty}</Text>
              <Text style={s.small}>14"</Text>
            </View>
            <TouchableOpacity style={s.remove} onPress={() => remove(i.id)}>
              <Text style={{ color: '#fff' }}>×</Text>
            </TouchableOpacity>
            <View style={s.qty}>
              <TouchableOpacity style={s.qtyBtn} onPress={() => change(i.id, -1)}>
                <Text style={{ color: '#fff' }}>−</Text>
              </TouchableOpacity>
              <Text style={{ color: '#fff', marginHorizontal: 8 }}>{i.qty}</Text>
              <TouchableOpacity style={s.qtyBtn} onPress={() => change(i.id, 1)}>
                <Text style={{ color: '#fff' }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={s.sheet}>
        <View style={s.row}>
          <Text style={s.small}>DELIVERY ADDRESS</Text>
          <Text style={s.link}>EDIT</Text>
        </View>
        <View style={s.field}>
          <Text style={{ color: '#9aa3b2' }}>2118 Thornridge Cir. Syracuse</Text>
        </View>
        <View style={s.row}>
          <Text style={s.small}>TOTAL: <Text style={s.total}>${total}</Text></Text>
          <Text style={s.link}>Breakdown ›</Text>
        </View>
        <TouchableOpacity style={s.cta} onPress={onNext}>
          <Text style={s.ctaText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Payment({ hasCard, onAdd, onBack }) {
  const methods = ['Cash', 'Visa', 'Mastercard', 'PayPal'];
  return (
    <SafeAreaView style={[s.screen, { backgroundColor: '#fff' }]}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack} style={s.back}>
          <Text style={{ fontSize: 18 }}>‹</Text>
        </TouchableOpacity>
        <Text style={s.title}>Payment</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <View style={s.methods}>
          {methods.map(m => (
            <View key={m} style={[s.method, m === 'Mastercard' && s.methodActive]}>
              <Text style={s.small}>{m}</Text>
            </View>
          ))}
        </View>

        {hasCard ? (
          <View style={s.saved}>
            <View>
              <Text style={{ fontWeight: '600' }}>Master Card</Text>
              <Text style={s.small}>•••• •••• •••• 436</Text>
            </View>
            <Text>▾</Text>
          </View>
        ) : (
          <View style={s.empty}>
            <View style={s.cardArt} />
            <Text style={{ fontWeight: '600', fontSize: 12 }}>No master card added</Text>
            <Text style={s.small}>You can add a mastercard and save it for later</Text>
          </View>
        )}

        <TouchableOpacity style={s.add} onPress={onAdd}>
          <Text style={s.link}>+ ADD NEW</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 16, gap: 12 }}>
        <Text style={s.small}>TOTAL: <Text style={s.total}>$96</Text></Text>
        <TouchableOpacity style={s.cta}>
          <Text style={s.ctaText}>PAY & CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function CartPayment() {
  const [screen, setScreen] = useState('cart');

  if (screen === 'cart') return <Cart onNext={() => setScreen('payEmpty')} />;
  if (screen === 'payEmpty')
    return <Payment hasCard={false} onAdd={() => setScreen('payCard')} onBack={() => setScreen('cart')} />;
  return <Payment hasCard={true} onAdd={() => {}} onBack={() => setScreen('payEmpty')} />;
}

const s = StyleSheet.create({
  screen: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, marginTop: 24 },
  title: { flex: 1, fontSize: 16, fontWeight: '600' },
  back: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#f1f4f9',
    alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  done: { color: '#2ecc8f', fontWeight: '700', fontSize: 12 },

  item: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  pic: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#c27a2c', marginRight: 12 },
  itemName: { color: '#fff', fontWeight: '600', fontSize: 13 },
  itemPrice: { color: '#fff', fontSize: 15, fontWeight: '700', marginVertical: 2 },
  remove: { width: 22, height: 22, borderRadius: 11, backgroundColor: '#ff4d4f',
    alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, top: 0 },
  qty: { position: 'absolute', right: 0, bottom: 0, flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#2a2a45',
    alignItems: 'center', justifyContent: 'center' },

  sheet: { backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24,
    padding: 16, gap: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  field: { backgroundColor: '#f1f4f9', padding: 14, borderRadius: 8 },
  small: { fontSize: 11, color: '#9aa3b2' },
  link: { fontSize: 11, color: ORANGE, fontWeight: '700' },
  total: { fontSize: 18, color: '#1a1a2e', fontWeight: '600' },

  cta: { backgroundColor: ORANGE, borderRadius: 8, padding: 16, alignItems: 'center' },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 12 },

  methods: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  method: { flex: 1, backgroundColor: '#f1f4f9', borderRadius: 10, paddingVertical: 14,
    alignItems: 'center', borderWidth: 2, borderColor: 'transparent' },
  methodActive: { backgroundColor: '#fff', borderColor: ORANGE },
  empty: { backgroundColor: '#f1f4f9', borderRadius: 12, padding: 24, alignItems: 'center', gap: 6 },
  cardArt: { width: 70, height: 46, borderRadius: 8, backgroundColor: '#ff7a3c' },
  saved: { backgroundColor: '#f1f4f9', borderRadius: 10, padding: 14, flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center' },
  add: { borderWidth: 1, borderStyle: 'dashed', borderColor: '#d7dde7', borderRadius: 8,
    padding: 14, alignItems: 'center', marginTop: 12 },
});