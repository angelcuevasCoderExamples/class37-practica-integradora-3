const {Router} = require('express');
const CoursesController = require('../controllers/courses.controller');
const router = Router();

router.get('/', CoursesController.getAll)
router.post('/', CoursesController.create)

module.exports = {
    coursesRouter: router
};