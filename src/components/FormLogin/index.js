import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "./styles.css"


const FormLogin = ({ setAuthenticated }) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória"),
    });
    
    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: yupResolver(formSchema), 
    })

    const submitData = (data) => {
        axios
            .post("https://kenziehub.herokuapp.com/sessions", data)
            .then(res => {
                const { token, user } = res.data
                window.localStorage.clear()
                window.localStorage.setItem("@kenziehub/token", JSON.stringify(token))
                window.localStorage.setItem("@kenziehub/user", JSON.stringify(user))
                setAuthenticated(true)
                return history.push("/dashboard")
            })
            .catch(_ => toast.error("Email ou senha inválidos!") )
    }

    return (
        <>
            <h1 className="title"> Faça seu login </h1>
            <form className="form-container" onSubmit={handleSubmit(submitData)}>
                <div>
                    <TextField
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Senha"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </div>
                <div>
                    <Button variant="contained" type="submit" color="secondary"> Entrar </Button>
                </div>
                <div className="link-register">
                    Não possui conta? <Link to={"/registro"} > Registrar-se </Link>
                </div>
            </form>
        </>
    )
}

export default FormLogin;