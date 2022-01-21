import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItems = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItems}>
      <View style={styles.listItemsView}>
        <Text style={styles.listItemsText}>{item.name}</Text>
        <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemsText: {
    fontSize: 18,
  },
});

export default ListItems;
