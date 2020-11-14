import React, {useState} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import {Container, Input, Item, Content, Text, Label} from 'native-base';
import {Formik} from 'formik';

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <Content style={styles.content}>
        <View style={styles.labelView}>
          <Text style={styles.textSettings}>Settings</Text>
          <Text style={styles.textPersonal}>Personal Information</Text>
        </View>
        <Formik
          initialValues={{fullName: '', birthDate: ''}}
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
              <Item style={styles.inputItem} floatingLabel>
                <Label style={styles.label}>Full Name</Label>
                <Input style={styles.input} />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label style={styles.label}>Date of Birth</Label>
                <Input style={styles.input} />
              </Item>
            </>
          )}
        </Formik>
        <View style={styles.changePasswordView}>
          <View style={styles.labelPasswordView}>
            <Text style={styles.textPassword}>Password</Text>
            <Text style={styles.textChange}>Change</Text>
          </View>
          <View>
            <Item style={styles.inputItem} floatingLabel>
              <Label style={styles.label}>Password</Label>
              <Input style={styles.input} secureTextEntry />
            </Item>
          </View>
        </View>
        <View>
          <Text style={styles.notText2}>Notifications</Text>
          <View style={styles.notifView}>
            <Text style={styles.notText}>Sales</Text>
            <Switch
              trackColor={{
                false: 'rgba(155, 155, 155,0.1)',
                true: 'rgba(155, 155, 155,0.1)',
              }}
              thumbColor={isEnabled ? '#2AA952' : '#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.notifView}>
            <Text style={styles.notText}>New arrivals</Text>
            <Switch
              trackColor={{
                false: 'rgba(155, 155, 155,0.1)',
                true: 'rgba(155, 155, 155,0.1)',
              }}
              thumbColor={isEnabled ? '#2AA952' : '#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.notifView}>
            <Text style={styles.notText}>Delivery status changes</Text>
            <Switch
              trackColor={{
                false: 'rgba(155, 155, 155,0.1)',
                true: 'rgba(155, 155, 155,0.1)',
              }}
              thumbColor={isEnabled ? '#2AA952' : '#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#f5f5f5',
  },
  labelView: {
    marginBottom: 10,
  },
  textSettings: {
    fontSize: 34,
    lineHeight: 34,
  },
  textPersonal: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
  changePasswordView: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
  },
  labelPasswordView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputItem: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderBottomColor: 'white',
    borderRadius: 5,
    elevation: 1,
    position: 'relative',
    padding: 15,
  },
  label: {
    marginLeft: 22,
    paddingRight: 8,
    top: 5,
    fontSize: 16,
  },
  input: {
    marginLeft: 10,
    borderColor: 'white',
  },
  textPassword: {
    fontSize: 16,
    lineHeight: 16,
  },
  textChange: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9b9b9b',
  },
  notifView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 23,
  },
  notText: {
    fontSize: 14,
    lineHeight: 20,
  },
  notText2: {
    fontSize: 16,
    lineHeight: 16,
  },
});
