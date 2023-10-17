import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './createNotes.css'

function CreateNotes() {

  const [note, setNote] = useState({
    title: " ",
    content: " ",
    date: " ",

  })

  const history = useNavigate()

  const onChaneInput = e => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value })
  }

  const createNote = async e=>{
    e.preventDefault()
    try {
      const token = localStorage.getItem('tokenStore')
      if(token){
        const {title,content,date} = note;
        const newNote = {
          title,content, date
        }

        await axios.post('/api/notes',newNote,{
          headers:{Authorization:token}
        })

        return history.push('/')

      }
      
    } catch (err) {
      window.location.href="/";
    }
  }



  return (
    <div className="create-note">
      <h2>Create note</h2>

      <form onSubmit={createNote} autoComplete='off'>
        <div className="row">
          <label htmlFor="title">Title</label>
          <input type="text" id='title' name="title"
            value={note.title} required onChange={onChaneInput}
          />
        </div>

        <div className="row">
          <label htmlFor="content">Content</label>
          <textarea cols="30" rows="10" type="textarea" id='content'  name="content"
            value={note.content} required
            onChange={onChaneInput}
          ></textarea>
        </div>

        <label htmlFor="date">Date:{note.date}</label>
        <div className="row">
          <input type="date" id='date' name="date"
             onChange={onChaneInput}
          />
        </div>

        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default CreateNotes