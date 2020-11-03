import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Form, Item, Content, Text, Input, Label} from 'native-base';

export default function ForgotPassword() {
  return (
    <Container>
      <Content style={styles.content}>
        <View>
          <Text style={styles.headerText}>Forgot Password</Text>
        </View>
        <View>
          <Text>
            Please, enter your email address. You will receive a link to create
            a new password via email
          </Text>
        </View>
        <Form>
          <View style={styles.paper}>
            <Item style={styles.formInput} floatingLabel>
              <Label>Email</Label>
              <Input placeholder="Email" />
            </Item>
          </View>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f7f7f7',
  },
  formInput: {
    borderColor: 'transparent',
    borderRadius: 10,
    paddingBottom: 25,
  },
  paper: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 1.5,
    marginBottom: 10,
  },
  headerText:{
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom:80
  }
});
