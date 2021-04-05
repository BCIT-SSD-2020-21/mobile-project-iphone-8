import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ConfirmationCtrl from "../../controllers/list/ConfirmationCtrl"
import { useAuth } from "../../context/AuthContext";

export default function Confirmation({route, navigation}) {
  const transaction = route.params
  const user = useAuth();
  
  return (
    <View>
      <ConfirmationCtrl
        //PROPERTIES
        transaction = {transaction}
        navigation = {navigation}
        user = {user}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
