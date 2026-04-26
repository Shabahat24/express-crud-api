import {Router} from 'express';
import * as userController from  '../controllers/userController.js';

const router = Router();

//async handler

router.get('/',userController.getAllUsers);
router.get('/:id',userController.getUsersByID);
router.post('/',userController.createUser);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deletedUser);

export default router