import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZE, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeTxt: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 5,
    marginTop: SIZES.xSmall,
    marginTop: top,
    marginHorizontal: 12,
    color: color,
  }),
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height:50
  },
  searchIcon: { 
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small
  },
  searchWrapper: { 
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small
  },
  searchInput: { 
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small
  },
  searchBtn : { 
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",

  }
});

export default styles;
