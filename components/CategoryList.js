import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";

const categories = [
  { id: 1, name: "Meal", icon: require("../assets/icons/Meal.png") },
  { id: 2, name: "Appetizers", icon: require("../assets/icons/Appetizers.png") },
  { id: 3, name: "Dessert", icon: require("../assets/icons/Dessert.png") },
  { id: 4, name: "Salad", icon: require("../assets/icons/Salad.png") },
  { id: 5, name: "Drinks", icon: require("../assets/icons/Drinks.png") },
];

const CategoryList = ({ selectedCategory, onSelectCategory }) => {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
        <View style={styles.categoriesContainer}>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10,
    marginLeft: 10, 
  },
  categoryItem: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectedCategory: { 
    borderColor: "#FF6B00", 
    backgroundColor: "#FFDAB9" 
  },
  icon: { 
    width: 50, 
    height: 50, 
    marginBottom: 5 
  },
  text: { 
    fontSize: 14 
  },
});

export default CategoryList;
