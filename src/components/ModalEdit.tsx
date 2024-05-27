import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';
import Gap from './Gap';

type ModalEditType = {
  visible: boolean;
  onRequestClose: () => void;
  onBackdropPress: () => void;
  onPressClose: () => void;
  inputValue: string;
  onChangeText: (title: string) => void;
  onPressEdit: () => void;
};

export default function ModalEdit({
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
      <View style={styles.modalContainer}>
        <Pressable style={styles.modalBackdrop} onPress={onBackdropPress} />
        <View style={styles.viewModal}>
          <View style={styles.modalHeader}>
            <Icon name={'lead-pencil'} size={25} color={'black'} />
            <Text style={{color: 'black'}}>Edit Tugas</Text>
            <TouchableOpacity onPress={onPressClose}>
              <Icon name={'close-circle-outline'} size={25} color={'black'} />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Judul tugas..."
            placeholderTextColor={'grey'}
            underlineColorAndroid={'#330074'}
            style={styles.modalInputTask}
            value={inputValue}
            onChangeText={onChangeText}
          />
          <Gap height={10} />
          <TouchableNativeFeedback onPress={onPressEdit}>
            <View style={styles.btnSubmitEdit}>
              <Text style={styles.textSubmitEdit}>Edit</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </Modal>
  );
}

// const styles = StyleSheet.create({
//   modalBackdrop: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'black',
//     opacity: 0.2,
//   },
//   textBtnEdit: {
//     color: 'white',
//     fontWeight: '500',
//     fontSize: 17,
//   },
//   btnEditTask: {
//     backgroundColor: '#6600E7',
//     height: 40,
//     width: 120,
//     alignSelf: 'center',
//     borderRadius: 5,
//     elevation: 3,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     width: '90%',
//     elevation: 5,
//     padding: 20,
//     borderRadius: 20,
//   },
//   modalAlignment: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
