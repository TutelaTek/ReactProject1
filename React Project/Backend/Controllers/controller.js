const mongoose = require('mongoose');
const menuSchema = require("../models/menuItems");
const locationSchema = require("../Models/locations");
const commentSchema = require("../Models/comments");

/*
const userSchema = require("../Models/users");
const bcrypt = require("bcrypt");
const passport = require('passport');

const initializePassport = require('../passport-config');

initializePassport(passport, async(usersName) => {
    return userSchema.findOne({username: usersName});
});

*/
//  main code
const menu_items = async(req, res) => {
    const menu = await menuSchema.find({});
    
    res.send(menu);
};

const post_item = async (req, res) => {
    const userData = req.body;
    
    console.log(userData);
    await menuSchema.create(userData)
    .then(res.send('menu item added')
    ).catch((err) => {
        console.log(err);
    });
}
const delete_item = async (req, res) => {
    const userData = req.body;
    console.log(userData);
    
    await menuSchema.deleteOne({_id: userData.id})
    .then(res.send('item deleted')
    ).catch((err) => {
        console.log(err);
    });
}

const get_item = async(req, res) => {
    

    console.log(req.params.id);
    const menu = await menuSchema.find({_id: req.params.id});
    
    res.send(menu);
};


const update_item = async (req, res) => {
    const userData = req.body;
    console.log(userData);
    
    await menuSchema.findByIdAndUpdate(req.params.id,
        {
          $set: req.body,
        })
    .then(res.send('item updated')
    ).catch((err) => {
        console.log(err);
    });
}

    const location_item = async(req, res) => {
        const location = await locationSchema.find({});
        
        res.send(location);
    };

    const post_location = async (req, res) => {
        const userData = req.body;
        
        
        await locationSchema.create(userData)
        .then(res.send('location added')
        ).catch((err) => {
            console.log(err);
        });
    }

    const delete_location = async (req, res) => {
        const userData = req.body;
        console.log(userData);
        
        await locationSchema.deleteOne({_id: userData.id})
        .then(res.send('location deleted')
        ).catch((err) => {
            console.log(err);
        });
    }


    const post_comment = async (req, res) => {
        const userData = req.body;
        
        
        await commentSchema.create(userData)
        .then(res.send('location added')
        ).catch((err) => {
            console.log(err);
        });
    }

/*
    const register = async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedPassword;
            console.log(req.body.password);
            let userData = req.body; 
            await userSchema.create(userData)
        .then(res.send('User added')
        ).catch((err) => {
            console.log(err);
        });
        } catch {

        }
        
       
    }

*/











module.exports = {
    menu_items,
    post_item,
    location_item,
    post_location,
    post_comment,
    delete_location,
    delete_item,
    update_item,
    get_item
}