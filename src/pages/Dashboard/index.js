import { Button } from "@material-ui/core";
import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import AddTechs from "../../components/AddTechs";
import FormTech from "../../components/FormTech";
import "./styles.css"

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
            <h1 className="title"> Olá, {user.name} </h1>
            <div className="btn-logout">
                <Button variant="contained" color="error" onClick={logout} > Sair </Button>
            </div>
            <FormTech />
            <AddTechs />
           
        </div>
    )
}

export default Dashboard;