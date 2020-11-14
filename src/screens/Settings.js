import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Input, Form, Item, Content, Text} from 'native-base';

export default function Settings() {
  return (
    <Container>
      <Content style={styles.content}>
        <View style={styles.labelView}>
          <Text style={styles.textSettings}>Settings</Text>
          <Text style={styles.textPersonal}>Personal Information</Text>
        </View>
        <Form>
          <Item>
            <Input />
          </Item>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f5f5f5',
  },
  labelView: {
    marginBottom: 10,
  },
  textSettings: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  textPersonal: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});
