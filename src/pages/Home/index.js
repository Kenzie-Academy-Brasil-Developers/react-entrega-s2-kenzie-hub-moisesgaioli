import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import "./styles.css"

const Home = ({ authenticated }) => {

    if(authenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div>
            <h1 className="title-home"> KenzieHub </h1>
            <div className="link-container">
                <p className="link-home">Não possui conta? <Link to={"/registro"} > Registrar-se </Link></p>
                <p className="link-home"> Possui conta? <Link to={"/login"} > Entrar </Link> </p>
            </div>
        </div>
    )
}

export default Home;