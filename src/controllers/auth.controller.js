import User from "../models/user.model.js";
import bcryp from 'bcryptjs';
import { createAccessToken } from "../libs/jwt.js";

export const register = async(req, res) => {
    const {email, password, username} = req.body

    const passwordHash =  await bcryp.hash(password, 10)

    try {
        const newUser = User({
            username,
            email,
            password: passwordHash
        })
    
        const userSaved = await newUser.save()
        const token = await createAccessToken({id: userSaved._id })
        res.cookie('token', token)
        //traemos solo los datos que queremos devolver al front
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        })
    } catch (error) {
        res.status(500).json({message: error.message });
    }

}

export const login = (req, res) => res.send('login');