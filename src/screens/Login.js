import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {Input, Item, Button, Label, Content, Text} from 'native-base';
import {loginValidationSchema} from '../helpers/formValidation';

export default function SignUp() {
  return (
    <>
      <Content style={{paddingLeft: 10, paddingRight: 10}}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View>
                <Text style={styles.loginText}>Login</Text>
              </View>
              <View style={styles.paper}>
                <Item style={styles.formInput} floatingLabel>
                  <Label>Email</Label>
                  <Input
                    placeholder="Email"
                    name="email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                </Item>
                {errors.email && touched.email && (
                  <Text style={{color: 'red'}}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.paper}>
                <Item style={styles.formInput} floatingLabel>
                  <Label>Password</Label>
                  <Input
                    placeholder="Password"
                    name="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </Item>
                {errors.password && touched.password && (
                  <Text style={{color: 'red'}}>{errors.password}</Text>
                )}
              </View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text>Forgot your password?</Text>
              </View>
              <Button onPress={handleSubmit} style={styles.btnSignUp} block>
                <Text style={styles.btnText}>Login</Text>
              </Button>
            </>
          )}
        </Formik>
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
    backgroundColor: '#3285A8',
  },
  btnText: {
    fontSize: 17,
    color: 'white',
    textTransform: 'uppercase',
  },
  loginText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 80,
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
  labelText: {
    fontSize: 12,
  },
});
