import React from "react";
import Formulario from "./components/Formulario";
import FormHooks from "./components/FormHook";
import EjemploUno from "./components/EJemploUno";
import EjemploDos from "./components/EjemploDos";
import EjemploTres from "./components/EjemploTres";
import ValidarEmailFormularioUserForm from "./components/ValidarEmailFormularioUserForm";
import IntegradorDeControl from "./components/ControlInput/IntegradoDeControl";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          
          <div className="col-12">
            <h1 style={{color: 'orange'}}>Ejemplo Formulario</h1>
            <p>Captura y envío de datos, uso de useState</p>
            <Formulario />
          </div>
          
          <div className="col-12">
            <FormHooks />
          </div>

          <div className="col-12">
            <EjemploUno />
          </div>

          <div className="col-12">
            <h1 style={{color: 'orange'}}>Ejemplo Integrar un formulario existente</h1>
            <p>La integración de un formulario existente debería ser simple. El paso importante es registrar la referencia del componente y asignar accesorios relevantes a su entrada.</p>
            <p>No deja pasar si no escribe el nombre y solo letras, no muestra mensaje de error, muestra un mensaje JSON de la información que se obtiene del formulario</p>
            <EjemploDos />
          </div>

          <div className="col-12">
            <h1 style={{color: 'orange'}}>Integración con bibliotecas de interfaz de usuario</h1>
            <p>React Hook Form ha facilitado la integración con bibliotecas de componentes de interfaz de usuario externos. Si el componente no expone la referencia de entrada, debe usar el componente Controlador, que se encargará del proceso de registro.</p>
            <EjemploTres />
          </div>

          <div className="col-12">
            <h1 style={{color: 'orange'}}>Integración de Input controladas</h1>
            <p>Esta biblioteca abarca componentes no controlados y entradas HTML nativas; sin embargo, es difícil evitar trabajar con componentes controlados externos como <strong>React-Select</strong>, <strong>AntD</strong> y <strong>Material-UI</strong>. Para simplificar esto, proporcionamos un componente contenedor: controlador para agilizar el proceso de integración y al mismo tiempo darle la libertad de usar un registro personalizado.</p>
            <IntegradorDeControl />
          </div>

          <hr/>

          <div className="col-12">
            <h1 style={{color: 'orange'}}>useForm Hook</h1>
            <p>Escribir formularios en React puede ser una molestia, porque es repetitivo y generalmente implica una gran cantidad de código para agregar funciones comunes como la validación.</p>
            <p>Así es como se ve un formulario muy básico en React, donde tenemos una sola entrada de correo electrónico y manejamos el envío del formulario con `handleSubmit`.</p>
            <p>Sí, estamos validando el valor del correo electrónico que se ingresa, pero si hay un error de validación, debemos informar al usuario.</p>
            <p>El uso del hook <strong>useForm</strong>de <strong>@mantine/hooks</strong> nos brinda un hook personalizado y reutilizable para administrar todo el estado de nuestro formulario y mostrar fácilmente los errores de nuestros usuarios.</p>
            <h2>Componente</h2>
            <ValidarEmailFormularioUserForm />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
