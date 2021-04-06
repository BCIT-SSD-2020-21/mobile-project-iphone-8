import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardView from '../CardView';
import CurrencyList from '../CurrencyList';

export default function Profile({ user, markets, buyFunction }) {
  if (!user) {
    return <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  }
  const { username, cash } = user;

  const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  return (
    <View style={styles.container}>
      <CardView
        image={<Icon size={40} color="white" name="user-circle" />}
        topText={username}
        bottomText='San Francisco, CA'
        width={200}
      />
      <CardView
        image={<Icon size={40} color='white' name='wallet' />}
        topText={`Wallet: ${moneyFormatter.format(cash)}`}
        width={200}
      />
      <View style={{ paddingTop: 50, paddingBottom: 5, flexDirection: 'row', marginHorizontal: 20 }}>
        <View style={{flex: 1}}>
          <Text style={styles.text}>Portfolio</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {buyFunction()}}>
            <Text style={styles.text}>Add <Icon size={23} color='white' name='plus-circle'></Icon></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <CurrencyList markets={markets} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1A1A1A',
    paddingTop: '10%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold'
  }
});
