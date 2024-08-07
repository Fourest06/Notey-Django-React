import React from 'react'
import NoteCard from './NoteCard'
import Loader from './Loader'

const NoteCardContainer = ({notes, loading}) => {
  return (
    <div className='container'>
      <div className='row'>
        
        { loading && <Loader loading={loading} /> }

        { notes.map(note => <NoteCard key={note.id} note={note} />)}

      </div>
    </div>
  )
}

export default NoteCardContainer
