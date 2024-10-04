const taskRoutes = require('./task.route');

module.exports = (app) => {
  app.use('/api/tasks', taskRoutes);
};
