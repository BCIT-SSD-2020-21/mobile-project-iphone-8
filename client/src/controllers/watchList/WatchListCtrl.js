import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WatchList from "../../components/watchList"
import { getCoin } from "../../network"

export default function WatchListCtrl() {

  const [watchListData, setWatchListData] = useState(["bitcoin"]);
  const [arrayMap, setArrayMap] = useState(["coinid"])

  const getWatchList = async () => {
    let watchListData = await AsyncStorage.getItem("watchListData");
    watchListData = JSON.parse(watchListData);
    setWatchListData(watchListData);
  };

  const getCoinMap = async () => {
    const array = await Promise.all(watchListData.map( 
      coinId => getCoin({coinId : coinId}))) 
    setArrayMap(array)
  
  }

  useEffect(() => {
    getWatchList();
  }, []);

  useEffect(() => {
    getCoinMap();
  }, []);

  return (
    <View>
      <WatchList
        arrayMap = {arrayMap}/>
    </View>
  )
}
