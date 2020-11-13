import React from 'react';
import {View, StyleSheet,TouchableOpacity} from 'react-native';
import {Container, Content, Text, Thumbnail, CheckBox, Footer, FooterTab, Button,Card} from 'native-base';

export default function CheckOut({navigation}) {
  return (
    <Container>
      <Content
        style={{paddingLeft: 10, paddingRight: 10, backgroundColor: '#f5f5f5'}}>
        <View style={{marginTop: 25, marginBottom: 25}}>
          <Text style={{fontWeight: 'bold'}}>Shipping adress</Text>
        </View>
        <Card style={{borderRadius:12}}>
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 15}}>
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
        </Card>
        <View style={{display: 'flex', flexDirection: 'column', marginTop: 50}}>
          <Text style={{fontWeight: 'bold', marginBottom: 10}}>Payment</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems:"center",marginBottom:35}}>
              <Thumbnail
                square
                large
                style={{height: 60, width: 90, borderRadius: 12}}
                source={require('../assets/img/Realme-3-Pro-3.jpg')}
              />
              <Text style={{fontSize:18,marginLeft:10,flexGrow:1}}>Mastercard</Text>
              <CheckBox style={{marginRight:10,borderColor:"grey",borderRadius:4}} checked={false} color="#3CAEA4"/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems:"center",marginBottom:35}}>
              <Thumbnail
                square
                large
                style={{height: 60, width: 90, borderRadius: 12}}
                source={require('../assets/img/Realme-3-Pro-3.jpg')}
              />
              <Text style={{fontSize:18,marginLeft:10,flexGrow:1}}>Post Indonesia</Text>
              <CheckBox style={{marginRight:10,borderColor:"grey",borderRadius:4}} checked={false} color="#3CAEA4"/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems:"center",marginBottom:35}}>
              <Thumbnail
                square
                large
                style={{height: 60, width: 90, borderRadius: 12}}
                source={require('../assets/img/Realme-3-Pro-3.jpg')}
              />
              <Text style={{fontSize:18,marginLeft:10,flexGrow:1}}>Gopay</Text>
              <CheckBox style={{marginRight:10,borderColor:"grey",borderRadius:4}} checked={false} color="#3CAEA4"/>
            </View>
          </View>
        </View>
      </Content>
      <Footer style={{height:200}}>
            <FooterTab style={{backgroundColor:"white",display:"flex",flexDirection:"column",padding:10}}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{color:"grey"}}>Order :</Text>
                    <Text style={{fontWeight:"bold"}}>112$</Text>
                </View>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{color:"grey"}}>Delivery :</Text>
                    <Text style={{fontWeight:"bold"}}>15$</Text>
                </View>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{color:"grey"}}>Summary :</Text>
                    <Text style={{fontWeight:"bold"}}>127$</Text>
                </View>
                <View style={{height:60}}>
                    <Button style={{backgroundColor:"#3CAEA4",borderRadius:35}} block>
                        <Text style={{fontSize:16,color:"white"}}>Submit Order</Text>
                    </Button>
                </View>
            </FooterTab>
        </Footer>
    </Container>
  );
}
