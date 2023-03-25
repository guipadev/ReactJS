# Instalar de forma global json server
npm install -g json-server

# Configuración projecto
Se crea un directorio en src con el nombre "api"
Dentro de este un archivo db.json
Que contendra la información a consumir

# Levantar el servidor
- Para no estar ejecutandolo para levantarlo constantemente, vamos a crear un comando para que se ejecute automaticamente en el proyecto
- Ubicamos el archivo package.json la siguiente instrucción:
  "fake-api": "json-server --watch src/api/db.json --port 5000"

- En un segundo terminar toca levantarlo con el siguiente comando, cada vez que se inicie el proyecto
  npm run fake-api

# Visualizar el end-point
  https://localhost:5000/santos

# ESTILO LOADERS 
🚀 Loaders CSS - https://loading.io/css/
En la sección de "Libraries"
Buscar "Pure CSS Loaders"
Seleccionas el loaders de tu preferencia, genera el CSS y HTML para copiar

# OBTENER DATOS API
⚛️ API LyricsOvh - https://lyricsovh.docs.apiary.io/
⚛️ API TheAudioDB - https://theaudiodb.com/api_guide.php

