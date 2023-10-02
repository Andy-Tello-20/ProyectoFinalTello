import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <input className="Inputs" type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input className="Inputs" type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input className="Inputs" type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contacto