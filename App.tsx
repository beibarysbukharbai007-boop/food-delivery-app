import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  ScrollView,
} from 'react-native';

// 1. БІРІНШІ БЕТ (Логин)
function LoginScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!phone.trim() || !password.trim()) {
      Alert.alert('Қате', 'Өтініш, барлық өрісті толтырыңыз!');
      return;
    }
    // Толтырылса, басты бетке (Home) өтеді
    onNavigate('home');
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Привет, с возвращением!</Text>
      <Text style={styles.subtitle}>Войдите в свой аккаунт</Text>

      <TextInput
        style={styles.input}
        placeholder="Номер телефона"
        placeholderTextColor="#999"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Пароль"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.forgotBtn}
        onPress={() => onNavigate('forgotPassword')}
      >
        <Text style={styles.forgotText}>Забыли пароль?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.purpleButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>У вас нет аккаунта? </Text>
        <TouchableOpacity onPress={() => onNavigate('register')}>
          <Text style={styles.linkText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 2. ЕКІНШІ БЕТ (Парольді қайтару)
function ForgotPasswordScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    if (!phone.trim()) {
      Alert.alert('Қате', 'Телефон нөмірін енгізіңіз!');
      return;
    }
    onNavigate('verifyCode');
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('login')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Восстановление пароля</Text>
      <Text style={styles.subtitle}>
        Введите ваш номер телефона, чтобы восстановить пароль
      </Text>

      <TextInput
        style={styles.input}
        placeholder="+7 (700) 555-77-55"
        placeholderTextColor="#999"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.purpleButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

// 3. ҮШІНШІ БЕТ (Кодты растау)
function VerifyCodeScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('forgotPassword')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Подтвердить номер</Text>
      <Text style={styles.subtitle}>
        Код отправлен на номер +7 (700) 555-77-55
      </Text>

      <View style={styles.codeRow}>
        <View style={styles.codeBox}><Text style={styles.codeText}>7</Text></View>
        <View style={styles.codeBox}><Text style={styles.codeText}>8</Text></View>
        <View style={styles.codeBox}><Text style={styles.codeText}>5</Text></View>
        <View style={styles.codeBox}><Text style={styles.codeText}>4</Text></View>
      </View>

      <TouchableOpacity style={styles.purpleButton} onPress={() => onNavigate('resetPassword')}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

// 4. ТӨРТІНШІ БЕТ (Жаңа пароль)
function ResetPasswordScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('verifyCode')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Сбросить пароль</Text>
      <Text style={styles.subtitle}>Пароль должен состоять из 8 символов</Text>

      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry />
      <TextInput style={styles.input} placeholder="Повторите пароль" secureTextEntry />

      <TouchableOpacity style={styles.purpleButton} onPress={() => onNavigate('login')}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

// 5. БЕСІНШІ БЕТ (Тіркелу)
function RegisterScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('login')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Регистрация</Text>
      <Text style={styles.subtitle}>Создайте учетную запись чтобы продолжить</Text>

      <TextInput style={styles.input} placeholder="Имя" />
      <TextInput style={styles.input} placeholder="Номер телефона" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry />

      <TouchableOpacity style={styles.purpleButton} onPress={() => onNavigate('selectCity')}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// 6. АЛТЫНШЫ БЕТ (Қала таңдау)
function SelectCityScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={() => onNavigate('register')} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Выберите город</Text>
      <Text style={styles.subtitle}>Выберите ваш город из списка</Text>

      <TextInput style={styles.input} placeholder="Выберите город" editable={false} />

      <TouchableOpacity style={styles.purpleButton} onPress={() => onNavigate('home')}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

// ===================== ЖАҢА БЕТТЕР (Food Shop) =====================
type Props = { onNavigate: (screen: string) => void };

const ORANGE = '#FF7622';
const DARK = '#181C2E';
const GREY = '#A0A5BA';
const FIELD = '#F6F6F6';

// ---------- ОРТАҚ БӨЛШЕКТЕР ----------

// Жоғарғы жағы: мекенжай + себет
function TopBar({ onNavigate }: Props) {
  return (
    <View style={shop.topBar}>
      <TouchableOpacity style={shop.roundBtn} onPress={() => onNavigate('login')}>
        <Text style={{ fontSize: 16 }}>☰</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={shop.deliver}>DELIVER TO</Text>
        <Text style={shop.address}>Halal Lab office ▾</Text>
      </View>
      <TouchableOpacity style={shop.cartBtn}>
        <Text style={{ fontSize: 16 }}>🛍️</Text>
        <View style={shop.badge}>
          <Text style={shop.badgeText}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// Ізделетін жол (басқанда Search бетіне өтеді)
function SearchBar({ onNavigate }: Props) {
  return (
    <TouchableOpacity style={shop.searchBar} onPress={() => onNavigate('search')}>
      <Text style={{ color: GREY }}>🔍  Search dishes, restaurants</Text>
    </TouchableOpacity>
  );
}

function SectionHeader({ title, onSeeAll }: { title: string; onSeeAll?: () => void }) {
  return (
    <View style={shop.sectionRow}>
      <Text style={shop.sectionTitle}>{title}</Text>
      <TouchableOpacity onPress={onSeeAll}>
        <Text style={shop.seeAll}>See All ›</Text>
      </TouchableOpacity>
    </View>
  );
}

// Ресторан картасы
function RestaurantCard({ name, emoji, color }: { name: string; emoji: string; color: string }) {
  return (
    <View style={shop.restCard}>
      <View style={[shop.restImage, { backgroundColor: color }]}>
        <Text style={{ fontSize: 70 }}>{emoji}</Text>
      </View>
      <Text style={shop.restName}>{name}</Text>
      <Text style={shop.restTags}>Burger - Chicken - Riche - Wings</Text>
      <View style={shop.restMeta}>
        <Text style={shop.metaText}>⭐ 4.7</Text>
        <Text style={shop.metaText}>🛵 Free</Text>
        <Text style={shop.metaText}>🕒 20 min</Text>
      </View>
    </View>
  );
}

const restaurants = [
  { name: 'Rose Garden Restaurant', emoji: '🥗', color: '#DDE8D5' },
  { name: 'Tasty Treat Gallery', emoji: '🍲', color: '#F3E3CF' },
];

// ---------- 2. ЕКІНШІ БЕТ: HOME (чиптермен) ----------
function HomeScreen({ onNavigate }: Props) {
  const [active, setActive] = useState('All');
  const chips = [
    { label: 'All', icon: '🔥' },
    { label: 'Hot Dog', icon: '🌭' },
    { label: 'Burger', icon: '🍔' },
  ];

  return (
    <View style={shop.safe}>
      <ScrollView contentContainerStyle={shop.scroll} showsVerticalScrollIndicator={false}>
        <TopBar onNavigate={onNavigate} />
        <Text style={shop.greeting}>
          Hey Halal, <Text style={{ fontWeight: '700' }}>Good Afternoon!</Text>
        </Text>
        <SearchBar onNavigate={onNavigate} />

        <SectionHeader title="All Categories" onSeeAll={() => onNavigate('categories')} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {chips.map((c) => (
            <TouchableOpacity
              key={c.label}
              style={[shop.chip, active === c.label && shop.chipActive]}
              onPress={() => {
                setActive(c.label);
                if (c.label === 'Burger') onNavigate('burgers');
              }}
            >
              <Text style={{ fontSize: 18 }}>{c.icon}</Text>
              <Text style={[shop.chipText, active === c.label && { color: '#fff' }]}>{c.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <SectionHeader title="Open Restaurants" />
        {restaurants.map((r) => (
          <RestaurantCard key={r.name} {...r} />
        ))}
      </ScrollView>
    </View>
  );
}

// ---------- 3. ҮШІНШІ БЕТ: КАТЕГОРИЯЛАР (үлкен карталар) ----------
function CategoriesScreen({ onNavigate }: Props) {
  const cats = [
    { name: 'Pizza', price: '$70', emoji: '🍕', go: 'search' },
    { name: 'Burger', price: '$50', emoji: '🍔', go: 'burgers' },
    { name: 'Pasta', price: '$40', emoji: '🍝', go: 'search' },
  ];

  return (
    <View style={shop.safe}>
      <ScrollView contentContainerStyle={shop.scroll} showsVerticalScrollIndicator={false}>
        <TopBar onNavigate={onNavigate} />
        <Text style={shop.greeting}>
          Hey Halal, <Text style={{ fontWeight: '700' }}>Good Afternoon!</Text>
        </Text>
        <SearchBar onNavigate={onNavigate} />

        <SectionHeader title="All Categories" onSeeAll={() => onNavigate('home')} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cats.map((c) => (
            <TouchableOpacity key={c.name} style={shop.bigCat} onPress={() => onNavigate(c.go)}>
              <Text style={{ fontSize: 56 }}>{c.emoji}</Text>
              <Text style={shop.bigCatName}>{c.name}</Text>
              <Text style={shop.bigCatSub}>
                Starting <Text style={{ color: DARK, fontWeight: '700' }}>{c.price}</Text>
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <SectionHeader title="Open Restaurants" />
        <RestaurantCard {...restaurants[0]} />
      </ScrollView>
    </View>
  );
}

// ---------- 4. ТӨРТІНШІ БЕТ: SEARCH ----------
function SearchScreen({ onNavigate }: Props) {
  const [query, setQuery] = useState('');
  const keywords = ['Burger', 'Sandwich', 'Pizza', 'Sandwich'];
  const suggested = [
    { name: 'Pansi Restaurant', rating: '4.7', emoji: '🍽️' },
    { name: 'American Spicy Burger Shop', rating: '4.3', emoji: '🍔' },
    { name: 'Cafenio Coffee Club', rating: '4.0', emoji: '☕' },
  ];
  const popular = [
    { name: 'European Pizza', place: 'Uttora Coffee House', emoji: '🍕' },
    { name: 'Buffalo Pizza', place: 'Cafenio Coffee Club', emoji: '🍕' },
  ];

  return (
    <View style={shop.safe}>
      <ScrollView contentContainerStyle={shop.scroll} keyboardShouldPersistTaps="handled">
        <View style={shop.topBar}>
          <TouchableOpacity style={shop.roundBtn} onPress={() => onNavigate('home')}>
            <Text style={{ fontSize: 16 }}>‹</Text>
          </TouchableOpacity>
          <Text style={[shop.sectionTitle, { flex: 1, marginLeft: 12 }]}>Search</Text>
          <TouchableOpacity style={shop.cartBtn}>
            <Text style={{ fontSize: 16 }}>🛍️</Text>
            <View style={shop.badge}>
              <Text style={shop.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={shop.searchBar}>
          <TextInput
            style={{ flex: 1, color: DARK }}
            placeholder="🔍  Search dishes, restaurants"
            placeholderTextColor={GREY}
            value={query}
            onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')}>
              <Text style={{ color: GREY }}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={shop.blockTitle}>Recent Keywords</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {keywords.map((k, i) => (
            <TouchableOpacity key={i} style={shop.keyword} onPress={() => setQuery(k)}>
              <Text style={shop.keywordText}>{k}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={shop.blockTitle}>Suggested Restaurants</Text>
        {suggested
          .filter((r) => r.name.toLowerCase().includes(query.toLowerCase()))
          .map((r) => (
            <View key={r.name} style={shop.suggestRow}>
              <View style={shop.suggestImg}>
                <Text style={{ fontSize: 24 }}>{r.emoji}</Text>
              </View>
              <View style={{ marginLeft: 12 }}>
                <Text style={shop.suggestName}>{r.name}</Text>
                <Text style={shop.metaText}>⭐ {r.rating}</Text>
              </View>
            </View>
          ))}

        <Text style={shop.blockTitle}>Popular Fast Food</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {popular.map((p) => (
            <View key={p.name} style={shop.popCard}>
              <Text style={{ fontSize: 52 }}>{p.emoji}</Text>
              <Text style={shop.popName}>{p.name}</Text>
              <Text style={shop.metaText}>{p.place}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// ---------- 5. БЕСІНШІ БЕТ: POPULAR BURGERS ----------
function PopularBurgersScreen({ onNavigate }: Props) {
  const burgers = [
    { name: 'Burger Bistro', place: 'Rose Garden', price: 40 },
    { name: "Smokin' Burger", place: 'Cafenio Restaurant', price: 60 },
    { name: 'Buffalo Burgers', place: 'Kaji Firm Kitchen', price: 75 },
    { name: 'Bullseye Burgers', place: 'Kabab Restaurant', price: 94 },
  ];
  const [cart, setCart] = useState(0);

  return (
    <View style={shop.safe}>
      <ScrollView contentContainerStyle={shop.scroll} showsVerticalScrollIndicator={false}>
        <View style={shop.topBar}>
          <TouchableOpacity style={shop.roundBtn} onPress={() => onNavigate('home')}>
            <Text style={{ fontSize: 16 }}>‹</Text>
          </TouchableOpacity>
          <View style={shop.burgerPill}>
            <Text style={shop.address}>BURGER ▾</Text>
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity style={[shop.roundBtn, { backgroundColor: DARK }]} onPress={() => onNavigate('search')}>
            <Text style={{ fontSize: 16 }}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[shop.roundBtn, { marginLeft: 8 }]}>
            <Text style={{ fontSize: 16 }}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <Text style={shop.sectionTitle}>Popular Burgers {cart > 0 ? `(${cart})` : ''}</Text>
        <View style={shop.grid}>
          {burgers.map((b) => (
            <View key={b.name} style={shop.burgerCard}>
              <View style={shop.burgerImg}>
                <Text style={{ fontSize: 56 }}>🍔</Text>
              </View>
              <Text style={shop.burgerName}>{b.name}</Text>
              <Text style={shop.restTags}>{b.place}</Text>
              <View style={shop.priceRow}>
                <Text style={shop.price}>${b.price}</Text>
                <TouchableOpacity style={shop.plusBtn} onPress={() => setCart(cart + 1)}>
                  <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <SectionHeader title="Open Restaurants" />
        <RestaurantCard {...restaurants[1]} />
      </ScrollView>
    </View>
  );
}

// ---------- СТИЛЬДЕР ----------
const shop = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 24, paddingBottom: 40 },

  topBar: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  roundBtn: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: '#ECF0F4',
    alignItems: 'center', justifyContent: 'center',
  },
  deliver: { color: ORANGE, fontSize: 12, fontWeight: '700' },
  address: { color: DARK, fontSize: 14, fontWeight: '600' },
  cartBtn: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: DARK,
    alignItems: 'center', justifyContent: 'center',
  },
  badge: {
    position: 'absolute', top: -2, right: -2, width: 20, height: 20, borderRadius: 10,
    backgroundColor: ORANGE, alignItems: 'center', justifyContent: 'center',
  },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: '700' },

  greeting: { fontSize: 16, color: DARK, marginBottom: 16 },
  searchBar: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: FIELD,
    borderRadius: 10, paddingHorizontal: 16, height: 52, marginBottom: 24,
  },

  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 20, fontWeight: '600', color: DARK, marginBottom: 4 },
  seeAll: { color: GREY, fontSize: 15 },

  chip: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 6, paddingHorizontal: 14,
    borderRadius: 30, backgroundColor: '#fff', marginRight: 10, marginBottom: 24,
    borderWidth: 1, borderColor: '#EDEDED',
  },
  chipActive: { backgroundColor: '#FFB84D', borderColor: '#FFB84D' },
  chipText: { marginLeft: 8, fontSize: 14, fontWeight: '600', color: DARK },

  bigCat: {
    width: 130, height: 180, borderRadius: 16, backgroundColor: '#fff', marginRight: 14,
    marginBottom: 24, alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, elevation: 4,
  },
  bigCatName: { fontSize: 16, fontWeight: '700', color: DARK, marginTop: 8 },
  bigCatSub: { fontSize: 12, color: GREY, marginTop: 4 },

  restCard: { marginBottom: 22 },
  restImage: { height: 150, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  restName: { fontSize: 20, fontWeight: '600', color: DARK, marginTop: 10 },
  restTags: { fontSize: 12, color: GREY, marginTop: 2 },
  restMeta: { flexDirection: 'row', marginTop: 8 },
  metaText: { fontSize: 13, color: DARK, marginRight: 18 },

  blockTitle: { fontSize: 20, fontWeight: '600', color: DARK, marginTop: 8, marginBottom: 14 },
  keyword: {
    paddingVertical: 8, paddingHorizontal: 18, borderRadius: 30, borderWidth: 1,
    borderColor: '#EDEDED', marginRight: 10, marginBottom: 16,
  },
  keywordText: { color: DARK, fontSize: 14 },
  suggestRow: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 10,
    borderBottomWidth: 1, borderBottomColor: '#EBEBEB',
  },
  suggestImg: {
    width: 50, height: 50, borderRadius: 8, backgroundColor: '#F0F5FA',
    alignItems: 'center', justifyContent: 'center',
  },
  suggestName: { fontSize: 16, color: DARK, marginBottom: 4 },
  popCard: {
    width: '48%', borderRadius: 16, backgroundColor: '#fff', alignItems: 'center',
    paddingVertical: 16, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, elevation: 4,
  },
  popName: { fontSize: 14, fontWeight: '700', color: DARK, marginTop: 8 },

  burgerPill: {
    marginLeft: 12, paddingVertical: 12, paddingHorizontal: 16, borderRadius: 30,
    borderWidth: 1, borderColor: '#EDEDED',
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 14 },
  burgerCard: {
    width: '48%', borderRadius: 16, backgroundColor: '#fff', padding: 12, marginBottom: 16,
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, elevation: 4,
  },
  burgerImg: { height: 90, alignItems: 'center', justifyContent: 'center' },
  burgerName: { fontSize: 14, fontWeight: '700', color: DARK, marginTop: 6 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  price: { fontSize: 16, fontWeight: '700', color: DARK },
  plusBtn: {
    width: 28, height: 28, borderRadius: 14, backgroundColor: ORANGE,
    alignItems: 'center', justifyContent: 'center',
  },
});

// БАСТЫ НАВИГАЦИЯ
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login': return <LoginScreen onNavigate={setCurrentScreen} />;
      case 'forgotPassword': return <ForgotPasswordScreen onNavigate={setCurrentScreen} />;
      case 'verifyCode': return <VerifyCodeScreen onNavigate={setCurrentScreen} />;
      case 'resetPassword': return <ResetPasswordScreen onNavigate={setCurrentScreen} />;
      case 'register': return <RegisterScreen onNavigate={setCurrentScreen} />;
      case 'selectCity': return <SelectCityScreen onNavigate={setCurrentScreen} />;
      // Жаңа беттер
      case 'home': return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'categories': return <CategoriesScreen onNavigate={setCurrentScreen} />;
      case 'search': return <SearchScreen onNavigate={setCurrentScreen} />;
      case 'burgers': return <PopularBurgersScreen onNavigate={setCurrentScreen} />;
      default: return <LoginScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {renderScreen()}
    </SafeAreaView>
  );
}

// СТИЛЬДЕР (Figma макеті бойынша)
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  screenContainer: { flexGrow: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 24, paddingTop: 20, justifyContent: 'center' },
  backButton: { marginBottom: 20, alignSelf: 'flex-start' },
  backArrow: { fontSize: 24, color: '#000000' },
  title: { fontSize: 22, fontWeight: '700', color: '#000000', marginBottom: 6 },
  subtitle: { fontSize: 13, color: '#8E8E93', marginBottom: 24 },
  input: { height: 52, backgroundColor: '#F7F7F9', borderRadius: 12, paddingHorizontal: 16, fontSize: 15, color: '#000', borderWidth: 1, borderColor: '#EFEFEF', marginBottom: 16 },
  forgotBtn: { alignSelf: 'flex-end', marginBottom: 24 },
  forgotText: { color: '#8E24AA', fontSize: 13, fontWeight: '500' },
  purpleButton: { height: 52, backgroundColor: '#8E24AA', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  bottomRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  bottomText: { color: '#8E8E93', fontSize: 13 },
  linkText: { color: '#8E24AA', fontSize: 13, fontWeight: '600' },
  codeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30, paddingHorizontal: 20 },
  codeBox: { width: 50, height: 50, borderRadius: 10, borderWidth: 1, borderColor: '#EFEFEF', backgroundColor: '#F7F7F9', justifyContent: 'center', alignItems: 'center' },
  codeText: { fontSize: 18, fontWeight: '700', color: '#000' },
});