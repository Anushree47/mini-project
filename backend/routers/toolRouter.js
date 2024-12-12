const express = require('express');

const toolModel = require('../models/toolModel');


const router = express.Router();

//add a new tool

router.post('/add', async (req, res) => {
    const toolData = req.body;// Array of TOOLS

    try {
        const savedTool = await toolModel.insertMany(toolData);
        res.status(201).json({message: 'Tool added successfully!', tool: savedTool });
    }catch (err) {
        res.status(500).json({ error: 'Failed to add tool.', details: err.message});
    }
});

router.get('//:id', async (req, res) => {
    const toolId = req.params.id;
  
    try {
      const tool = await toolModel.findById(toolId);
      if (!tool) {
        return res.status(404).json({ error: 'Tool not found' });
      }
      res.status(200).json(tool);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch tool details.', details: err.message });
    }
  });




//getall tool
router.get('/getall',async(req,res) => {
    try{
        const tool = await toolModel.find();
        res.status(200).json(tool);
    }catch(err){
        res.status(500).json({error: err.message});
    }
    
});

router.delete('/delete/:id', (req, res) => {
    toolModel.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/tool/:id', async (req, res) => {
    const toolId = req.params.id;  // Extract the tool ID from the URL
    
    try {
        const tool = await toolModel.findById(toolId);  // Find tool by ID
        if (!tool) {
            return res.status(404).json({ error: 'Tool not found' });  // If tool not found, send 404
        }
        res.status(200).json(tool);  // Send the pet details as JSON
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tool details.', details: err.message });
    }
});

module.exports = router