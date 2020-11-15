import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
  Label,
  Card,
  CardItem,
  Button,
} from 'native-base';

export default function AddAdress() {
  return (
    <Container>
      <Content style={styles.content}>
        <Form>
          <Card style={styles.inputView}>
            <CardItem style={styles.cardItem}>
              <Item style={styles.itemInput} floatingLabel>
                <Label style={styles.label}>Full name</Label>
                <Input />
              </Item>
            </CardItem>
          </Card>
          <Card style={styles.inputView}>
            <CardItem style={styles.cardItem}>
              <Item style={styles.itemInput} floatingLabel>
                <Label style={styles.label}>Adress</Label>
                <Input />
              </Item>
            </CardItem>
          </Card>
          <Card style={styles.inputView}>
            <CardItem style={styles.cardItem}>
              <Item style={styles.itemInput} floatingLabel>
                <Label style={styles.label}>City</Label>
                <Input />
              </Item>
            </CardItem>
          </Card>
          <Card style={styles.inputView}>
            <CardItem style={styles.cardItem}>
              <Item style={styles.itemInput} floatingLabel>
                <Label style={styles.label}>State/Province/Region</Label>
                <Input />
              </Item>
            </CardItem>
          </Card>
          <Card style={styles.inputView}>
            <CardItem style={styles.cardItem}>
              <Item style={styles.itemInput} floatingLabel>
                <Label style={styles.label}>Zip Code (Postal Code)</Label>
                <Input />
              </Item>
            </CardItem>
          </Card>
          <Card style={styles.inputView}>
            <CardItem style={styles.cardItem}>
              <Item style={styles.itemInput} floatingLabel>
                <Label style={styles.label}>Country</Label>
                <Input />
              </Item>
            </CardItem>
          </Card>
          <Button style={styles.btnSave} block>
            <Text>Add Adress</Text>
          </Button>
        </Form>
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
    borderRadius: 5,
    marginBottom: 16,
  },
  itemInput: {
    paddingBottom: 12,
    borderColor: 'white',
  },
  label: {
    color: '#9b9b9b',
  },
  cardItem: {
    borderRadius: 5,
  },
  btnSave: {
    marginBottom: 100,
    marginTop: 30,
    borderRadius: 32,
    backgroundColor: '#DB3022',
  },
});
