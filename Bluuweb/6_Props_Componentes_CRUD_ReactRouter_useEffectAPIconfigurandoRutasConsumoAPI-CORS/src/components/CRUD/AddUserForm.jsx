import { useForm } from "react-hook-form"

export default function AddUserForm(props) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    // Ingresar datos
    props.addUser(data)

    // Limpiar formulario 
    e.target.reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label>Name</label>
      <input 
        type="text" 
        name="name"
        placeholder="pepito"
        {
          ...register("name", {
            required: "Campo es requerido, máximo 5 caracteres",
            maxLength: { value: 2, message: "Mínimo 2 letras"}
          })
        }
      />
      {errors.name && (
        <>
          <span className="text-danger text-small d-block mb-2">
            {errors.name.message}
          </span>
        </>
      )}

      <label>Username</label>
      <input 
        type="text" 
        name="username" 
        placeholder="perez"
        {
          ...register("username", {
            required: "Campo es requerido, máximo 5 caracteres",
            maxLength: { value: 2, message: "Mínimo 2 letras"}
          })
        }
      />
      {errors.username && (
        <>
          <span className="text-danger text-small d-block mb-2">
            {errors.username.message}
          </span>
        </>
      )}

      <button>Add new user</button>

    </form>
  )
}
