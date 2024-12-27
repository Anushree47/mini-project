const express = require('express');
const rentNow = require('../models/rentNowModel');

const Model = require('../models/ProductModel');

const router = express.Router();

router.post('/submit', async (req, res) => {
    try{
        const { Name, email, phoneNumber, address,  category , duration, totalAmnt } = req.body;
        if( !Name || !email || !phoneNumber || !address ||  !category || !duration || !totalAmnt) {
            return res.status(400).json({ message: 'All fields are required'});
        }

        const newRequest = new rentNow({ 
            Name,
            email,
            phoneNumber,
            address,
            category ,
            duration,
            totalAmnt
             });
             
        await newRequest.save();

    res.status(200).json({ message: 'Form submitted successfully'});
    } catch (err) {
        console.error('Error occurred:',err);
        res.status(500).json({ message: 'Internal Server Error'});
    }
});

router.get('/getall', async (req, res) => {
    rentNow.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });

   
    
});
//get by id 
router.post('/post/:id', async (req, res) => {
    console.log(req.body);
    
    try{
        const { fullName, email, phoneNumber, address,  category , duration, totalAmount } = req.body;
        if( !fullName || !email || !phoneNumber || !address ||  !category || !duration || !totalAmount) {
            return res.status(400).json({ message: 'All fields are required'});
        }

        const newRequest = new rentNow({ 
            fullName,
            email,
            phoneNumber,
            address,
            category,
            duration,
            totalAmount,
            product: req.params.id
             });
             
        await newRequest.save();

    res.status(200).json({ message: 'Form submitted successfully'});
    } catch (err) {
        console.error('Error occurred:',err);
        res.status(500).json({ message: 'Internal Server Error'});
    }
}
)

router.delete('/delete/:id', (req, res) => {
    Adoption.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;