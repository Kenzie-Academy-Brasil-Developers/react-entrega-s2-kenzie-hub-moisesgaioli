import { Redirect } from "react-router";
import FormRegister from "../../components/FormRegister";

const Register = ({ authenticated }) => {

    if(authenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <FormRegister />
    )
}

export default Register;