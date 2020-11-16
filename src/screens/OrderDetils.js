import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Body,
} from 'native-base';

export default function OrderDetils() {
  return (
    <Container>
      <Content style={styles.content}>
        <View style={styles.headLineView}>
          <View style={styles.headLine}>
            <Text>Order No1947034</Text>
            <Text>05-12-2019</Text>
          </View>
          <View style={styles.headLine}>
            <Text>
              Tracking number: <Text>IW3475453455</Text>
            </Text>
            <Text>Delivere</Text>
          </View>
        </View>
        <View>
          <Text>3 items</Text>
          <Card>
            <CardItem
              style={{
                backgroundColor: 'pink',
                display: 'flex',
                flexDirection: 'row',
                paddingTop: 0,
                paddingLeft: 0,
                paddingBottom: 0,
              }}>
              <View>
                <Thumbnail
                  style={{height: 150, width: 120}}
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  square
                  large
                />
              </View>
              <Body
                style={{paddingTop: 10, paddingLeft: 10, paddingBottom: 10}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      backgroundColor: 'grey',
                      paddingBottom: 0,
                    }}>
                    Pullover
                  </Text>
                  <Text>mango</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{marginRight: 20}}>
                    <Text>
                      Color: <Text>Grey</Text>
                    </Text>
                  </View>
                  <View>
                    <Text>Size: L</Text>
                  </View>
                </View>
                <View>
                  <View  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width:"100%"
                  }}>
                  <Text>Units:</Text>
                  <Text>Units: 1</Text>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
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
  headLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headLineView: {
    marginTop: 23,
  },
});
