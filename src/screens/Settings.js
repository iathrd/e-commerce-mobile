import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Input, Form, Item, Content, Text} from 'native-base';

export default function Settings() {
  return (
    <Container>
      <Content
        style={{paddingLeft: 10, paddingRight: 10, backgroundColor: '#f5f5f5'}}>
        <View style={{marginBottom: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>Settings</Text>
          <Text style={{fontWeight: 'bold', marginTop: 10}}>
            Personal Information
          </Text>
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
    
})
