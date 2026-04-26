

export const getAllUsers = async(req, res)=>{
    res.json({message:'All users retrieved'})
};

export const getUsersByID = async(req, res)=>{
    const {id}=req.params;
    if(id === '0') throw new Error('User not Found'); //trigger error

    res.json({message:`User ${id} retrieved`})
};

export const createUser = async(req, res)=>{
    const user =req.body;
   
    res.status(201).json({message:`User created retrieved`, user})
};

export const updateUser = async(req, res)=>{
    const {id} =req.params;
    const updated = req.body;
   
    res.json({message:`User ${id} Updated`, updated})
};

export const deletedUser = async(req, res)=>{
    const {id} =req.params;
     
    res.json({message:`User ${id} Deleted`})
};
