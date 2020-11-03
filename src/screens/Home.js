import React from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

export default function Home() {
  return (
    <Container style={{paddingLeft: 10, paddingRight: 10}}>
      <Content>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>New</Text>
          <Text>View all</Text>
        </View>
        <View>
          <Text>You've never seen it before</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{elevation: 0}}>
            <Card
              style={{
                backgroundColor: 'black',
                borderRadius: 10,
                elevation: 0,
                borderColor: 'white',
              }}>
              <CardItem style={{borderRadius: 10}} cardBody>
                <View style={{position: 'relative'}}>
                  <View style={styles.imageLabel}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      New
                    </Text>
                  </View>
                  <Image
                    source={require('../assets/img/Realme-3-Pro-3.jpg')}
                    style={{
                      height: 200,
                      width: 150,
                      flex: 1,
                      resizeMode: 'cover',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                </View>
              </CardItem>
              <CardItem style={{paddingLeft: 0}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                  <Text>OVS</Text>
                  <Text>Blouse</Text>
                  <Text>30$</Text>
                </View>
                
              </CardItem>
            </Card>
          </View>
          <View>
            <Card style={{elevation: 4}}>
              <CardItem cardBody>
                <Image
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  style={{
                    height: 200,
                    width: 150,
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
              </CardItem>
              <CardItem>
                <Text>PPPP</Text>
              </CardItem>
            </Card>
          </View>
          <View>
            <Card style={{elevation: 4}}>
              <CardItem cardBody>
                <Image
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  style={{
                    height: 200,
                    width: 150,
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
              </CardItem>
              <CardItem>
                <Text>PPPP</Text>
              </CardItem>
            </Card>
          </View>
          <View>
            <Card style={{elevation: 4}}>
              <CardItem cardBody>
                <Image
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  style={{
                    height: 200,
                    width: 150,
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
              </CardItem>
              <CardItem>
                <Text>PPPP</Text>
              </CardItem>
            </Card>
          </View>
        </ScrollView>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>Popular</Text>
          <Text>View all</Text>
        </View>
        <View>
          <Text>You've never seen it before</Text>
        </View>
        <ScrollView horizontal={true}>
          <View>
            <Card style={{elevation: 4, marginRight: 10}}>
              <CardItem cardBody>
                <Image
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  style={{
                    height: 200,
                    width: 150,
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
              </CardItem>
              <CardItem>
                <Text>PPPP</Text>
              </CardItem>
            </Card>
          </View>
          <View>
            <Card style={{elevation: 4}}>
              <CardItem cardBody>
                <Image
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  style={{
                    height: 200,
                    width: 150,
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
              </CardItem>
              <CardItem style={{paddingLeft: 0}}>
                <Text>PPPP</Text>
              </CardItem>
            </Card>
          </View>
          <View>
            <Card style={{elevation: 4}}>
              <CardItem cardBody>
                <Image
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  style={{
                    height: 200,
                    width: 150,
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
              </CardItem>
              <CardItem>
                <Text>PPPP</Text>
              </CardItem>
            </Card>
          </View>
          <View>
            <Card style={{elevation: 4}}>
              <CardItem cardBody>
                <Image
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  style={{
                    height: 200,
                    width: 150,
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
              </CardItem>
              <CardItem>
                <Text>PPPP</Text>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageLabel: {
    position: 'absolute',
    zIndex: 2,
    left: 10,
    backgroundColor: 'black',
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    marginTop: 5,
  },
  card: {
    borderRadius: 10,
    elevation: 4,
    marginRight: 10,
  },
});
