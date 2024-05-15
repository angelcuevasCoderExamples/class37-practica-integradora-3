const {Router} = require('express');
const { coursesService } = require('../repositories/services');
const router = Router();


router.get('/',async (req, res)=>{
    const courses  = await coursesService.getAll()
    res.send({status:'success', courses})
})

router.post('/', async (req, res)=>{
    const { title, description } = req.body; 
    if(!title || !description){
        return res.status(400).send({status:'error', error:'Incomplete data'})
    }

    const newCourse = {
        title,
        description,
        teacher: 'Not assigned',
        students: []
    }

    const result = await coursesService.create(newCourse)
    res.send({status:'success', payload: result})
})

module.exports = {
    coursesRouter: router
};