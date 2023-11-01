import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ModalEditTask({
  visible,
  onClose,
  value,
  onChangeTitle,
  onSubmit,
}) {
  return (
    <Modal
      onRequestClose={onClose}
      transparent={true}
      visible={visible}
      animationType="fade">
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Icon name={'pencil'} color={'black'} size={25} />
            <Text style={{color: 'black', fontWeight: 'bold'}}>Edit Tugas</Text>
            <Icon
              name={'close-circle-outline'}
              color={'black'}
              size={25}
              onPress={onClose}
            />
          </View>
          <TextInput
            underlineColorAndroid={'#330074'}
            style={styles.modalTextInput}
            placeholder="Masukan tugas..."
            value={value}
            onChangeText={onChangeTitle}
          />
          <TouchableOpacity style={styles.btnEdit} onPress={onSubmit}>
            <Text style={styles.textBtnEdit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textBtnEdit: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnEdit: {
    backgroundColor: '#6600E7',
    width: 125,
    height: 45,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTextInput: {
    width: '75%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '85%',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  modalBackdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
