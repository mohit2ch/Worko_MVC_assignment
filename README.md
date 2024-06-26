# Worko_MVC_assignment

## Getting started
### MongoDB Database
Create a MongoDB database and obtain your MongoDB URI
### Env Variables
create a `.env` and add the following

```
PORT = 5001
MONGO_URL = your mongodb uri
```

### Install Dependencies (frontend & backend)
```
npm install
```
###  Run
```
npm run server
```

## Models Involved
There is one model involved
- User
```
Id (Generated)
Email - String
Name - String - minLength(3)
Age - Number(Integer) - min(18) - max(99)
City - String - minLength(3)
Zipcode - Number(Integer) - min(100000) - max(999999)
Password - String - minLength(6) - maxLength(15)
```

## Controller Layer
### POST
1. registerUser:
   ```http://127.0.0.1:5001/api/users/```
   
   request.body
   ```
   {
     name (required),
     email (required),
     age (required),
     city (required),
     zipcode (required),
     password (required)
   }
   ```
   This allows us to register a new user
   
### GET
1. getUsers:
  ``` http://127.0.0.1:5001/api/users/ ```

  This provides us the full list of the users stored in database
2. getUserById:
``` http://127.0.0.1:5001/api/users/:id ```

This provides us the information for the user with the given id

### PUT
1. updateUserById:
   ``` http://127.0.0.1:5001/api/users/:id ```

   request.body
   ```
   {
     name (not required),
     email (not required),
     age (not required),
     city (not required),
     zipcode (not required),
     password (not required)
   }
   ```

   This allows us to update user information. Only enter the data that needs to be updated.

### DELETE
1. removeUserById:
   ``` http://127.0.0.1:5001/api/users/:id ```

   This allows us to delete user accounts of given id.
