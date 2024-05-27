import {Text, View, StatusBar, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TaskInput, RenderTask, ModalEdit} from '../components';
import EncryptedStorage from 'react-native-encrypted-storage';
import styles from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type TaskType = {
  title: string;
  id: number;
  done: boolean;
};

export default function Home(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Array<TaskType>>([]);

  const [newTask, setNewTask] = useState('');
  function createTask() {
    const newTasks = [
      {title: newTask, id: Math.random(), done: false},
      ...tasks,
    ];
    setTasks(newTasks);
    setNewTask('');
  }

  async function getTasks() {
    try {
      const tasks = await EncryptedStorage.getItem('tasks');
      if (tasks) setTasks(JSON.parse(tasks));
      else setTasks([]);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  useEffect(() => {
    getTasks();
  }, []);

  async function saveTasks() {
    try {
      await EncryptedStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    saveTasks();
  }, [tasks]);

  function deleteTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id != id);
    setTasks(filteredTasks);
  }

  const [editedTask, setEditedTask] = useState<TaskType>({
    title: '',
    done: false,
    id: 0,
  });
  function editTask() {
    setTasks(tasks => {
      return tasks.map(task =>
        task.id == editedTask.id ? {...task, title: editedTask.title} : task,
      );
    });
    setModalVisible(false);
  }

  function checkTask(selectedId: number) {
    setTasks(tasks => {
      return tasks.map(task =>
        task.id == selectedId ? {...task, done: !task.done} : task,
      );
    });
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#330074'} />
      <View style={styles.viewHeader}>
        <Icon name={'notebook'} size={27} color={'white'} />
        <Text style={styles.textHeader}>Tasking App</Text>
      </View>

      <View style={styles.container}>
        {/* Input Tugas */}
        <TaskInput
          onChangeText={setNewTask}
          value={newTask}
          onPress={createTask}
          onSubmit={() => newTask != '' && createTask()}
        />

        {/* Render Tugas */}
        <FlatList
          data={tasks}
          ListEmptyComponent={() => (
            <Text style={{textAlign: 'center'}}>Tidak ada tugas</Text>
          )}
          renderItem={({item: task}) => {
            return (
              <RenderTask
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
      </View>

      {/* Modal Edit Tugas */}
      <ModalEdit
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
