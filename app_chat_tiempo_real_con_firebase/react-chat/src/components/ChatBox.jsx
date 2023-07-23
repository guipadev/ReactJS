import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

/**
 * Cómo recuperar mensajes de nuestra base de datos
 * Después de enviar el mensaje del usuario, debemos mostrarlo en la pantalla al usuario.
 * Entrando en nuestro componente ChatBox
 */
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  /**
   * Creamos un useEffect enlace que se ejecutará cada vez que se realicen cambios en
   * la sala de chat, como enviar o eliminar un mensaje.
   */
  useEffect(() => {
    /**
     * const q, una consulta de Firebase que consulta nuestra base de datos en busca de una
     * colección de mensajes.
     * ordena los documentos de la colección en función de la clave createdAt y devuelve un
     * máximo de 50 documentos (mensajes guardados).
     */
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    /**
     * unsubscribe representa la función onSnapshot que escucha los cambios en el documento.
     * Tiene una matriz vacía llamada messages.
     */
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];

      /**
       * El bucle forEach recorre todos los documentos de la colección y guarda los datos
       * en la nueva matriz.
       * Luego establece la matriz de mensajes inicial en la nueva matriz de mensajes.
       */
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });

      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );

      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {/* También usamos una función de mapa en nuestra matriz de mensajes para representar cada mensaje/datos de documentos en nuestro componente Mensaje */}
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;
