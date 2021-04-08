import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WatchListCtrl from "../../controllers/watchList/WatchListCtrl"


export default function WatchList({ navigation }) {
  return (
    <View>
      <WatchListCtrl/>
    </View>
  );
}

const styles = StyleSheet.create({});
