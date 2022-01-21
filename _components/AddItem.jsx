import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({ addItem }) => {
  const [newItem, setNewItems] = useState('');

  const onChange = (t) => {
    setNewItems(t);
  };

  return (
    <View style={styles.addItem}>
      <TextInput placeholder="Add Item" style={styles.addItemInput} onChangeText={onChange} />
      <TouchableOpacity
        style={styles.addItemBTN}
        onPress={() => {
          addItem(newItem);
          onChange('');
        }}
      >
        <Text style={styles.addItemBTNText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addItemInput: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  addItemBTN: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  addItemBTNText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
