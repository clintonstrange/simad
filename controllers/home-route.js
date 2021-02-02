const sequelize= require("../config/connection");
const { User,Vehicle,Product}=require("../models");
const router = require('express').Router();