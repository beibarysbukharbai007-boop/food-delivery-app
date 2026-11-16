import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppOld from './AppOld';
import CartPayment from './CartPayment';

export default function App() {
  const [tab, setTab] = useState('old');

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {tab === 'old' ? <AppOld /> : <CartPayment />}
      </View>

      <View style={{ flexDirection: 'row', backgroundColor: '#14142b',
        paddingTop: 8, paddingBottom: 24 }}>
        <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 8 }}
          onPress={() => setTab('old')}>
          <Text style={{ color: tab === 'old' ? '#fe7622' : '#9aa3b2', fontWeight: '700' }}>
            Старые
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 8 }}
          onPress={() => setTab('new')}>
          <Text style={{ color: tab === 'new' ? '#fe7622' : '#9aa3b2', fontWeight: '700' }}>
            Новые
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}