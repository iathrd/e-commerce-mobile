import React from 'react';
import {View, ScrollView, Image, StyleSheet, ImageBackground} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,

} from 'native-base';

export default function Home() {
  return (
    <Container>
      <Content style={{backgroundColor:"#f5f5f5"}}>
      <View style={{position:"relative"}}>
        <View style={{position:"absolute", zIndex:2,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.20)"}}>
          <Text style={{fontWeight:"bold",fontSize:25,color:"white",marginTop:140,marginLeft:10}}>Street clothes</Text>
        </View>
        <View>
        <Image source={require('../assets/img/Realme-3-Pro-3.jpg')} style={{width:"100%",height:200,resizeMode:"stretch"}}/>
        </View>
      </View>
      <View style={{paddingLeft: 10, paddingRight: 20}}>
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
                borderRadius: 10,
                elevation: 0,
                borderColor: '#f5f5f5',
                marginRight:10
                
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
              <CardItem style={{paddingLeft: 0,backgroundColor:"#f5f5f5"}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                  <Text>OVS</Text>
                  <Text>Blouse</Text>
                  <Text>30$</Text>
                </View>
              </CardItem>
            </Card>
          </View>

          <View style={{elevation: 0}}>
            <Card
              style={{
                borderRadius: 10,
                elevation: 0,
                borderColor: '#f5f5f5',
                
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
              <CardItem style={{paddingLeft: 0,backgroundColor:"#f5f5f5"}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                  <Text>OVS</Text>
                  <Text>Blouse</Text>
                  <Text>30$</Text>
                </View>
              </CardItem>
            </Card>
          </View>

          <View style={{elevation: 0}}>
            <Card
              style={{
                borderRadius: 10,
                elevation: 0,
                borderColor: '#f5f5f5',
                
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
              <CardItem style={{paddingLeft: 0,backgroundColor:"#f5f5f5"}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                  <Text>OVS</Text>
                  <Text>Blouse</Text>
                  <Text>30$</Text>
                </View>
              </CardItem>
            </Card>
          </View>

          <View style={{elevation: 0}}>
            <Card
              style={{
                borderRadius: 10,
                elevation: 0,
                borderColor: '#f5f5f5',
                
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
              <CardItem style={{paddingLeft: 0,backgroundColor:"#f5f5f5"}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                  <Text>OVS</Text>
                  <Text>Blouse</Text>
                  <Text>30$</Text>
                </View>
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
        <View style={{elevation: 0}}>
            <Card
              style={{
                borderRadius: 10,
                elevation: 0,
                borderColor: '#f5f5f5',
                marginRight:10
                
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
              <CardItem style={{paddingLeft: 0,backgroundColor:"#f5f5f5"}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                  <Text>OVS</Text>
                  <Text>Blouse</Text>
                  <Text>30$</Text>
                </View>
              </CardItem>
            </Card>
          </View>

          <View style={{elevation: 0}}>
            <Card
              style={{
                borderRadius: 10,
                elevation: 0,
                borderColor: '#f5f5f5',
                
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
              <CardItem style={{paddingLeft: 0,backgroundColor:"#f5f5f5"}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                  <Text>OVS</Text>
                  <Text>Blouse</Text>
                  <Text>30$</Text>
                </View>
              </CardItem>
            </Card>
          </View>

          <View style={{elevation: 0}}>
            <Card
              style={{
                borderRadius: 10,
                elevation: 0,
                borderColor: '#f5f5f5',
                
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
              <CardItem style={{paddingLeft: 0,backgroundColor:"#f5f5f5"}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                  <Text>OVS</Text>
                  <Text>Blouse</Text>
                  <Text>30$</Text>
                </View>
              </CardItem>
            </Card>
          </View>

          <View style={{elevation: 0}}>
            <Card
              style={{
                borderRadius: 10,
                elevation: 0,
                borderColor: '#f5f5f5',
                
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
              <CardItem style={{paddingLeft: 0,backgroundColor:"#f5f5f5"}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                  <Text>OVS</Text>
                  <Text>Blouse</Text>
                  <Text>30$</Text>
                </View>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
        </View>
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
