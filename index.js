const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const taskRoutes = require('./routes/task.route');
const swaggerDocument = require('./swagger/swagger');
const { sequelize } = require('./models');

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Kết nối database và đồng bộ Sequelize
sequelize
  .sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

// Routes
app.use('/api', taskRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

module.exports = app;
