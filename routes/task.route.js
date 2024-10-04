const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Lấy danh sách tất cả các tasks
 *     responses:
 *       200:
 *         description: Trả về danh sách các tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID của task
 *                   title:
 *                     type: string
 *                     description: Tiêu đề của task
 *                   isCompleted:
 *                     type: boolean
 *                     description: Trạng thái hoàn thành của task
 *                   dueDate:
 *                     type: string
 *                     format: date-time
 *                     description: Ngày hết hạn của task
 */
router.get('/', taskController.getTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Tạo một task mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Tiêu đề của task
 *               isCompleted:
 *                 type: boolean
 *                 description: Trạng thái hoàn thành của task
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 description: Ngày hết hạn của task
 *     responses:
 *       201:
 *         description: Task được tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID của task
 *                 title:
 *                   type: string
 *                   description: Tiêu đề của task
 *                 isCompleted:
 *                   type: boolean
 *                   description: Trạng thái hoàn thành của task
 *                 dueDate:
 *                   type: string
 *                   format: date-time
 *                   description: Ngày hết hạn của task
 */
router.post('/', taskController.createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Cập nhật thông tin của task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của task cần cập nhật
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Tiêu đề của task
 *               isCompleted:
 *                 type: boolean
 *                 description: Trạng thái hoàn thành của task
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 description: Ngày hết hạn của task
 *     responses:
 *       200:
 *         description: Task được cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID của task
 *                 title:
 *                   type: string
 *                   description: Tiêu đề của task
 *                 isCompleted:
 *                   type: boolean
 *                   description: Trạng thái hoàn thành của task
 *                 dueDate:
 *                   type: string
 *                   format: date-time
 *                   description: Ngày hết hạn của task
 */
router.put('/:id', taskController.updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Xóa một task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của task cần xóa
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Task đã bị xóa thành công, không có nội dung trả về
 */
router.delete('/:id', taskController.deleteTask);

module.exports = router;
