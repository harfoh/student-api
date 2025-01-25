const express = require('express');
const { getStudents, getStudentById, createStudent, updateStudent } = require('../controllers/studentController');

const router = express.Router();

router.get('/students', getStudents);
router.get('/students/:id', getStudentById);
router.post('/students', createStudent);
router.put('/students/:id', updateStudent);

module.exports = router;
