let tasksList = [];

const tarefaModel = {
  getAllTasks() {
    return tasksList;
  },
  createTaskList(name) {
    const taskList = {
      id: tasksList.length + 1,
      name: name,
      tasks: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    tasksList.push(taskList);
  },
  removeTask(id) {
    tasks = tasks.filter(task => task.id === id)
  },
  editTask(id) {

  }
}

export default tarefaModel;