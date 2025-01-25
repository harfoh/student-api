const Student = require('../models/student');

// Get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new student
const createStudent = async (req, res) => {
  try {
    const { name, age, grade } = req.body;
    const newStudent = await Student.create({ name, age, grade });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

// Update student info
const updateStudent = async (req, res) => {
  try {
    const { name, age, grade } = req.body;
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    await student.update({ name, age, grade });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getStudents, getStudentById, createStudent, updateStudent };
