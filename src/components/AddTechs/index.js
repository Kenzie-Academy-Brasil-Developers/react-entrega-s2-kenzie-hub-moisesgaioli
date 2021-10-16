import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Cards from "../Cards"

const AddTechs = () => {

    const [token] = useState(
        JSON.parse(localStorage.getItem("@kenziehub/token") || "" )
    )

    const [userId] = useState(
        JSON.parse(localStorage.getItem("@kenziehub/user") || "")
    )
    
    const [user, setUser] = useState([])


    useEffect(() => {
        if(userId.id) {
            axios
                .get(`https://kenziehub.herokuapp.com/users/${userId.id}`)
                .then(res => setUser(res.data))
                .catch(error => console.log(error))
        }
    }, [user])

    const deleteTech = (techId) => {

        axios
            .delete(`https://kenziehub.herokuapp.com/users/techs/${techId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(_ => toast.success("Tecnologia removida."))
            .catch(_ => toast.error("Não foi possível remover a tecnologia.") )
    }

    return (
        <div className="card-container">
            {
                user.techs?.map((item, index) => {
                    return <div key={index}>
                            <Cards item={item} deleteTech={deleteTech} />
                    </div>
                })
            }
        </div>
    )
}

export default AddTechs;