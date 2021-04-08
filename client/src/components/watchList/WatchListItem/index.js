import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function WatchListItem({coinData}){
  return(
    <View style={styles.container}>
      <View style={styles.logo}>
        {/* <Image source={{ uri: coinData.image.small }} style={styles.image} /> */}
        <Text style={styles.text}>{coinData.name}</Text>
      </View>
    
      <View>
        <Text style={styles.right}>Rank</Text>
        <Text style={styles.right}>{coinData.coingecko_rank}</Text>
        
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "space-between",
    height: 125,
    borderBottomWidth: 1,
    borderColor: "#333",
  },
  left: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    paddingLeft: 0,
  },
  imageContainer: {
    width: 75,
    height: 75,
    padding: 10,
  },
  center: {
    width: 150,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right: {
    alignItems: "flex-end",
    textAlign: "right",
    color: "white"
  },
  image: {
    height : 50,
    width : 50,
    
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingRight: 10,
  },
  logo:{
    flexDirection : "row",
    alignItems: "center",

  }
});
