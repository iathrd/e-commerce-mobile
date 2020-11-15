import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  Item,
  Form,
  Input,
  CardItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ShippingAdress({navigation}) {
  return (
    <Container>
      <Content
        style={{paddingLeft: 10, paddingRight: 10, backgroundColor: '#f5f5f5'}}>
        <View style={{marginTop: 25}}>
          <Form>
            <Item
              rounded
              style={{backgroundColor: 'white', paddingLeft: 10, elevation: 3}}>
              <Icon name="search" size={25} color="grey" />
              <Input style={{color: 'grey'}} placeholder="Search" />
            </Item>
          </Form>
        </View>
        <View style={{marginTop: 25, marginBottom: 25}}>
          <Text style={{fontWeight: 'bold'}}>Shipping adress</Text>
        </View>
        <Card style={{borderRadius: 10}}>
          <CardItem
            style={{
              borderColor: '#3CAEA4',
              borderWidth: 2,
              borderBottomWidth: 2,
              borderRadius: 10,
              paddingTop: 20,
              paddingBottom: 20,
            }}
            bordered>
            <View
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 15,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: 'bold'}}>Jane Doe</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ChangeAdress')}>
                  <Text style={{color: '#3CAEA4'}}>Change</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 10}}>
                <Text>3 Newbridge Court</Text>
                <Text>Chino Hits, CA 91709, United States</Text>
              </View>
            </View>
          </CardItem>
        </Card>

        <Card style={{borderRadius: 10}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 15,
              marginBottom: 20,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold'}}>Jane Doe</Text>
              <TouchableOpacity>
                <Text style={{color: '#3CAEA4'}}>Change</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text>3 Newbridge Court</Text>
              <Text>Chino Hits, CA 91709, United States</Text>
            </View>
          </View>
        </Card>

        <Card style={{borderRadius: 10}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 15,
              marginBottom: 20,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                elevation: 7,
              }}>
              <Text style={{fontWeight: 'bold'}}>Jane Doe</Text>
              <TouchableOpacity>
                <Text style={{color: '#3CAEA4'}}>Change</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text>3 Newbridge Court</Text>
              <Text>Chino Hits, CA 91709, United States</Text>
            </View>
          </View>
        </Card>
        <Button onPress={()=>navigation.navigate('AddAdress')} block style={{borderRadius: 35, marginTop: 10}} bordered dark>
          <Text> Add New Address</Text>
        </Button>
      </Content>
    </Container>
  );
}
