const express = require('express');
const Model = require('../models/UserModel');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            
            console.log(err);
            if(err?.code===11000){res.status(500).json({message : 'Email already existed'});}
            else
            {
                res.status(500).json({message : 'Internal server error'})
            }
           
        });
});
//getall
router.get('/getall', (req, res) => {
    Model.find()

        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})


//: denotes url parameter
router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})


//get by id 
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})
// delete
router.delete('/delete/:id',(req, res) =>  {

    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    })

// update
router.put('/update/:id',(req, res) => {
    Model.findByIdAndUpdate(req.params.id,req.body , {new : true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})


router.post('/authenticate', (req,res)=>
{
    Model.findOne(req.body)
    .then((result) => {
        if(result) {
            //email and passward matched
            //generate token

            

            const {_id, email, passward} = result;
            const payload = {_id, email, passward}

            const secretKey = process.env.JWT_SECRET || 'fallback_secret_key';

            jwt.sign(
                payload,
                secretKey,
                { expiresIn: '20min' },
                (err,token) => {
                    if(err){
                        console.log(err);
                        
                        res.status(500).json({message: 'Error generating token'});
                    }else{
                        res.status(200).json({ token });
                    }
                }
            )
        }else{
            res.status(401).json({ message: 'Invalid credentials'});
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json({message: ' Internal server error'});
        
    });
})



module.exports = router;