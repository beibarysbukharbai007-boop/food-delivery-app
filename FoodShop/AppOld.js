import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ORANGE = '#FF8A00';
const DARK = '#1F1F2E';
const LIGHT_ORANGE = '#FFF1E0';

// ---------- Общие компоненты ----------
function Header({ title, onBack }) {
  return (
    <View style={styles.header}>
      {onBack ? (
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
      ) : null}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

function Illustration({ emoji }) {
  return (
    <View style={styles.illustrationWrap}>
      <View style={styles.circle}>
        <Text style={{ fontSize: 56 }}>{emoji}</Text>
      </View>
    </View>
  );
}

function Input(props) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#B0B0B0"
      {...props}
    />
  );
}

function Button({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

// ---------- Страница 1: Вход ----------
function SignInScreen({ go }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <View style={styles.flex}>
      <Header title="Вход" />
      <View style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>С возвращением!</Text>
          <Text style={styles.subtitle}>Войдите, чтобы заказать вкусную еду</Text>

          <Illustration emoji="🍔" />

          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View>
            <Input
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!show}
            />
            <TouchableOpacity style={styles.eye} onPress={() => setShow(!show)}>
              <Text>{show ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => go('forgot')}>
            <Text style={styles.forgot}>Забыли пароль?</Text>
          </TouchableOpacity>

          <Button
            title="Войти"
            disabled={!email || !password}
            onPress={() => Alert.alert('Успех', 'Добро пожаловать в Food! 🍕')}
          />

          <View style={styles.row}>
            <Text style={styles.small}>Нет аккаунта? </Text>
            <TouchableOpacity onPress={() => go('signup')}>
              <Text style={styles.link}>Регистрация</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// ---------- Страница 2: Регистрация ----------
function SignUpScreen({ go }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.flex}>
      <Header title="Регистрация" onBack={() => go('signin')} />
      <View style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Добро пожаловать!</Text>
          <Text style={styles.subtitle}>Привет, создайте новый аккаунт</Text>

          <Illustration emoji="🍕" />

          <Input placeholder="Имя" value={name} onChangeText={setName} />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View>
            <Input
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!show}
            />
            <TouchableOpacity style={styles.eye} onPress={() => setShow(!show)}>
              <Text>{show ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.checkRow} onPress={() => setAgree(!agree)}>
            <View style={[styles.checkbox, agree && styles.checkboxOn]}>
              {agree ? <Text style={{ color: '#fff', fontSize: 12 }}>✓</Text> : null}
            </View>
            <Text style={styles.small}>
              Создавая аккаунт, вы соглашаетесь с{' '}
              <Text style={styles.link}>Условиями использования</Text>
            </Text>
          </TouchableOpacity>

          <Button
            title="Зарегистрироваться"
            disabled={!name || !email || !password || !agree}
            onPress={() => Alert.alert('Готово', 'Аккаунт создан! 🎉')}
          />

          <View style={styles.row}>
            <Text style={styles.small}>Уже есть аккаунт? </Text>
            <TouchableOpacity onPress={() => go('signin')}>
              <Text style={styles.link}>Войти</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// ---------- Страница 3: Восстановление пароля ----------
function ForgotScreen({ go }) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.flex}>
      <Header title="Восстановление пароля" onBack={() => go('signin')} />
      <View style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Illustration emoji="🔒" />

          <Text style={styles.label}>Введите код</Text>
          <View style={styles.codeRow}>
            <TextInput
              style={[styles.input, { flex: 1, marginBottom: 0 }]}
              placeholder="Код"
              placeholderTextColor="#B0B0B0"
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
              maxLength={4}
            />
            <TouchableOpacity
              style={styles.resend}
              onPress={() => Alert.alert('Отправлено', 'Код отправлен повторно')}
            >
              <Text style={styles.buttonText}>Отправить</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.info}>
            Мы отправили код на номер <Text style={styles.link}>+7 777 123 45 67</Text>
          </Text>
          <Text style={styles.info}>
            Код действителен 10 минут. Если сообщение не пришло, нажмите «Отправить».
          </Text>

          <Button
            title="Сменить пароль"
            disabled={code.length < 4}
            onPress={() => Alert.alert('Готово', 'Пароль успешно изменён ✅')}
          />

          <TouchableOpacity>
            <Text style={[styles.link, { textAlign: 'center', marginTop: 20 }]}>
              Изменить номер телефона
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

// ---------- Главный компонент ----------
export default function App() {
  const [screen, setScreen] = useState('signin');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {screen === 'signin' && <SignInScreen go={setScreen} />}
        {screen === 'signup' && <SignUpScreen go={setScreen} />}
        {screen === 'forgot' && <ForgotScreen go={setScreen} />}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ---------- Стили ----------
const styles = StyleSheet.create({
  flex: { flex: 1 },
  safe: { flex: 1, backgroundColor: ORANGE },
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  back: { color: '#fff', fontSize: 36, marginRight: 12, marginTop: -4 },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  title: { fontSize: 26, fontWeight: 'bold', color: ORANGE },
  subtitle: { fontSize: 13, color: '#666', marginTop: 4 },
  illustrationWrap: { alignItems: 'center', marginVertical: 24 },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: LIGHT_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 14,
    color: DARK,
  },
  eye: { position: 'absolute', right: 14, top: 13 },
  forgot: { textAlign: 'right', color: '#999', fontSize: 12, marginBottom: 20 },
  button: {
    backgroundColor: ORANGE,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonDisabled: { backgroundColor: '#FFD9A8' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  row: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  small: { fontSize: 13, color: '#444', flexShrink: 1 },
  link: { fontSize: 13, color: ORANGE, fontWeight: '600' },
  checkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18, marginTop: 4 },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: ORANGE,
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxOn: { backgroundColor: ORANGE },
  label: { fontSize: 13, color: '#666', marginBottom: 8 },
  codeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  resend: {
    backgroundColor: ORANGE,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 16,
    marginLeft: 10,
  },
  info: { fontSize: 13, color: '#777', marginBottom: 10, lineHeight: 19 },
});
