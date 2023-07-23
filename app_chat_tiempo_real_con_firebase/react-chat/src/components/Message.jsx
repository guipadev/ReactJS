/**
 * componente Mensaje, representA los datos pasados nuestro navegador.
 *
 * Importamos auth y useAuthState almacenamos los detalles del usuario en user.
 * Deconstruimos la propiedad de mensajes y pasamos el avatar al atributo img src.
 * También reemplazamos el nombre ficticio y el mensaje con el obtenido de los datos del mensaje.
 */
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};
export default Message;
