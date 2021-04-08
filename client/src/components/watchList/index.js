import React, { useEffect } from "react";
import { StyleSheet, Text, View,FlatList, } from "react-native";
import { useState } from "react";
import WatchListItem from "./WatchListItem"


export default function WatchList({
  //PROPERTIES
  arrayMap
}) {
  
  return (
    <FlatList
    style={styles.flatList}
      keyExtractor={(coinData) => coinData.id}
      data={arrayMap}
      renderItem={({item}) => {
      return (
          <WatchListItem coinData = {item}/>
      );
    }}
  />
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  flatList: {
    backgroundColor: "#1a1a1a",
    height: "100%",
  },
});