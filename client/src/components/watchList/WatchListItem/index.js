import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function WatchListItem({coinData}){
  return(
    <View>
      <Text>{coinData.id}</Text>
      <Text>{coinData.coingecko_rank}</Text>
      <Text>{coinData.coingecko_score}</Text>
    </View>
    
  )
}