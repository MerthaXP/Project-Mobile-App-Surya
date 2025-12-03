import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          
          <Image 
            source={require('../assets/images/profile.png')} 
            style={styles.avatar} 
            resizeMode="cover" 
          />
          
        </View>
        <Text style={styles.name}>Admin Gudang</Text>
        <Text style={styles.role}>Staff Logistik</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Pengaturan Akun</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Notifikasi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Bantuan</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
          <Text style={[styles.menuText, styles.logoutText]}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.white,
    padding: 30,
    paddingTop: 60,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatarContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    backgroundColor: colors.lightGray,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },
  role: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 5,
  },
  section: {
    padding: 20,
    marginTop: 10,
  },
  menuItem: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: colors.black,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#FFE5E5',
  },
  logoutText: {
    color: colors.danger,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;