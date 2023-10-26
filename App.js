import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#330074'} />

      {/* Header */}
      <View style={styles.header}>
        <Icon name={'notebook'} size={30} color={'white'} />
        <Text style={styles.textHeader}>Tasking App</Text>
      </View>

      {/* Text input */}
      <View style={styles.inputContainer}>
        <View style={styles.viewTextInput}>
          <TextInput placeholder="Buat tugas..." />
        </View>
        <View style={{width: 20}} />
        <TouchableOpacity style={styles.btnAdd}>
          <Icon name={'plus'} size={30} color={'white'} />
        </TouchableOpacity>
      </View>

      {/* View data */}
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
        <CheckBox
          value={true}
          tintColors={{true: '#6600E7', false: '#6600E7'}}
        />
        <View style={{width: 15}} />
        <View style={styles.viewTask}>
          <Text style={styles.textTask}>Contoh tugas baru</Text>
          <View style={styles.line} />
          <View>
            <TouchableOpacity style={styles.btnOption}>
              <Icon name={'pencil'} color={'white'} size={25} />
            </TouchableOpacity>
            <View style={{height: 10}} />
            <TouchableOpacity
              style={{...styles.btnOption, backgroundColor: 'tomato'}}>
              <Icon name={'trash-can'} color={'white'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal transparent={true} visible={true}>
        <View style={styles.modalBackdrop}>
          <Text>Modal edit tugas</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000033',
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
