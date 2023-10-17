import React from 'react'
import Header from './notes/Nav'
import Home from './notes/Home'
import CreateNotes from './notes/CreateNotes'
import EditNotes  from './notes/EditNotes'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'



function Notes({setIsLogin}) {
  return (
    <Router>
      <div className="notes-page">
        <Header setIsLogin={setIsLogin}/>
        <section>
          <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/create' element={<CreateNotes/>} exact/>
          <Route path='/edit/:id' element={<EditNotes/>} exact/>
          </Routes>
        </section>
      </div>
    </Router>
  
  )
}

export default Notes