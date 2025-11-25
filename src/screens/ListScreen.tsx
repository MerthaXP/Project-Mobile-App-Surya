import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { colors } from '../constants/colors';

// Import komponen CardBarang Anda di sini jika sudah ada
// import CardBarang from '../components/CardBarang';

// Data Dummy untuk visualisasi
const dummyData = [
  { id: '1', name: 'Laptop Asus ROG', category: 'Elektronik', stock: 5, location: 'Rak A1' },
  { id: '2', name: 'Mouse Logitech', category: 'Aksesoris', stock: 20, location: 'Rak B2' },
  { id: '3', name: 'Keyboard Mechanical', category: 'Aksesoris', stock: 12, location: 'Rak B2' },
  { id: '4', name: 'Monitor LG 24"', category: 'Elektronik', stock: 8, location: 'Gudang Utama' },
];

const ListScreen = () => {
  // Render Item function
  const renderItem = ({ item }: { item: any }) => (
    // Ganti bagian View ini dengan <CardBarang /> Anda nanti
    <View style={styles.card}>
      <View style={styles.cardIcon}>
        <Text style={styles.iconText}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemSubtitle}>{item.category} • {item.location}</Text>
      </View>
      <View style={styles.cardStock}>
        <Text style={styles.stockValue}>{item.stock}</Text>
        <Text style={styles.stockLabel}>Stok</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daftar Inventaris</Text>
      </View>

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
  listContent: {
    padding: 20,
  },
  // Style Card Dummy
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  itemSubtitle: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 2,
  },
  cardStock: {
    alignItems: 'center',
  },
  stockValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  stockLabel: {
    fontSize: 10,
    color: colors.gray,
  },
});

export default ListScreen;