import tarefaModel from "../models/tarefaModel.js"

const tarefaControllers = {
  index: (req, res) => {
    return res.render('index')
  },
  tasks: (req, res) => {
    const tasks = tarefaModel.getAllTasks();
    return res.render('tasks', {tasks})
  },
  create: (req, res) => {
    res.render('new-task')
  },
  save: (req, res) => {
    const taskList = req.body.name;
    tarefaModel.createTaskList(taskList);
    return res.redirect('/tasks')
  }
}

export default tarefaControllers;