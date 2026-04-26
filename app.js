 import express from 'express';
 import userRoutes from './routes/user.js';
 import errorHandler from './middleware/errorHandler.js';

 const app = express();
 const PORT = 5000;

 app.use(express.json());

 app.use('/api/user',userRoutes);

 app.use(errorHandler);

 app.listen(PORT,()=>{
    console.log(`Server is running and up on PORT: ${PORT}`);
    
 })