import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import NoteCard from "../components/NoteCard"

const HomePage = () => {
  const [notes, setNotes] = useState([])
  const [loadind, setLoadind] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // using fetch
        // const res = await fetch("http://localhost:5001/api/notes")
        // const data = await res.json()
        // console.log(data)

        // or
        // using axios
        const res = await axios.get("http://localhost:5001/api/notes")
        console.log(res.data)
        setNotes(res.data)
      } catch (error) {
        console.log("Error fetching notes", error)
      } finally {
        setLoadind(false)
      }
    }
    fetchNotes()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="mx-w-7xl p-4 mt-6">
        {loadind && <div className="text-center text-primary py-10">Loading notes...</div>}
        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage