const taskRepository = require('../repositories/task.repository');

class TaskService {
  async createTask(task) {
    return await taskRepository.create(task);
  }

  async getTasks() {
    return await taskRepository.findAll();
  }

  async updateTask(id, task) {
    return await taskRepository.update(id, task);
  }

  async deleteTask(id) {
    return await taskRepository.delete(id);
  }

  async moveUncompletedTasksToNextDay() {
    const tasks = await taskRepository.findAll();
    const today = new Date();
    tasks.forEach((task) => {
      if (!task.isCompleted && task.dueDate < today) {
        taskRepository.update(task.id, { dueDate: today });
      }
    });
  }
}

module.exports = new TaskService();
