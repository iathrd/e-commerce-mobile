import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Card} from 'native-base';

export default function MyOrders({navigation}) {
  return (
    <Container>
      <Content
        style={{paddingLeft: 10, paddingRight: 10, backgroundColor: '#f5f5f5'}}>
        <Text style={{fontSize: 35, fontWeight: 'bold'}}>My orders</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
          <Card
            style={{
              borderColor: '#f5f5f5',
              padding: 20,
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              marginTop: 30,
              marginBottom: 20,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text>Order No1947034</Text>
              <Text style={{color: 'grey'}}>05-12-2019</Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={{color: 'grey'}}>
                Tracking number:{' '}
                <Text style={{fontWeight: 'bold'}}>IW3475453455</Text>
              </Text>
              <Text style={{color: 'grey', marginTop: 10}}>
                Quantity: <Text style={{fontWeight: 'bold'}}>3</Text>
              </Text>
              <Text style={{color: 'grey', marginTop: 10}}>
                Total Amount: <Text style={{fontWeight: 'bold'}}>112$</Text>
              </Text>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', color: '#37de45'}}>
                  Delivered
                </Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>

        <Card
          style={{
            borderColor: '#f5f5f5',
            padding: 20,
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Order No1947034</Text>
            <Text style={{color: 'grey'}}>05-12-2019</Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={{color: 'grey'}}>
              Tracking number:{' '}
              <Text style={{fontWeight: 'bold'}}>IW3475453455</Text>
            </Text>
            <Text style={{color: 'grey', marginTop: 10}}>
              Quantity: <Text style={{fontWeight: 'bold'}}>3</Text>
            </Text>
            <Text style={{color: 'grey', marginTop: 10}}>
              Total Amount: <Text style={{fontWeight: 'bold'}}>112$</Text>
            </Text>
            <View style={{alignSelf: 'flex-end'}}>
              <Text style={{fontWeight: 'bold', color: '#37de45'}}>
                Delivered
              </Text>
            </View>
          </View>
        </Card>
        <Card
          style={{
            borderColor: '#f5f5f5',
            padding: 20,
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Order No1947034</Text>
            <Text style={{color: 'grey'}}>05-12-2019</Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={{color: 'grey'}}>
              Tracking number:{' '}
              <Text style={{fontWeight: 'bold'}}>IW3475453455</Text>
            </Text>
            <Text style={{color: 'grey', marginTop: 10}}>
              Quantity: <Text style={{fontWeight: 'bold'}}>3</Text>
            </Text>
            <Text style={{color: 'grey', marginTop: 10}}>
              Total Amount: <Text style={{fontWeight: 'bold'}}>112$</Text>
            </Text>
            <View style={{alignSelf: 'flex-end'}}>
              <Text style={{fontWeight: 'bold', color: '#37de45'}}>
                Delivered
              </Text>
            </View>
          </View>
        </Card>
      </Content>
    </Container>
  );
}
