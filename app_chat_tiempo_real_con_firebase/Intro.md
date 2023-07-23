# Aplicación de chat en tiempo real con ReactJS y Firebase

La aplicación, permitira que el usuario inicie sesión con su cuenta de Google mediante la autenticación de inicio de sesión de Google de Firebase. También almacenaremos y recuperaremos todos los mensajes de la sala de chat mediante Cloud Firestore de Firebase.

## Requisitos
- Node.js instalado en su sistema

## Firebase
Firebase es un backend como servicio (Baas). Es una plataforma de desarrollo de aplicaciones respaldada por Google que permite a los desarrolladores crear aplicaciones iOS, Android y web.

Proporciona herramientas para realizar un seguimiento de análisis, generar informes y solucionar fallas de aplicaciones, y crear experimentos de marketing y productos. Estos ayudan a los desarrolladores a desarrollar aplicaciones de calidad, aumentar su base de usuarios y obtener ganancias.

## Herramientas Firebase

### Firebase Authentication
Firebase Authentication (SDK) es una herramienta de Firebase que admite diferentes métodos de autenticación como contraseñas, números de teléfono, Google, Facebook, Twitter, Github y más. En esta aplicación, utilizaremos la autenticación de inicio de sesión de Google.

### Cloud Firestore
Cloud Firestore es un servidor de base de datos NoSQL basado en la nube para almacenar y sincronizar datos. Almacena datos en documentos como pares clave-valor, y los documentos se organizan en colecciones.

Los documentos también pueden tener subcolecciones, lo que le permite anidar colecciones dentro de colecciones. Los datos también se sincronizan automáticamente entre todos los dispositivos que los escuchan.

## Librerias
```
npm install firebase react-firebase-hooks
```