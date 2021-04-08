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
      keyExtractor={(company) => company.id}
      data={arrayMap}
      renderItem={({item}) => {
      return (
          <WatchListItem coinData = {item}/>
      );
    }}
  />
  )
}
