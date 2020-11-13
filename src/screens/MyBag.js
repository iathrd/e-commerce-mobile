import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Left,
  Body,
  Thumbnail,
  Button,
  FooterTab,
  Footer
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MyBag({navigation}) {
  return (
    <Container>
      <Content style={{backgroundColor:"#f5f5f5",paddingLeft: 10, paddingRight: 10}}>
        <View style={{marginBottom:25}}>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>My Bag</Text>
        </View>
        <View style={{marginBottom:20}}>
          <Card style={{height: 120, width: null,borderRadius:15,elevation:4}}>
            <CardItem
              style={{
                margin: 0,
                marginRight: 0,
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: 0,
                display: 'flex',
                flexDirection: 'row',
                borderRadius:15
              }}>
              <View>
                <Image
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  style={{width: 120, height: '100%',borderTopLeftRadius:15,borderBottomLeftRadius:15}}
                />
              </View>
              <View style={{height: '100%', width: '68%',paddingLeft:5,paddingTop:5,paddingRight:5}}>
                <View
                  style={{

                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                      <View>
                  <Text style={{width: 150,fontSize:20,fontWeight:"bold"}}>
                    Handphone
                  </Text>
                  <View style={{display:"flex", flexDirection:"row"}}>
                  <Text style={{color:"grey"}}>Color: <Text>Grey</Text></Text>
                  <Text style={{marginLeft:5,color:"grey"}}>Size: <Text>L</Text></Text>
                </View>
                  </View>
                  
                  <Icon name="dots-vertical" size={30} color="grey" />
                </View>
               
                <View style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"space-between",marginTop:10,paddingRight:5}}>
                    <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Button style={{height:40,width:40,borderRadius:100,backgroundColor:"white",paddingLeft:5}}>
                        <Icon name="minus" size={30} color="grey" />
                    </Button>
                    <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10,marginRight:10}}>1</Text>
                    <Button style={{height:40,width:40,borderRadius:100,backgroundColor:"white",paddingLeft:5}}>
                        <Icon name="plus" size={30} color="grey" />
                    </Button>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold"}}>30$</Text>
                    </View>
                </View>
              </View>
            </CardItem>
          </Card>
        </View>

        <View style={{marginBottom:20}}>
          <Card style={{height: 120, width: null,borderRadius:15,elevation:4}}>
            <CardItem
              style={{
                margin: 0,
                marginRight: 0,
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: 0,
                display: 'flex',
                flexDirection: 'row',
                borderRadius:15
              }}>
              <View>
                <Image
                  source={require('../assets/img/Realme-3-Pro-3.jpg')}
                  style={{width: 120, height: '100%',borderTopLeftRadius:15,borderBottomLeftRadius:15}}
                />
              </View>
              <View style={{height: '100%', width: '68%',paddingLeft:5,paddingTop:5,paddingRight:5}}>
                <View
                  style={{

                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                      <View>
                  <Text style={{width: 150,fontSize:20,fontWeight:"bold"}}>
                    Handphone
                  </Text>
                  <View style={{display:"flex", flexDirection:"row"}}>
                  <Text style={{color:"grey"}}>Color: <Text>Grey</Text></Text>
                  <Text style={{marginLeft:5,color:"grey"}}>Size: <Text>L</Text></Text>
                </View>
                  </View>
                  
                  <Icon name="dots-vertical" size={30} color="grey" />
                </View>
               
                <View style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"space-between",marginTop:10,paddingRight:5}}>
                    <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Button style={{height:40,width:40,borderRadius:100,backgroundColor:"white",paddingLeft:5}}>
                        <Icon name="minus" size={30} color="grey" />
                    </Button>
                    <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10,marginRight:10}}>1</Text>
                    <Button style={{height:40,width:40,borderRadius:100,backgroundColor:"white",paddingLeft:5}}>
                        <Icon name="plus" size={30} color="grey" />
                    </Button>
                    </View>
                    <View>
                        <Text style={{fontWeight:"bold"}}>30$</Text>
                    </View>
                </View>
              </View>
            </CardItem>
          </Card>
        </View>
      </Content>
      <Footer  style={{height:140}}>
      <FooterTab style={{backgroundColor:"white",padding:10,display:"flex",flexDirection:"column"}}>
          <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
              <Text style={{color:"grey"}}>Total amount:</Text>
              <Text style={{fontWeight:"bold"}}>112$</Text>
          </View>
          <View style={{height:60,marginBottom:10}} >
          <Button onPress={()=>navigation.navigate('CheckOut')} style={{backgroundColor:"#3CAEA4",borderRadius:35,height:"100%"}} block>
              <Text style={{fontSize:16,color:"white"}}>Check Out</Text>
          </Button>
          </View>
      </FooterTab>
      </Footer>
    </Container>
  );
}
