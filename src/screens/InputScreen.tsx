import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';


const InputScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tambah Barang</Text>
      </View>

      <ScrollView contentContainerStyle={styles.form}>
        {/* Contoh penggunaan komponen manual (Ganti dengan InputField Anda nanti) */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nama Barang</Text>
          <TextInput style={styles.input} placeholder="Contoh: Laptop Asus" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Kategori</Text>
          <TextInput style={styles.input} placeholder="Elektronik" />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
            <Text style={styles.label}>Jumlah</Text>
            <TextInput style={styles.input} placeholder="0" keyboardType="numeric" />
          </View>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>Satuan</Text>
            <TextInput style={styles.input} placeholder="Pcs/Unit" />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Lokasi Penyimpanan</Text>
          <TextInput style={styles.input} placeholder="Gudang A, Rak 3" />
        </View>
        
        {/* Tombol Simpan (Ganti dengan CustomButton Anda nanti) */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Simpan Data</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: colors.black,
    backgroundColor: '#FAFAFA',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default InputScreen;