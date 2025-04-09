import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CategoryList from "./CategoryList";
import SortBy from "./SortBy";
import PriceSlider from "./PriceSlider";
import ApplyButton from "./ApplyButton";
import BottomNav from "./BottomNav";

const FilterScreen = () => {
  const [price, setPrice] = useState(30);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleBackPress = () => {
    console.log("Back button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Image source={require("../assets/icons/Back.png")}
        style={styles.backButtonImage}
        />
      </TouchableOpacity>
        <Text style={styles.header}>Filter</Text>
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.categoryListContainer}>
          <CategoryList selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        </View>
        <View style={styles.sortByContainer}>
          <SortBy />
        </View>
        <View style={styles.priceSliderContainer}>
          <PriceSlider price={price} setPrice={setPrice} />
        </View>
        <View style={styles.applyButtonContainer}>
          <ApplyButton price={price} selectedCategory={selectedCategory} />
        </View>
        <BottomNav />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFC757" 
},
  headerContainer: { 
    flexDirection: "row", 
    paddingHorizontal: 20 
},
  backButton: { 
    marginRight: 10,
    marginTop: 50,

},
  backButtonImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginTop: 10,
},
  backButtonText: { 
    fontSize: 25, 
    color: "#00000" 
},
  header: { 
    fontSize: 24, 
    fontWeight: "bold",
    marginLeft: 125,
    textAlign: "center", 
    marginTop: 50,
    color: "#fff", 
},
  innerContainer: { 
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 50,
    marginTop: 30,
},
  categoryListContainer: { 
    marginTop: 30, 
    paddingHorizontal: 20,
    marginBottom: 20,
},
  sortByContainer: { 
    marginTop: 20, 
    paddingHorizontal: 20,
    marginBottom: 20,
},
  priceSliderContainer: { 
    marginTop: 20, 
    paddingHorizontal: 20,
    marginBottom: 20,
},
  applyButtonContainer: { 
    marginTop: 30, 
    paddingHorizontal: 20,
    marginBottom: 50,
},
});

export default FilterScreen;
