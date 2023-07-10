import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#330074'} />

      {/* Header */}
      <View style={styles.viewHeader}>
        <Icon name={'notebook'} size={27} color={'white'} />
        <Text style={styles.textHeaderTitle}>Tasking App</Text>
      </View>

      {/* Input Tugas */}
      <View style={styles.viewInput}>
        <View style={styles.viewTextInput}>
          <TextInput placeholder="Buat tugas..." />
        </View>
        <View style={{width: 20}} />
        <TouchableOpacity style={styles.btnAddTask}>
          <Icon name={'plus'} size={27} color={'white'} />
        </TouchableOpacity>
      </View>

      {/* Render Tugas */}
      <View style={styles.viewTasks}>
        <CheckBox />
        <View style={styles.viewTaskContent}>
          <Text style={styles.textTaskTitle}>Judul tugas</Text>
          <View style={styles.line} />
          <View>
            <TouchableOpacity
              style={{...styles.btnOption, backgroundColor: '#6600E7'}}>
              <Icon name={'pencil'} size={21} color={'white'} />
            </TouchableOpacity>
            <View style={{height: 10}} />
            <TouchableOpacity
              style={{...styles.btnOption, backgroundColor: 'tomato'}}>
              <Icon name={'trash-can'} size={21} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOption: {
    width: 35,
    height: 35,
    backgroundColor: 'aqua',
    borderRadius: 5,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    backgroundColor: 'black',
    width: StyleSheet.hairlineWidth,
    height: 35,
    marginHorizontal: 15,
  },
  textTaskTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    flex: 1,
  },
  viewTaskContent: {
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginLeft: 15,
  },
  viewTasks: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 0,
    alignItems: 'center',
  },
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
  viewHeader: {
    backgroundColor: '#6600E7',
    height: 50,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textHeaderTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
  },
});
