const {Router} = require('express');
const { usersService, coursesService } = require('../repositories/services');
const router = Router();



router.get('/',async (req, res)=>{
    const users = await usersService.getAll();
    res.render('users',{users:users})
})

router.get('/courses',async (req, res)=>{
    const courses = await coursesService.getAll();
    res.render('courses',{courses})
})

router.get('/login', async(req, res)=>{
    res.render('login')
})

module.exports = router;