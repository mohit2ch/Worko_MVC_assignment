import Joi from "joi";

export default function validator(dataObj, {name, email, age, city, zipcode, password}){
    // const schema = Joi.object({
    //     name: Joi.string().min(3),
    //     email: Joi.string().email(),
    //     age: Joi.number().integer().min(18).max(99),
    //     city: Joi.string().min(3),
    //     zipcode: Joi.number().integer().min(100000).max(999999),
    //     password: Joi.string().min(6).max(15),
    // });
    const nameSchema = Joi.object({name: Joi.string().min(3).required()});
    const emailSchema = Joi.object({email: Joi.string().email().required()});
    const ageSchema = Joi.object({age: Joi.number().integer().min(18).max(99).required()});
    const citySchema = Joi.object({city: Joi.string().min(3).required()});
    const zipcodeSchema = Joi.object({zipcode: Joi.number().integer().min(100000).max(999999).required()});
    const passwordSchema =  Joi.object({password: Joi.string().min(6).max(15).required().required()});
    const message = [];
    let code = 0;
    if(name){
        const {error, value} = nameSchema.validate({name: dataObj.name});
        console.log(error, value)
        if(error){
            message.push(error.details[0].message);
            code = 1;
        }
    }
    if(email){
        const {error, value} = emailSchema.validate({email: dataObj.email});
        if(error){
            message.push(error.details[0].message);
            code = 1;
        }
    }
    if(age){
        const {error, value} = ageSchema.validate({age: dataObj.age});
        if(error){
            message.push(error.details[0].message);
            code = 1;
        }
    }
    if(city){
        const {error, value} = citySchema.validate({city: dataObj.city});
        if(error){
            message.push(error.details[0].message);
            code = 1;
        }
    }
    if(zipcode){
        const {error, value} = zipcodeSchema.validate({zipcode: dataObj.zipcode});
        if(error){
            message.push(error.details[0].message);
            code = 1;
        }
    }
    if(password){
        const {error, value} = passwordSchema.validate({password: dataObj.password});
        if(error){
            message.push(error.details[0].message);
            code = 1;
        }
    }
    return {
        code,
        message
    }
}