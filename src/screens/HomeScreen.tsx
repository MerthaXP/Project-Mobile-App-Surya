import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Header Sederhana */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Halo, Admin!</Text>
        <Text style={styles.subtitle}>Selamat datang di Inventaris Barang</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Kartu Ringkasan (Statistik Sederhana) */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Total Barang</Text>
          <Text style={styles.summaryValue}>150</Text>
          <Text style={styles.summaryLabel}>Items</Text>
        </View>

        <View style={styles.row}>
          <View style={[styles.smallCard, { backgroundColor: colors.success }]}>
            <Text style={styles.cardLabel}>Barang Masuk</Text>
            <Text style={styles.cardValue}>+12</Text>
          </View>
          <View style={[styles.smallCard, { backgroundColor: colors.danger }]}>
            <Text style={styles.cardLabel}>Barang Keluar</Text>
            <Text style={styles.cardValue}>-5</Text>
          </View>
        </View>

        {/* Shortcut ke Input Screen */}
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Input')}
        >
          <Text style={styles.actionText}>+ Tambah Barang Baru</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.9,
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  summaryCard: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryTitle: {
    fontSize: 16,
    color: colors.gray,
  },
  summaryValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.primary,
  },
  summaryLabel: {
    fontSize: 14,
    color: colors.gray,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  smallCard: {
    width: '48%',
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
  },
  cardLabel: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  cardValue: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  actionButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;