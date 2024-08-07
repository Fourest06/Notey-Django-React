import React, { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AddNotePage from './pages/AddNotePage'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'
import axios from 'axios'
import { toast } from 'react-toastify'

const App = () => {

  const [notes, setNote] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filterText, setFilterText] = useState("")
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://127.0.0.1:8008/notes/")
      .then(res => {
        console.log(res.data)
        setNote(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  const addNote = (data) => {
    axios.post("http://127.0.0.1:8008/notes/", data)
    .then(res => {
      setNote([...notes, data])
      toast.success("A new note has been added")
      console.log(res.data)
    })
    .catch(err => {
      console.log(console.log(err.message))
    })
  }

  const updateNote = (data, slug) => {
    axios.put(`http://127.0.0.1:8008/notes/${slug}/`, data)
    .then(res => {
      const updatedNotes = notes.map(note => note.slug === slug ? res.data : note)
      setNote(updatedNotes)
      console.log(res.data)
      toast.success("Note updated successfully")
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const deleteNote = (slug) => {
    axios.delete(`http://127.0.0.1:8008/notes/${slug}/`)
    .then(() => {
      setNote(notes.filter(note => note.slug !== slug))
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const handleFilterText = (val) => {
    setFilterText(val)
  }

  const handleSearchText = (val) => {
    setSearchText(val)
  }

  const filteredNotes = filterText === "BUSINESS" ? notes.filter((note) => note.category == "BUSINESS") : filterText === "PERSONAL" ? notes.filter((note) => note.category == "PERSONAL") : filterText === "IMPORTANT" ? notes.filter((note) => note.category == "IMPORTANT") : notes

  useEffect(() => {
    if(searchText.length >= 3) {
    axios.get(`http://127.0.0.1:8008/notes-search/?search=${searchText}`)
    .then(res => {
      console.log(res.data)
      setNote(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })}
    else {
      axios.get("http://127.0.0.1:8008/notes/")
        .then(res => {
          setNote(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }, [searchText])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout searchText={searchText} handleSearchText={handleSearchText} />}>
      <Route index element={<HomePage notes={filteredNotes} loading={isLoading} handleFilterText={handleFilterText} />} />
      <Route path='/add-note' element={<AddNotePage addNote={addNote} />} />
      <Route path='/edit-note/:slug' element={<EditNotePage updateNote={updateNote} />} />
      <Route path='/note/:slug' element={<NoteDetailPage deleteNote={deleteNote} />} />
    </Route>
  ))

  return <RouterProvider router={router} />
}

export default App
