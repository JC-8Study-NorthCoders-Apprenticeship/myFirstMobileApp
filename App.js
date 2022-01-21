import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './_components/Header';
import ListItems from './_components/ListItems';

import { v4 } from 'uuid';
import AddItem from './_components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: v4(), name: 'Apple' },
    { id: v4(), name: 'Grapes' },
    { id: v4(), name: 'Orange' },
  ]);

  const renderItem = ({ item }) => <ListItems item={item} deleteItem={deleteItem} />;

  const deleteItem = (idw) => {
    setItems((p) => {
      return p.filter((i) => {
        return i.id != idw;
      });
    });
  };

  const addItem = (i) => {
    if (!i) {
      Alert.alert('error', 'Enter Item', { text: 'OK' });
    } else {
      setItems((p) => {
        return [{ id: v4(), name: i }, ...p];
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Shopping List" />
        <AddItem addItem={addItem} />
        <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default App;
