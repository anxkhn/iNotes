const Notes = require('../models/noteModel')

const noteCtrl = {
    getNotes:async(req,res)=>{
        try {
            // res.json({user_id:req.user.id})
            const notes = await Notes.find({user_id : req.user.id})
            res.json(notes)
            // console.log(user_id)
            // console.log(req.user.id)

        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    },
    createNote: async(req,res)=>{
        try {
            const {title,content,date} = req.body;
           
            const newNote = new Notes({
                title,
                content,
                date,
                user_id:req.user.id,
                name:req.user.name

            })
        
            await newNote.save()
            res.json({msg:"Created  a notes"})

            
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    },
    deleteNote: async(req,res)=>{
        try {
            await Notes.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a note"})
            
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

    },
    updateNote: async(req,res)=>{
        try {
            const {title, content, date} =req.body;
            await Notes.findByIdAndUpdate({_id:req.params.id},{
                title,
                content,
                date
            }) 
            res.json({msg:"Notes has been updated"})
            
        } catch (error) {
            return res.status(500).json({msg:err.message})
            
        }
    },
    getNote: async(req,res)=>{
        try {
            const note = await Notes.findById(req.params.id)
            res.json(note)
        } catch (error) {
            return res.status(500).json({msg:err.message})
            
        }
    }
   
}

module.exports = noteCtrl