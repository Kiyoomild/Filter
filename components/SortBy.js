import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SortBy = ({ selectedCategory }) => {
  const [rating, setRating] = useState(0); // 0 to 5 stars

  const handleRating = (star) => {
    setRating(star);
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Text style={i <= rating ? styles.filledStar : styles.emptyStar}>⭐</Text>
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sort by</Text>
      <Text>Selected Category: {selectedCategory ? `Category ${selectedCategory}` : "None"}</Text>
      <View style={styles.starsRow}>{renderStars()}</View>
      <Text style={styles.ratingLabel}>Rating: {rating} Star(s)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  starsRow: { flexDirection: "row", marginTop: 5 },
  filledStar: { fontSize: 28, color: "#FFA500", marginRight: 5 },
  emptyStar: { fontSize: 28, color: "#ccc", marginRight: 5 },
  ratingLabel: { marginTop: 5, fontSize: 14 },
});

export default SortBy;
