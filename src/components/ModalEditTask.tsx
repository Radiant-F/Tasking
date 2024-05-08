import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type ModalEditType = {
  visible: boolean;
  onRequestClose: () => void;
  onBackdropPress: () => void;
  onPressClose: () => void;
  inputValue: string;
  onChangeText: (title: string) => void;
  onPressEdit: () => void;
};

export default function ModalEditTask({
  visible,
  onRequestClose,
  onBackdropPress,
  onPressClose,
  inputValue,
  onChangeText,
  onPressEdit,
}: ModalEditType): React.JSX.Element {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onRequestClose}>
      <View style={styles.modalAlignment}>
        <Pressable style={styles.modalBackdrop} onPress={onBackdropPress} />
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Icon name={'notebook-edit'} size={27} color={'black'} />
            <Text style={{color: 'black', fontWeight: '500'}}>Edit Tugas</Text>
            <TouchableOpacity onPress={onPressClose}>
              <Icon name={'close-circle-outline'} size={27} color={'black'} />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Edit tugas..."
            placeholderTextColor={'grey'}
            underlineColorAndroid={'#330074'}
            style={{
              marginHorizontal: 30,
              paddingHorizontal: 10,
              color: 'black',
            }}
            value={inputValue}
            onChangeText={onChangeText}
          />
          <View style={{height: 10}} />
          <TouchableOpacity style={styles.btnEditTask} onPress={onPressEdit}>
            <Text style={styles.textBtnEdit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.2,
  },
  textBtnEdit: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
  },
  btnEditTask: {
    backgroundColor: '#6600E7',
    height: 40,
    width: 120,
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
    padding: 20,
    borderRadius: 20,
  },
  modalAlignment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
