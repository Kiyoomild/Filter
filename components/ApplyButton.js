import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ApplyButton = ({ selectedCategory, price }) => {
  return (
    <TouchableOpacity
      style={styles.applyButton}
      onPress={() => alert(`Filters Applied! Category: ${selectedCategory}, Price: ${price}`)}
    >
      <Text style={styles.applyText}>Apply</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  applyButton: {
    backgroundColor: "#FF6B00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  applyText: { color: "white", fontWeight: "bold" },
});

export default ApplyButton;
