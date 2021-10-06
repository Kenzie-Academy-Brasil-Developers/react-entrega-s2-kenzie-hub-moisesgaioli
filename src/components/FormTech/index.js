import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";


const FormTech = () => {

    const [token] = useState(
        JSON.parse(localStorage.getItem("@kenziehub/token") || "" )
    )

    const formSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        status: yup.string().required("Campo obrigatória"),
    });
    
    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: yupResolver(formSchema), 
    })

    const createTechs = (data) => {
        axios
            .post("https://kenziehub.herokuapp.com/users/techs", data, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(_ => {
                toast.success("Tecnologia cadastrada com sucesso.")
            })
            .catch(_ => toast.error("Tecnologia já cadastrada."))
    }

    return (
        <>
            <div>
                <h3> Adicionar tecnologia </h3>
            </div>
            <form onSubmit={handleSubmit(createTechs)}>
                <div>
                    <TextField 
                        label="Nome da tecnologia"
                        margin="normal"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        {...register("title")}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                </div>
                <div>
                    <TextField 
                        label="Nível"
                        margin="normal"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        {...register("status")}
                        error={!!errors.status}
                        helperText={errors.status?.message}
                    />
                </div>
                <div>
                    <button type="submit"> Adicionar tecnologia </button>
                </div>
            </form>
        </>
    )
}

export default FormTech;