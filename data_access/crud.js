import User from '../models/userModel.js';


// createUser - create user with given user object
// return code :
// 0 : everything went smoothly, new user created
// 1 : user not created due to invalid data
// 2 : a user already exists with the given email address


async function createUser(user){
    try{
    const {name, email, age, city, zipcode, password} = user;
    const existingUser = await User.findOne({email});
    if(existingUser) {
        return {
            code: 2,
            message: 'User already exists for given email address',
        };
    }
    const newUser = await User.create({
        name,
        email,
        age,
        city,
        zipcode,
        password
    });
    if(newUser){
        return {
            code: 0,
            message: newUser
        };
    } else {
        return {
            code: 1,
            message: 'Invalid user data'
        };
    }
} catch(e){
    return {
        code: 1,
        message: e.message,
    }
}
}

// readUser - get user info, for login or by id, or user list
// if single is true, return 1 user only

async function readUser(single, userId){
    if(single){
        const user = await User.findById(userId);
        if(user){
            return {
                code: 0,
                message: user,
            }
        } else {
            return {
                code: 1,
                message: 'User not found',
            }
        }

    } else {
        const userList = await User.find({});
        return {
            code: 0,
            message: userList
        }
    }
}

// updateUser - update user info given a user id
// 

async function updateUser(userId, user){
    const curUser = await User.findById(userId);
    if(curUser) {
        curUser.name = user.name || curUser.name;
        curUser.email = user.email || curUser.email;
        curUser.age = user.age || curUser.age;
        curUser.city = user.city || curUser.city;
        curUser.zipcode = user.zipcode || curUser.zipcode;
        if(user.password) {
            curUser.password = user.password;
        }

        const updatedUser = await curUser.save();
        return {
            code: 0,
            message: updatedUser
        }
    } else {
        return {
            code: 1,
            message: 'User not found',
        }
    }
    
}

// deleteUser - delete user give na user id

async function deleteUser(userId) {
    const curUser = await User.findById(userId);
    if(curUser) {
        await User.deleteOne({_id: userId});
        return {
            code: 0,
            message: 'User removed successfully'
        }
    } 
        return {
            code: 1,
            message: 'User not found'
        }
    
}

export {
    createUser,
    readUser,
    updateUser,
    deleteUser,
}