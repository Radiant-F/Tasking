import {View, TextInput, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';
import Gap from './Gap';

type TaskInputType = {
  onChangeText: (title: string) => void;
  value: string;
  onPress: () => void;
  onSubmit: () => void;
};

export default function TaskInput({
  onChangeText,
  value,
  onPress,
  onSubmit,
}: TaskInputType): React.JSX.Element {
  return (
    <View style={{flexDirection: 'row', margin: 20}}>
      <View style={styles.viewTaskInput}>
        <TextInput
          placeholder="Buat tugas..."
          placeholderTextColor={'grey'}
          style={{color: 'black'}}
          onChangeText={onChangeText}
          value={value}
          onSubmitEditing={onSubmit}
        />
      </View>
      <Gap width={20} />
      <TouchableNativeFeedback
        style={styles.btnAddTask}
        onPress={onPress}
        disabled={value == ''}>
        <View
          style={{
            ...styles.btnAddTask,
            backgroundColor: value == '' ? 'grey' : '#6600E7',
          }}>
          <Icon name={'plus-thick'} size={28} color={'white'} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
