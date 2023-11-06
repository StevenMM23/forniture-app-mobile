import { View, Text } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZE, SIZES } from "../../constants/index";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Ionicons, Fontisto } from "@expo/vector-icons";

const Welcome = () => {
  return (
    <View>
      <View>
        <View style={styles.container}>
          <Text style={styles.welcomeTxt(COLORS.black)}>
            {""}
            Find The Most
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
            {""}
            Luxurious Furniture
          </Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View styles={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            OnPressIn={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <View style={styles.searchBtn}>
          <TouchableOpacity>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.green}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
