# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Librerias
- Zustand: Manejo del estado global de la aplicación
    Manejar el estado de la reserva
- React Query: Llamadas y fetching de datos
    Para buscar los datos del hotel y almacenarlos en caché
- React Hook Form: Manejo y control de formularios
    Para validar ese formulario
- Wouter: Enrutamiento
    Para el enrutamiento de las vista detalle
- React Hot Toast: Notificaciones
    Para notificar algún error o confirmación de la reserva

## Instalación y configuración json server
``` "server": "json-server --watch db.json --port 3001"```

## Proceso para ejecutar aplicación
En una terminal ```npm run dev```
En otra terminal ```npm run server```