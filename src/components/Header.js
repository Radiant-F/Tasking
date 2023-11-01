import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Icon name={'notebook'} size={30} color={'white'} />
      <Text style={styles.textHeader}>Tasking App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  header: {
    backgroundColor: '#6600E7',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
});
