import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const BottomNav = () => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity>
        <Image source={require('../assets/icons/Home.png')} style={styles.icon} />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons/Store.png')} style={styles.icon} />
        <Text style={styles.label}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.favoriteButton}>
        <Image source={require('../assets/icons/Heart.png')} style={styles.iconHeart} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons/History.png')} style={styles.icon} />
        <Text style={styles.label}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/icons/Profile.png')} style={styles.icon} />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FE8935',
    position: 'absolute',
    bottom: 0,
    width:'100%',
    height: 70,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
 },
 icon: {
    width: 30, 
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center', 
 },
 iconHeart: {
    width: 30,
    height: 30, 
    alignSelf: 'center', 
    justifyContent: 'center', 
    paddingBottom: 10,
  },
  favoriteButton: {
    position: 'fixed',
    bottom: 30,
    width: 71,
    height: 71,
    backgroundColor: '#FFC757',
    borderRadius: 71 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontFamily: 'Kani-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default BottomNav;