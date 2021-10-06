import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import AddTechs from "../../components/AddTechs";
import FormTech from "../../components/FormTech";

const Dashboard = ({ authenticated, setAuthenticated }) => {

    const [user] = useState(
        JSON.parse(localStorage.getItem("@kenziehub/user") || "")
    )

    const history = useHistory()

    const logout = () => {
        window.localStorage.clear()
        setAuthenticated(false)
        history.push("/login")
    }

    if (!authenticated) {
        return <Redirect to="/login" />
    }
    
    return (

        <div>
            <h1> Olá, {user.name} </h1>
            <FormTech />
            <AddTechs />
            <button onClick={logout} > Sair </button>
        </div>
    )
}

export default Dashboard;