import React from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';

const DATA = [
  {
    id: '1',
    title: 'Tops',
  },
  {
    id: '2',
    title: 'Shirt & Blouses',
  },
  {
    id: '3',
    title: 'Cardigans & Sweaters',
  },
  {
    id: '4',
    title: 'Shirt & Blouses',
  },
  {
    id: '5',
    title: 'Cardigans & Sweaters',
  },
  {
    id: '6',
    title: 'Shirt & Blouses',
  },
  {
    id: '7',
    title: 'Cardigans & Sweaters',
  },
];

const Categories = ({data}) => {
  return <Text style={styles.textCategory}>{data.title}</Text>;
};

export default function Category() {
  return (
    <Container>
      <Content style={styles.content}>
        <Button style={styles.btnView} block>
          <Text>View All Items</Text>
        </Button>
        <View>
          <Text style={styles.textChoose}>Choose category</Text>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Categories data={item} />}
          />
        </SafeAreaView>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  btnView: {
    backgroundColor: '#DB3022',
    borderRadius: 35,
    marginBottom: 20,
  },
  textChoose: {
    color: '#9b9b9b',
    marginBottom: 30,
  },
  textCategory: {
    marginBottom: 20,
    marginLeft: 20,
  },
});
