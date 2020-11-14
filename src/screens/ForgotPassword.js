import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  Item,
  Content,
  Text,
  Input,
  Label,
  Button,
} from 'native-base';
import {Formik} from 'formik';
import {emailSchema} from '../helpers/formValidation';

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
        <Formik
          validationSchema={emailSchema}
          initialValues={{email: ''}}
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
              <View style={styles.paper}>
                <Item style={styles.formInput} floatingLabel>
                  <Label>Email</Label>
                  <Input
                    placeholder="Email"
                    name="email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </Item>
                {errors.email && touched.email && (
                  <Text style={{color: 'red'}}>{errors.email}</Text>
                )}
              </View>
              <Button onPress={handleSubmit} style={styles.btnSend} block>
                <Text>Send</Text>
              </Button>
            </>
          )}
        </Formik>
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
    marginTop: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  btnSend: {
    borderRadius: 35,
    backgroundColor: '#3285A8',
    marginTop: 60,
  },
});
