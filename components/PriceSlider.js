import React from "react";
import { View, Text, StyleSheet } from "react-native"; // ลบ Slider ออกที่นี่
import Slider from '@react-native-community/slider'; // ใช้การนำเข้าที่ถูกต้องที่นี่
import PropTypes from 'prop-types';

const PriceSlider = ({ value, onChange, selectedCategory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price</Text>
      <Text style={styles.categoryText}>
        Selected Category: {selectedCategory ? `Category ${selectedCategory}` : "None"}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={30}
        maximumValue={120}
        step={30}
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40, // เพิ่มขนาดความสูงให้ slider
  },
});

PriceSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedCategory: PropTypes.number,
};

export default PriceSlider;
