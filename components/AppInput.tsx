import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

export function AppInput(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#999"
      {...props}
      style={[styles.input, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 52,
    backgroundColor: '#F7F7F9',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#000',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    marginBottom: 16,
  },
});