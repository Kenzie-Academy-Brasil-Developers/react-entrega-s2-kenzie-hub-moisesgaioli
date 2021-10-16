import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
import axios from "axios"
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "./styles.css"

const FormRegister = () => {

    const history = useHistory()
    
    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Senha deve conter letra maiúscula, minúscula e caractere especial"),
        name: yup.string().min(2, "Deve conter no mínimo 2 caracteres").matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Deve conter somente letras").required("Nome obrigatório"),
        bio: yup.string().required("Biografia obrigatório"),
        contact: yup.string().required("Contato obrigatório"),
        course_module: yup.string().required("Módulo do curso obrigatório"),
    })

    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: yupResolver(formSchema), 
    })

    const submitData = (data) => {
        axios
            .post("https://kenziehub.herokuapp.com/users", data)
            .then(_ => {
                toast.success("Cadastro feito com sucesso.")
                history.push("/login")
            })
            .catch(_ => toast.error("Email já cadastrado!"))
    }

    return (
        <>
            <h1 className="title"> Faça seu cadastro </h1>
            <div className="register-container">
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
                        <TextField
                            label="Nome"
                            margin="normal"
                            variant="outlined"
                            size="medium"
                            color="secondary"
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Biografia"
                            type="bio"
                            margin="normal"
                            variant="outlined"
                            size="medium"
                            color="secondary"
                            {...register("bio")}
                            error={!!errors.bio}
                            helperText={errors.bio?.message}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Contato"
                            type="bio"
                            margin="normal"
                            variant="outlined"
                            size="medium"
                            color="secondary"
                            {...register("contact")}
                            error={!!errors.contact}
                            helperText={errors.contact?.message}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Módulo do curso"
                            type="bio"
                            margin="normal"
                            variant="outlined"
                            size="medium"
                            color="secondary"
                            {...register("course_module")}
                            error={!!errors.course_module}
                            helperText={errors.course_module?.message}
                        />
                    </div>
                    <div>
                        <Button variant="contained" type="submit" color="secondary"> Cadastrar </Button>
                    </div>
                </form>
                <div className="link-register">
                        Já possui conta? <Link to={"/login"} > Entrar </Link>
                </div>
            </div>
        </>
    )
}

export default FormRegister;