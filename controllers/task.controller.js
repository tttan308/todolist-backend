const taskService = require('../services/task.service');

class TaskController {
  async createTask(req, res) {
    const task = await taskService.createTask(req.body);
    return res.json(task);
  }

  async getTasks(req, res) {
    const tasks = await taskService.getTasks();
    return res.json(tasks);
  }

  async updateTask(req, res) {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);
    return res.json(updatedTask);
  }

  async deleteTask(req, res) {
    await taskService.deleteTask(req.params.id);
    return res.status(204).send();
  }
}

module.exports = new TaskController();
