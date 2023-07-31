import {Text, View, StatusBar, FlatList} from 'react-native';
import React, {useState} from 'react';
import {TaskInput, Task, ModalEditTask} from '../components';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');
  function createTask() {
    setTasks(tasks => {
      return [{title: newTask, id: tasks.length + 1}, ...tasks];
    });
    setNewTask('');
  }

  function deleteTask(id) {
    setTasks(tasks => {
      return tasks.filter(task => task.id != id);
    });
  }

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

  function checkTask(selectedId) {
    setTasks(tasks => {
      return tasks.map(task =>
        task.id == selectedId ? {...task, done: !task.done} : task,
      );
    });
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#330074'} />

      {/* Input Tugas */}
      <TaskInput
        onChangeText={setNewTask}
        value={newTask}
        onPress={createTask}
        disabled={newTask == ''}
      />

      {/* Render Tugas */}
      <FlatList
        data={tasks}
        ListEmptyComponent={() => (
          <Text style={{textAlign: 'center'}}>Tidak ada tugas</Text>
        )}
        renderItem={({item: task}) => {
          return (
            <Task
              task={task}
              onPressCheck={() => checkTask(task.id)}
              onPressDelete={() => deleteTask(task.id)}
              onPressEdit={() => {
                setModalVisible(true);
                setEditedTask(task);
              }}
            />
          );
        }}
      />

      {/* Modal Edit Tugas */}
      <ModalEditTask
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        onPressClose={() => setModalVisible(false)}
        inputValue={editedTask.title}
        onChangeText={taskTitle =>
          setEditedTask({...editedTask, title: taskTitle})
        }
        onPressEdit={editTask}
      />
    </View>
  );
}
