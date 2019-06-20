import { Router, Request, Response } from 'express'
const router = Router();

//Models
import Task from '../models/Task'


/**
 * Same route uri 
 * for get and post
 */
router.route('/create')
      .get( (req: Request, res: Response) => {

         res.render('tasks/create')
    })
    
      .post( async(req: Request, res: Response) => {

         const { title, description } = req.body ;

         const task = new Task({ title, description})

            try {
                await task.save()
                res.redirect('/tasks/list');

            } catch (error) {
                console.log('err_saved_task', error)
            }

    });


/**
 * Get List
 */
router.route('/list')
      .get(async(req: Request, res: Response) => {

        try {
            const tasks = await Task.find();
            res.render('tasks/list', { tasks})

        } catch (error) {
            console.log('err_list_task', error)

        }


})

/**
 * Suppression de task et redirection
 */
router.route('/delete/:taskID')
    .get(async (req: Request, res: Response) => {

        try {
            const taskID = req.params.taskID;
             await Task.findByIdAndDelete(taskID);

            res.redirect('/tasks/list' )

        } catch (error) {
            console.log('err_delete_task', error)

        }


    })


/**
 * Suppression de task et redirection
 */
router.route('/edit/:taskID')
    .get( async (req: Request, res: Response) => {

        try {
           const task = await Task.findById(req.params.taskID);

           if(task){
               res.render('tasks/edit', { task}) 

           }else{
               res.send('vide')
           }

        } catch (error) {
            console.log('err_edit_task', error)


        }

}) 
    .post( async(req: Request, res:Response)=>{

        const {taskID } = req.params;
        const { title, description } = req.body;

        await Task.findByIdAndUpdate(
            req.params.taskID ,
            { title, description })

            res.redirect('/tasks/list')

        try {
           

        } catch (error) {
            console.log('err_saved_task', error)
        }
    })
       
export default router