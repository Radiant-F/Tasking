import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RenderTask({
  item,
  onChecklist,
  onPressEdit,
  onPressDelete,
}) {
  return (
    <View style={styles.container}>
      <CheckBox
        value={item.done}
        tintColors={{true: '#6600E7', false: '#6600E7'}}
        onValueChange={onChecklist}
      />
      <View style={{width: 15}} />
      <View style={styles.viewTask}>
        <Text style={styles.textTask}>{item.title}</Text>
        <View style={styles.line} />
        <View>
          <TouchableOpacity style={styles.btnOption} onPress={onPressEdit}>
            <Icon name={'pencil'} color={'white'} size={20} />
          </TouchableOpacity>
          <View style={{height: 10}} />
          <TouchableOpacity
            style={{...styles.btnOption, backgroundColor: 'tomato'}}
            onPress={onPressDelete}>
            <Icon name={'trash-can'} color={'white'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  line: {
    height: 50,
    width: 1,
    backgroundColor: 'grey',
    marginHorizontal: 15,
  },
  btnOption: {
    backgroundColor: '#6600E7',
    width: 35,
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTask: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
    flex: 1,
  },
  viewTask: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
