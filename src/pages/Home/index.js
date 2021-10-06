import { Link } from "react-router-dom";
import { Redirect } from "react-router";

const Home = ({ authenticated }) => {

    if(authenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div>
            <div>
                Não possui conta? <Link to={"/registro"} > Registrar-se </Link>
            </div>
            <div>
                Possui conta? <Link to={"/login"} > Entrar </Link>
            </div>
        </div>
    )
}

export default Home;