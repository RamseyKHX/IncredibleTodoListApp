// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TextInput,
//   Button,
//   Pressable,
// } from 'react-native';
// import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

// type Task = {
//   id: number;
//   text: string;
//   completed: boolean;
// };

// function ToDoForm({ onAddTask }) {
//   const [task, setTask] = useState('');

//   const handleAddTask = () => {
//     if (task.trim()) {
//       onAddTask(task);
//       setTask('');
//     }
//   };

//   return (
//     <View style={formStyles.form}>
//       <TextInput
//         style={formStyles.input}
//         placeholder="Add a new task..."
//         value={task}
//         onChangeText={setTask}
//       />
//       <Button title="Add" onPress={handleAddTask} />
//     </View>
//   );
// }

// function ToDoList({ tasks }: { tasks: Task[] }) {
//   return (
//     <ScrollView style={listStyles.list}>
//       {tasks.map((task) => (
//         <Pressable key={task.id}>
//           <View style={[listStyles.task, task.completed && listStyles.completed]}>
//             <Text style={listStyles.taskText}>{task.text}</Text>
//           </View>
//         </Pressable>
//       ))}
//     </ScrollView>
//   );
// }

// function App() {

//   const [tasks, setTasks] = useState<Task[]>([]);

//   const addTask = (taskText: string) => {
//     const newTask: Task = { id: tasks.length + 1, text: taskText, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
//         <Header />
//         <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
//           <ToDoList tasks={tasks} />
//           <ToDoForm onAddTask={addTask} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const formStyles = StyleSheet.create({
//   form: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginHorizontal: 20,
//     marginTop: 20,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginRight: 10,
//   },
// });

// const listStyles = StyleSheet.create({
//   list: {
//     marginTop: 20,
//   },
//   task: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   completed: {
//     backgroundColor: '#e0e0e0',
//   },
//   taskText: {
//     fontSize: 16,
//   },
// });

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import ToDoList from './ToDoList';

function App() {
  // Part A
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: false },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: false },
  ]);

  const [newTaskText, setNewTaskText] = useState('');

 
  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask = { id: tasks.length + 1, text: newTaskText, completed: false };
      setTasks([...tasks, newTask]);
      setNewTaskText(''); 
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Part B Step 1" */}
        <ToDoList tasks={tasks} />
      </ScrollView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={newTaskText}
          onChangeText={setNewTaskText}
        />
        <Button title="Add" onPress={addTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;
