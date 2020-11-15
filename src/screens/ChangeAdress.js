import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';

export default function ChangeAdress() {
  return (
    <Container>
      <Content style={styles.content}>
        {/* <Card style={{borderRadius: 10}}>
          <CardItem style={styles.inputView}> */}
        <Form>
          <View style={styles.inputView}>
            <Item style={styles.inputItem} stackedLabel>
              <Label>Save adress as (ex: home address, office adress)</Label>
              <Input
                placeholder="Enter home adress"
                placeholderTextColor="rgba(155, 155, 155,0.5)"
              />
            </Item>
            <Item style={styles.inputItem} stackedLabel>
              <Label>Recipient's name</Label>
              <Input
                placeholder="Enter name"
                placeholderTextColor="rgba(155, 155, 155,0.5)"
              />
            </Item>
          </View>
          <View style={styles.inputView}>
            <Item style={styles.inputItem} stackedLabel>
              <Label>Adress</Label>
              <Input
                placeholder="Enter adress"
                placeholderTextColor="rgba(155, 155, 155,0.5)"
              />
            </Item>
            <Item style={styles.inputItem} stackedLabel>
              <Label>City or Subdistrict</Label>
              <Input
                placeholder="Enter city"
                placeholderTextColor="rgba(155, 155, 155,0.5)"
              />
            </Item>
            <Item style={styles.inputItem} stackedLabel>
              <Label>Postal code</Label>
              <Input
                placeholder="Enter code"
                placeholderTextColor="rgba(155, 155, 155,0.5)"
              />
            </Item>
          </View>
          <View style={styles.inputView}>
            <Item style={styles.inputItem} stackedLabel>
              <Label>Recepient's telephone number</Label>
              <Input
                placeholder="Enter adress"
                placeholderTextColor="rgba(155, 155, 155,0.5)"
              />
            </Item>
          </View>
          <Button block style={styles.btnSave}>
            <Text style={styles.btnText}>Save Adress</Text>
          </Button>
        </Form>
        {/* </CardItem>
        </Card> */}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
  },
  inputView: {
    paddingTop: 10,
    borderRadius: 10,
    paddingBottom: 25,
    paddingLeft: 0,
    backgroundColor: 'white',
    paddingRight: 20,
    marginBottom: 10,
  },
  inputItem: {
    paddingBottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#9b9b9b',
  },
  btnSave: {
    marginBottom: 100,
    backgroundColor: '#DB3022',
    borderRadius: 25,
  },
  btnText: {
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: '900',
  },
});
