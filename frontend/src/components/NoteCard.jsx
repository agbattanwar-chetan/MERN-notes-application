import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { formatDate } from "../lib/utils"
import { Link } from "react-router"

const NoteCard = ({ note }) => {
    const { _id, title, content, createdAt } = note

    return (
        <Link 
        to={`/note/${_id}`} 
        className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
        >
            <div className="card-body">
                <h3 className="card-title text-base-content">{title}</h3>
                <p className="text-base-content/70 line-clamp-3">{content}</p>
                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content/60" >{formatDate(new Date(createdAt))}</span>
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4 text-green-400 cursor-pointer" />
                        <button>
                            <Trash2Icon className="size-4 text-red-400" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NoteCard