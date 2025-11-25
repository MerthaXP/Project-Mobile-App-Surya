import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Definisi tipe data Barang (bisa dipindah ke folder models nanti jika kompleks)
interface Barang {
  id: string;
  nama: string;
  jumlah: number;
  lokasi: string;
}

interface CardBarangProps {
  item: Barang;
  onPress?: () => void; // Opsional: kalau mau diklik untuk lihat detail
}

const CardBarang: React.FC<CardBarangProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.infoContainer}>
        <Text style={styles.nama}>{item.nama}</Text>
        <Text style={styles.lokasi}>Lokasi: {item.lokasi}</Text>
      </View>
      <View style={styles.qtyContainer}>
        <Text style={styles.qtyLabel}>Stok</Text>
        <Text style={styles.qtyValue}>{item.jumlah}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    // Efek bayangan (Shadow) agar kartu terlihat 'pop-up'
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF', // Aksen warna di kiri kartu
  },
  infoContainer: {
    flex: 1,
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  lokasi: {
    fontSize: 12,
    color: '#666',
  },
  qtyContainer: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 6,
    minWidth: 50,
  },
  qtyLabel: {
    fontSize: 10,
    color: '#888',
  },
  qtyValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default CardBarang;