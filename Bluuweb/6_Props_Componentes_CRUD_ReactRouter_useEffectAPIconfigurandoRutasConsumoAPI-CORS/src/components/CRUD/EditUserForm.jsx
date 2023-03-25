import { useForm } from "react-hook-form"

const EditUserForm = (props) => {

  //console.log(props.currentUser)

  // defaultValues cargara los valores por defecto que seleccione por primera vez
  // setValue permitira detectar los valores por defecto seleccionado
  const { register, handleSubmit, formState: { errors }, setValue} = useForm({
    defaultValues: props.currentUser
  });

  // Detecta los valores por defecto donde selecionemos
  setValue('name', props.currentUser.name)
  setValue('username', props.currentUser.username)

  const onSubmit = (data, e) => {
    console.log(data);

    // obtener data
    data.id = props.currentUser.id

    // Mostrar id que recibimos cada vez que damos en editar en tabla y data que viener de los inputs
    props.updateUser(props.currentUser.id, data)

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

      <button>Edit user</button>

    </form>
  )
}
 
export default EditUserForm;