import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Container, Content, Header, Card, CardItem, Body} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListCategory({navigation}) {
  return (
    <Container style={{backgroundColor: 'white'}}>
      <Header style={{backgroundColor: 'white', elevation: 4}}>
        <StatusBar translucent backgroundColor="grey" />
        <View style={styles.conView}>
          <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
            <View style={styles.iconView}>
              <Icon name="filter-variant" size={30} />
              <Text style={styles.textIcon}>Filters</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconView}>
              <Icon name="swap-vertical" size={30} />
              <Text style={styles.textIcon}>Price: lowest to hight</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconView}>
              <Icon name="view-list" size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </Header>
      <Content style={styles.content}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Card
            style={{
              width: 150,
              elevation: 0,
              backgroundColor: '#f5f5f5',
              borderColor: '#f5f5f5',
              paddingLeft: 0,
              marginRight: 20,
            }}>
            <CardItem cardBody>
              <Image
                source={require('../assets/img/Realme-3-Pro-3.jpg')}
                style={{height: 200, width: null, flex: 1, borderRadius: 10}}
              />
            </CardItem>
            <CardItem style={{paddingLeft: 0}}>
              <Body style={{paddingLeft: 0, flex: 1}}>
                <Text style={{fontSize: 12, color: 'grey'}}>manggo</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  T-Shirt SPANISH
                </Text>
                <Text style={{fontWeight: 'bold'}}>9$</Text>
              </Body>
            </CardItem>
          </Card>
          <Card
            style={{
              width: 150,
              elevation: 0,
              backgroundColor: '#f5f5f5',
              borderColor: '#f5f5f5',
              paddingLeft: 0,
            }}>
            <CardItem style={{position: 'relative'}} cardBody>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: '#DB3022',
                  zIndex: 2,
                  top: 10,
                  left: 10,
                  padding: 5,
                  borderRadius: 16,
                }}>
                <Text style={{color: 'white'}}>-20%</Text>
              </View>
              <Image
                source={require('../assets/img/Realme-3-Pro-3.jpg')}
                style={{height: 200, width: null, flex: 1, borderRadius: 10}}
              />
            </CardItem>
            <CardItem style={{paddingLeft: 0}}>
              <Body style={{paddingLeft: 0, flex: 1}}>
                <Text style={{fontSize: 12, color: 'grey'}}>manggo</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  T-Shirt SPANISH
                </Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'grey',
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                      textDecorationColor: 'black',
                      marginRight: 5,
                    }}>
                    9$
                  </Text>
                  <Text style={{color: 'red', fontWeight: 'bold'}}>14$</Text>
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
  iconView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  conView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textIcon: {
    marginLeft: 5,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});
