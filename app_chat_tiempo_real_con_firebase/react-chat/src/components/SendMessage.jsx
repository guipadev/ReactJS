import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

/**
 * La sendMessage función es una función asíncrona.
 * Primero verifica si el usuario está tratando de enviar una cadena vacía o un espacio
 * en blanco como mensaje y alerta al usuario.
 *
 * Si el mensaje no es una cadena vacía, obtiene el uid, el displayName y la URL de la foto
 * del usuario a partir de los auth datos proporcionados cuando inicia sesión.
 * Esto corresponde a la identificación única , el nombre completo y la URL de la foto del
 * usuario , respectivamente.
 *
 * Una vez hecho esto, utiliza el addDoc() para crear un documento dentro de una colección
 * llamada mensajes en nuestra base de datos, a la que tenemos acceso a través de la db
 * importación.
 * Si la colección no existe, la creará para nosotros.
 *
 * También crea pares clave-valor, almacenando nuestro mensaje en text, displayName en name,
 * almacenando la hora en que se guardó el mensaje en nuestra base de datos en createdAt,
 * y luego el uid del usuario.
 *
 * Estos pares clave-valor son los que componen los datos de nuestro documento.
 * Una vez hecho esto, restablece el estado del mensaje a una cadena vacía.
 */
const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default SendMessage;
