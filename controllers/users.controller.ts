import {  Request, Response } from "express";
import User from "../models/user.model";

export const getUsers = async( req: Request, res: Response ) => {
    
    const users = await User.findAll();

    res.json(users);
};

export const getUser = async( req: Request, res: Response ) => {
    
    const { id } = req.params;

    const user = await User.findByPk(id);

    if ( user ) {
        res.json(user); 
    }
    else {
        res.status(404).json({
            msg: `User doesn't exist with id:${id}`
        });
    }
};

export const postUser = async( req: Request, res: Response ) => {
    
    const { name,email } = req.body;
    
    try {

        const existEmail = await User.findOne({
            where:{ email }
        });

        if ( existEmail) return res.status(400).json({msg: `The email already exist: ${email}`});

        const user = await User.create({
            name,
            email
        });

        await user.save();
        
        res.json(user);

    } catch (error) {
        res.status(500).json({
            msg: 'Contact to the administrator'
        });
    }
   
};

export const putUser = async( req: Request, res: Response ) => {
    const { id } = req.params;
    const { name,email } = req.body;
    
    try {

        const user = await User.findByPk( id );

        if ( !user ) return res.status(400).json({msg: `User doesn't exist with id:${id}`});

        const existEmail = await User.findOne({
            where:{ email }
        });

        if ( existEmail) return res.status(400).json({msg: `The email already exist: ${email}`});

         await user.update({
            name,
            email
        });

        res.json(user);

    } catch (error) {
        res.status(500).json({
            msg: 'Contact to the administrator'
        });
    }

};

export const deleteUser = async( req: Request, res: Response ) => {
    
    const { id } = req.params;
    
    const user = await User.findByPk( id );

    if ( !user ) return res.status(400).json({msg: `User doesn't exist with id:${id}`});

    await user.destroy();

    res.json(user);
};