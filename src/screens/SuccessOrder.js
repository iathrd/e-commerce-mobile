import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'native-base';

export default function SuccessOrder({navigation}) {
  return (
    <View style={styles.content}>
      <View>
        <Image source={require('../assets/img/bags1.png')} />
      </View>
      <View style={styles.succesView}>
        <Text style={styles.textSuccces}>Success!</Text>
      </View>
      <View style={styles.thanksView}>
        <Text>Your order will be delivered soon</Text>
        <Text>Thank you for choosing our app!</Text>
      </View>
      <Button
        onPress={() => navigation.reset({index: 0, routes: [{name: 'Home'}]})}
        style={styles.btnSave}
        block>
        <Text style={styles.btnText}>Continue Shopping</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  succesView: {
    marginTop: 50,
    marginBottom: 23,
  },
  thanksView: {
    marginBottom: 160,
  },
  textSuccces: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  btnSave: {
    backgroundColor: '#DB3022',
    borderRadius: 35,
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});
