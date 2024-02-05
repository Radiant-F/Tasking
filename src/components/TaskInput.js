import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TaskInput({onChangeText, value, onPress, onSubmit}) {
  return (
    <View style={styles.viewInput}>
      <View style={styles.viewTextInput}>
        <TextInput
          placeholder="Buat tugas..."
          placeholderTextColor={'grey'}
          style={{color: 'black'}}
          onChangeText={onChangeText}
          value={value}
          onSubmitEditing={onSubmit}
        />
      </View>
      <View style={{width: 20}} />
      <TouchableOpacity
        style={styles.btnAddTask}
        onPress={onPress}
        disabled={value == ''}>
        <Icon name={'plus'} size={27} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnAddTask: {
    backgroundColor: '#6600E7',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTextInput: {
    height: 50,
    backgroundColor: '#ECECEC',
    borderRadius: 50 / 2,
    flex: 1,
    elevation: 3,
    paddingHorizontal: 20,
  },
  viewInput: {
    flexDirection: 'row',
    margin: 20,
  },
});
