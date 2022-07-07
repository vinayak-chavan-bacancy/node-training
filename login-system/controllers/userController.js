const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const user = require('../models/loginUser');
const { successResponse, errorResponse } = require('../utils');
const loginUser = require('../models/loginUser');

const login = async (req, res) => {
  try {

    console.log('login controller');
    const emailID = req.body.emailID;
    const password = req.body.password;

    // check for email exist or not
    const userData = await loginUser.findOne({ emailID: emailID });
    if (!userData) {
      return errorResponse(req, res, 'Invalid credentials.', 404);
    }

    // check for the password
    const isMatch = await bcrypt.compare(password, userData.password);
    if(!isMatch){
      return errorResponse(req, res, 'Invalid credentials.', 404);
    } else {

      // jwt token created
      let accessToken = userData.getToken({exp: 60*60, secret: process.env.ACCESS_TOKEN_SECRET});
      await userData.save();
      console.log('Login Successful');
      return res.status(200).send({ accessToken })
    }
  } catch (error) {
    return errorResponse(req, res, error.message, 400, { err: error });
  }
};

const register = async (req, res) => {
  try {

    console.log('register controller');
      const addinguserRecords = new loginUser({
        username: req.body.username,
        phoneNumber: req.body.phoneNumber,
        emailID: req.body.emailID,
        password: req.body.password,
        dob: req.body.dob,
        gender: req.body.gender,
        avatar: req.file.filename
      })

      console.log(addinguserRecords);

      const emailID = req.body.emailID;

      // check if email id allready exist
      const userData = await loginUser.findOne({ emailID: emailID });
      if (userData) {
        return errorResponse(req, res, 'email ID allready exist', 400);
      }
      else {

        // register new user
        const insert = await addinguserRecords.save();
        console.log(insert);
        console.log('Registration Successful');
        return successResponse(req, res, insert, 200);
      }
  } catch (e) {
    return errorResponse(req, res, 'something went wrong', 400, { err: e });
  }
};

const viewProfile = async (req, res) => {
  try{

    console.log('viewProfile controller');
    const id = req.user._id
    console.log(req.user._id);
    const userData = await loginUser.findOne({ _id : id});

    // check if data is exist or not
    if(!userData){
      return errorResponse(req, res, 'User Not Found', 404);
    } else{
      return successResponse(req, res, userData, 200);
    }
  } catch (error) {
    return errorResponse(req, res, error.message, error, 500);
  }
};

const logout = async (req, res) => {
  try{
    console.log('logout controller');
    accessToken = NULL;
    console.log('Logout Successful');
    return successResponse(req, res, 'logout successfully', 200);
  } catch (error) {
    return errorResponse(req, res, error.message, error, 500);
  }
};


module.exports = {  login, register, viewProfile, logout  };