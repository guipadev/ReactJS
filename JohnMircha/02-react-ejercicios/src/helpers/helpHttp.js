export const helpHttp = () => {

  // Método que hace la petición
  // Recibe la ruta y la serie de opciones que puede reciber la petición fetch
  const customFetch = (endpoint, options) => {
    // Por defecto esta solicitud aceptan JSON
    const defaultHeader = {
      accept: "application/json",
    };

    // La constante tendra AbortController detectar y abortar cuando no se pueda realizar el consumo de API
    const controller = new AbortController();
    
    // Controlar el manejador de error
    options.signal = controller.signal;

    // Al usuario no especificar solicitud este por defecto sera GET
    options.method = options.method || "GET";

    // Mezcla las cabecera más opciones que trae el usuario
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    // Si llega en objeto el body se parsea a JSON
    options.body = JSON.stringify(options.body) || false;
    // Si no existe body eliminarlo
    if (!options.body) delete options.body;

    //console.log(options);
    // Si en 3 seg no recibe rta, ejecutar el método de abortar
    setTimeout(() => controller.abort(), 3000);

    // Retorna rta si positiva o en caso de error
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };

  // Método obtener datos y si no hay opciones sera vacio
  const get = (url, options = {}) => customFetch(url, options);

  // Método enviar datos
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  // Método modificar datos
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  // Método eliminar datos
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  // Retorna/devuelve objeto con los métodos
  return {
    get,
    post,
    put,
    del,
  };
};
