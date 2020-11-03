import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Input,
  Form,
  Item,
  Button,
  Label,
  Content,
  Text,
  Icon,
} from 'native-base';

export default function SignUp() {
  return (
    <>
      <Content style={{paddingLeft: 10, paddingRight: 10}}>
        <Form>
          <View>
            <Text style={styles.loginText}>Reset Password</Text>
          </View>
          <View style={{marginBottom:20}}>
              <Text style={{color:"red"}}>You need to change your password to activate your account</Text>
          </View>
          <View style={styles.paper}>
            <Item style={styles.formInput} floatingLabel>
              <Label>New Password</Label>
              <Input placeholder="New Password"  secureTextEntry/>
            </Item>
          </View>
          <View style={styles.paper}>
            <Item style={styles.formInput} floatingLabel>
              <Label>Confirmation New Password</Label>
              <Input placeholder="Confirmation New Password" />
            </Item>
          </View>
          <Button style={styles.btnSignUp} block>
            <Text style={styles.btnText}>Reset Password</Text>
          </Button>
        </Form>
      </Content>
    </>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#ebeae8',
    padding: 0,
    margin: 0,
  },
  form: {
    width: '80%',
  },
  btnSignUp: {
    borderRadius: 25,
    marginTop: 30,
    backgroundColor:"#3285A8"
  },
  btnText: {
    fontSize: 17,
    color: 'white',
    textTransform:"capitalize"
  },
  loginText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom:80,
  },
  formInput: {
   borderColor: 'transparent',
    borderRadius:10,
    paddingBottom:25,

  },
  paper:{
    backgroundColor:"white",
    borderRadius:10,
    elevation:1.5,
    marginBottom:10
  },
  labelText: {
    fontSize: 12,
  },
});