import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from './Gap';
import styles from '../styles';

type TaskType = {
  task: {
    title: string;
    done: boolean;
    id: number;
  };
  onPressCheck: () => void;
  onPressEdit: () => void;
  onPressDelete: () => void;
};

export default function RenderTask({
  task,
  onPressCheck,
  onPressEdit,
  onPressDelete,
}: TaskType): React.JSX.Element {
  return (
    <View style={styles.viewTask}>
      <CheckBox
        value={task.done}
        onValueChange={onPressCheck}
        tintColors={{true: '#6600E7', false: '#6600E7'}}
      />
      <Gap width={10} />
      <View style={styles.viewTaskDetail}>
        <Text style={styles.textTaskTitle}>{task.title}</Text>
        <View style={styles.viewLine} />
        <View>
          <TouchableOpacity style={styles.btnOption} onPress={onPressEdit}>
            <Icon name={'lead-pencil'} size={21} color={'white'} />
          </TouchableOpacity>
          <View style={{height: 10}} />
          <TouchableOpacity
            style={{...styles.btnOption, backgroundColor: '#FF5B5B'}}
            onPress={onPressDelete}>
            <Icon name={'trash-can'} size={21} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   btnOption: {
//     width: 35,
//     height: 35,
//     borderRadius: 5,
//     elevation: 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   line: {
//     backgroundColor: 'black',
//     width: StyleSheet.hairlineWidth,
//     height: 35,
//     marginHorizontal: 15,
//   },
//   taskTitle: {
//     color: 'black',
//     fontWeight: '500',
//     fontSize: 15,
//     flex: 1,
//   },
//   viewTaskContent: {
//     backgroundColor: 'white',
//     elevation: 5,
//     flexDirection: 'row',
//     flex: 1,
//     borderRadius: 10,
//     padding: 10,
//     paddingHorizontal: 15,
//     alignItems: 'center',
//     marginLeft: 15,
//   },
//   viewTask: {
//     flexDirection: 'row',
//     margin: 20,
//     marginTop: 5,
//     alignItems: 'center',
//   },
// });
