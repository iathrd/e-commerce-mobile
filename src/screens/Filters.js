import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Button,
  Form,
  Card,
  CardItem,
  Body,
  Footer,
  FooterTab,
} from 'native-base';
import RadioButtonRN from 'radio-buttons-react-native';

const data = [
  {
    label: 'data 1',
  },
  {
    label: 'data 2',
  },
];

export default function Filters() {
  return (
    <Container>
      <Content style={styles.content}>
        <Form>
          <Text style={styles.textPadding}>Colors</Text>
          <Card>
            <CardItem
              style={{display: 'flex', flexDirection: 'row'}}></CardItem>
          </Card>
          <Text style={styles.textPadding}>Sizes</Text>
          <Card style={{elevation: 1}}>
            <CardItem>
              <Body style={{display: 'flex', flexDirection: 'row'}}>
                <Button bordered style={styles.btnSize}>
                  <Text>XS</Text>
                </Button>
                <Button style={styles.btnSize2} bordered>
                  <Text>S</Text>
                </Button>
                <Button style={styles.btnSize2} bordered>
                  <Text>M</Text>
                </Button>
                <Button style={styles.btnSize2} bordered>
                  <Text>L</Text>
                </Button>
                <Button style={styles.btnSize2} style={styles.btnSize} bordered>
                  <Text>XL</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Text style={styles.textPadding}>Sizes</Text>
          <Card style={{elevation: 1}}>
            <CardItem>
              <Body>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Button bordered style={{paddingLeft: 40, paddingRight: 40}}>
                    <Text>All</Text>
                  </Button>
                  <Button style={{paddingLeft: 25, paddingRight: 25}} bordered>
                    <Text>Women</Text>
                  </Button>
                  <Button style={{paddingRight: 30, paddingLeft: 30}} bordered>
                    <Text>Men</Text>
                  </Button>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 10,
                  }}>
                  <Button
                    style={{paddingLeft: 32, paddingRight: 32, marginRight: 20}}
                    bordered>
                    <Text>Boys</Text>
                  </Button>
                  <Button style={{paddingLeft: 34, paddingRight: 34}} bordered>
                    <Text>Girls</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Form>
      </Content>
      <Footer style={{height: 100}}>
        <FooterTab
          style={{
            backgroundColor: 'white',
            elevation: 3,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
            paddingBottom: 16,
          }}>
          <View style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <Button style={{borderRadius: 35}} bordered>
              <Text>Discard</Text>
            </Button>
            <Button
              style={{
                backgroundColor: '#DB3022',
                borderRadius: 35,
                marginLeft: 10,
                paddingTop: 0,
              }}>
              <Text style={{color: 'white', fontSize: 17}}>Aplly</Text>
            </Button>
          </View>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#f5f5f5',
  },
  btnSize: {
    marginRight: 10,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  btnSize2: {
    marginRight: 10,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },
  textPadding: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 14,
    marginBottom: 14,
  },
  btnSize3: {
    marginRight: 10,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },
});
