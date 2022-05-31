import { useParams } from "react-router-dom"
import EditForm from "../../components/editForm"

function EditPage(){

    const params = useParams()

    return (
        <EditForm userId={`${params.id}`}/>
    )
}

export default EditPage