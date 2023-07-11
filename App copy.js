import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');
  function createTask() {
    setTasks(tasks => {
      return [{title: newTask, done: false, id: tasks.length + 1}, ...tasks];
    });
  }

  function deleteTask(id) {
    setTasks(tasks => {
      return tasks.filter(task => task.id != id);
    });
  }

  function checkTask(selectedId) {
    setTasks(tasks => {
      return tasks.map(task =>
        task.id == selectedId ? {...task, done: !task.done} : task,
      );
    });
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: '',
    done: false,
    id: null,
  });
  function editTask() {
    setTasks(tasks => {
      return tasks.map(task =>
        task.id == editedTask.id ? {...task, title: editedTask.title} : task,
      );
    });
    setModalVisible(false);
  }

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
          <TextInput placeholder="Buat tugas..." onChangeText={setNewTask} />
        </View>
        <View style={{width: 20}} />
        <TouchableOpacity style={styles.btnAddTask} onPress={createTask}>
          <Icon name={'plus'} size={27} color={'white'} />
        </TouchableOpacity>
      </View>

      {/* Render Tugas */}
      {tasks.length == 0 && (
        <Text style={{textAlign: 'center'}}>Tidak ada tugas</Text>
      )}
      {tasks.length != 0 &&
        tasks.map(task => (
          <View style={styles.viewTasks} key={task.id}>
            <CheckBox
              value={task.done}
              onValueChange={() => checkTask(task.id)}
            />
            <View style={styles.viewTaskContent}>
              <Text style={styles.textTaskTitle}>{task.title}</Text>
              <View style={styles.line} />
              <View>
                <TouchableOpacity
                  style={{...styles.btnOption, backgroundColor: '#6600E7'}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setEditedTask(task);
                  }}>
                  <Icon name={'pencil'} size={21} color={'white'} />
                </TouchableOpacity>
                <View style={{height: 10}} />
                <TouchableOpacity
                  style={{...styles.btnOption, backgroundColor: 'tomato'}}
                  onPress={() => deleteTask(task.id)}>
                  <Icon name={'trash-can'} size={21} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

      {/* Modal Edit */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalAlignment}>
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setModalVisible(!modalVisible)}
          />
          <View style={styles.modalContainer}>
            <Text>Modal Edit</Text>
            <TextInput
              placeholder="Masukan tugas"
              value={editedTask.title}
              onChangeText={title => setEditedTask({...editedTask, title})}
            />
            <Button title="edit" onPress={editTask} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.2,
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
    padding: 20,
    borderRadius: 20,
  },
  modalAlignment: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
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
