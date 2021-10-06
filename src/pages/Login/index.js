import { Redirect } from "react-router";
import FormLogin from "../../components/FormLogin";

const Login = ({ authenticated, setAuthenticated }) => {

    if(authenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <FormLogin setAuthenticated={setAuthenticated} />
    )
}

export default Login;