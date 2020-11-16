import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Container, Content, Card, CardItem, Text} from 'native-base';

export default function Home({navigation}) {
  return (
    <Container>
      <Content style={styles.content}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.bannerView}>
          <View style={styles.textBannerView}>
            <Text style={styles.textBanner}>Street clothes</Text>
          </View>
          <View>
            <Image
              source={require('../assets/img/Realme-3-Pro-3.jpg')}
              style={styles.bannerImage}
            />
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.labelCard}>
            <Text style={styles.textLabel}>New</Text>
            <Text>View all</Text>
          </View>
          <View>
            <Text>You've never seen it before</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.cardView}>
              <Card style={styles.card}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetails')}>
                  <CardItem style={styles.cardItem} cardBody>
                    <View style={styles.cardTextView}>
                      <View style={styles.imageLabel}>
                        <Text style={styles.cardText}>New</Text>
                      </View>
                      <Image
                        source={require('../assets/img/Realme-3-Pro-3.jpg')}
                        style={styles.cardImage}
                      />
                    </View>
                  </CardItem>
                  <CardItem style={styles.cardBody}>
                    <View style={styles.cardBodyDisplay}>
                      <Text>OVS</Text>
                      <Text>Blouse</Text>
                      <Text>30$</Text>
                    </View>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            </View>
          </ScrollView>

          <View style={styles.labelCard}>
            <Text style={styles.textLabel}>Trending</Text>
            <Text>View all</Text>
          </View>
          <View>
            <Text>You've never seen it before</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.cardView}>
              <Card style={styles.card}>
                <CardItem style={styles.cardItem} cardBody>
                  <View style={styles.cardTextView}>
                    <View style={styles.imageLabel}>
                      <Text style={styles.cardText}>New</Text>
                    </View>
                    <Image
                      source={require('../assets/img/Realme-3-Pro-3.jpg')}
                      style={styles.cardImage}
                    />
                  </View>
                </CardItem>
                <CardItem style={styles.cardBody}>
                  <View style={styles.cardBodyDisplay}>
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
  content: {
    backgroundColor: '#f5f5f5',
  },
  bannerView: {
    position: 'relative',
  },
  textBannerView: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.20)',
  },
  textBanner: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginTop: 140,
    marginLeft: 10,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  cardContent: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  labelCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLabel: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  cardView: {
    elevation: 0,
  },
  card: {
    borderRadius: 10,
    elevation: 0,
    borderColor: '#f5f5f5',
    marginRight: 10,
  },
  cardItem: {
    borderRadius: 10,
  },
  cardTextView: {
    position: 'relative',
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardImage: {
    height: 200,
    width: 150,
    flex: 1,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    paddingLeft: 0,
    backgroundColor: '#f5f5f5',
  },
  cardBodyDisplay: {
    display: 'flex',
    flexDirection: 'column',
  },
});
