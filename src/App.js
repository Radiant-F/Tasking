import {StyleSheet, Text, View, StatusBar, FlatList, Alert} from 'react-native';
import React, {useState} from 'react';

import {Header, TaskInput, RenderTask, ModalEditTask} from './components';

export default function App() {
  const [tasks, setTasks] = useState([]);

  // add task
  const [taskTitle, setTaskTitle] = useState('');
  function addTask() {
    setTaskTitle('');
    setTasks([{title: taskTitle, done: false, id: tasks.length + 1}, ...tasks]);
  }

  // delete task
  function deleteTask(id) {
    setTasks(tasks => {
      return tasks.filter(task => task.id != id);
    });
  }
  function confirmDelete(id) {
    Alert.alert('', 'Hapus tugas?', [
      {text: 'Hapus', onPress: () => deleteTask(id)},
      {text: 'Batal'},
    ]);
  }

  // checklist task
  function checklistTask(id) {
    setTasks(tasks => {
      return tasks.map(task =>
        task.id == id ? {...task, done: !task.done} : task,
      );
    });
  }

  // edit task
  const [editedTask, setEditedTask] = useState({
    title: '',
    done: false,
    id: 0,
  });
  const [modalVisible, setModalVisible] = useState(false);
  function editTask() {
    setModalVisible(false);
    setTasks(tasks => {
      return tasks.map(task =>
        task.id == editedTask.id ? {...task, title: editedTask.title} : task,
      );
    });
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#330074'} />

      {/* Header */}
      <Header />

      {/* Text input */}
      <TaskInput
        value={taskTitle}
        onChangeTitle={title => setTaskTitle(title)}
        onSubmit={() => addTask()}
      />

      {/* View data */}
      <FlatList
        data={tasks}
        ListEmptyComponent={
          <Text style={styles.textEmpty}>Tidak ada tugas</Text>
        }
        renderItem={({item}) => {
          return (
            <RenderTask
              item={item}
              onChecklist={() => checklistTask(item.id)}
              onPressEdit={() => {
                setModalVisible(true);
                setEditedTask(item);
              }}
              onPressDelete={() => confirmDelete(item.id)}
            />
          );
        }}
      />

      <ModalEditTask
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        value={editedTask.title}
        onChangeTitle={title => setEditedTask({...editedTask, title})}
        onSubmit={() => editTask()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textEmpty: {
    textAlign: 'center',
    color: 'grey',
  },
});
