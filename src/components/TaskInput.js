import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TaskInput({value, onChangeTitle, onSubmit}) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.viewTextInput}>
        <TextInput
          placeholder="Buat tugas..."
          onChangeText={onChangeTitle}
          value={value}
        />
      </View>
      <View style={{width: 20}} />
      <TouchableOpacity
        style={styles.btnAdd}
        onPress={onSubmit}
        disabled={value == ''}>
        <Icon name={'plus'} size={30} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  btnAdd: {
    width: 50,
    height: 50,
    backgroundColor: '#6600E7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50 / 2,
    elevation: 5,
  },
  viewTextInput: {
    backgroundColor: '#ECECEC',
    height: 50,
    borderRadius: 50 / 2,
    elevation: 5,
    paddingHorizontal: 20,
    flex: 1,
  },
});
