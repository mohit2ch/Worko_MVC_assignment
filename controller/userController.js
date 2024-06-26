import asyncHandler from "../middleware/asyncHandler.js";
import { createUser, deleteUser, readUser, updateUser } from "../data_access/crud.js";
import User from "../models/userModel.js";
import Joi from "joi";
import validator from "../utils/validator.js";

const registerUser = asyncHandler(async function(req, res){

    let isValid = validator(req.body, {name:true, email:true, age:true, city: true, zipcode: true, password: true});
    console.log(isValid);
    if(isValid.code == 1){
        res.status(400);
        throw new Error(isValid.message);
    }

    const {code, message} = await createUser(req.body);
    if(code == 0){
        res.status(201).json({
            _id: message._id,
            name: message.name,
            email: message.email,
            age: message.age,
            city: message.city,
            zipcode: message.zipcode
        })
    } else {
        res.status(400);
        throw new Error(message.join("/n"));
    }
});

const getUsers = asyncHandler(async function(req, res){
    const {code, message} = await readUser(false);
    res.json(message);
});

const getUserById = asyncHandler(async function(req, res){
    
    const {code, message} = await readUser(true, req.params.id);
    if(code == 0){
        res.json(message);
    } else {
        res.status(404);
        throw new Error(message);
    }
});

const updateUserById = asyncHandler(async function(req, res){
    let isValid = validator(req.body, req.body);
    if(isValid.code == 1){
        res.status(400);
        throw new Error(isValid.message);
    }
    const {code, message} = await updateUser(req.params.id, req.body);
    if(code == 0){
        res.json(message);
    } else {
        res.status(404);
        throw new Error(message.join("/n"));
    }
});

const removeUserById = asyncHandler(async function(req, res){
    const {code, message} = await deleteUser(req.params.id);
    if(code == 0){
        res.json({
            message
        });
    } else {
        res.status(404);
        throw new Error(message);
    }
})

export {
    registerUser,
    getUsers,
    getUserById,
    updateUserById,
    removeUserById
}

