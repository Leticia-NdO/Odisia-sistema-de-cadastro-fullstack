import { useParams } from "react-router-dom"
import DashboardForm from "../../components/dashboardForm"


function DashboardPage() {

    const params = useParams()   // quem pega o params é o component de página e passa para o dashboard

    return (
        <DashboardForm userId={`${params.id}`} />
    )
}

export default DashboardPage