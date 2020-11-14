import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Item, Button, Label, Content, Text} from 'native-base';
import {Formik} from 'formik';
import {restPasswordSchema} from '../helpers/formValidation';

export default function SignUp() {
  return (
    <>
      <Content style={{paddingLeft: 10, paddingRight: 10}}>
        <Formik
          validationSchema={restPasswordSchema}
          initialValues={{newPassword: '', confirmPassword: ''}}
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
                <Text style={styles.loginText}>Reset Password</Text>
              </View>
              <View style={{marginBottom: 20}}>
                {values.newPassword === '' && values.confirmPassword === '' ? (
                  <Text style={{color: 'red'}}>
                    You need to change your password to activate your account
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>
              <View style={styles.paper}>
                <Item style={styles.formInput} floatingLabel>
                  <Label>New Password</Label>
                  <Input
                    placeholder="New Password"
                    secureTextEntry
                    name="newPassword"
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                    value={values.newPassword}
                  />
                </Item>
                {errors.newPassword && touched.confirmPassword && (
                  <Text style={{color: 'red'}}>{errors.newPassword}</Text>
                )}
              </View>
              <View style={styles.paper}>
                <Item style={styles.formInput} floatingLabel>
                  <Label>Confirmation New Password</Label>
                  <Input
                    placeholder="Confirmation New Password"
                    secureTextEntry
                    name="confirmPassword"
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                  />
                </Item>
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
                )}
              </View>
              <Button onPress={handleSubmit} style={styles.btnSignUp} block>
                <Text style={styles.btnText}>Reset Password</Text>
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
    textTransform: 'capitalize',
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
