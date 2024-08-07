import React from 'react'
import { MdMarkunread } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { FormatDate } from "./FormatDate"

const NoteCard = ({ note }) => {

  const body = `${note.body.split(" ").slice(0, 20).join(" ")} ...`
  const color = note.category === "BUSINESS" ? "blue" : note.category === "PERSONAL" ? "green" : "purple"

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <div className="card card-body d-flex flex-column">
        <span className="side-stick" style={{ backgroundColor: color }}></span>
        <FaNoteSticky style={{ marginLeft: "auto", color: color }} />
        <Link to={`/note/${note.slug}`} style={{ textDecoration: "none", color: "black" }}>
          <h5 className="note-title text-truncate mb-0">
            {note.title}
          </h5>
        </Link>

        <p className="note-date font-12 text-muted">{FormatDate(note.updated)}</p>
        <div className="note-content flex-grow-1">
          <p className="note-inner-content text-muted">
            {body}
          </p>
        </div>
        <div className="d-flex align-items-center mt-2">
          <span className="d-flex align-items-center w-100">
            <a href="/notes-detail">
              <MdMarkunread
                style={{ fontSize: "25px", cursor: "pointer", color: color }}
              />
            </a>
            <small className="text-muted ms-2">{note.category}</small>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
