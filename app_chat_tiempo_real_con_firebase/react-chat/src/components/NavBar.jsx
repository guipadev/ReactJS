import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

/**
 * La useAuthState función se activa cuando el usuario inicia o cierra sesión,
 * lo que nos permite acceder a los detalles del usuario.
 *
 * Actualmente, el estado del usuario es null.
 *
 * Una vez que hayan iniciado sesión, el estado del usuario cambiará a los datos proporcionados
 * por el método de autenticación, en este caso, Google.
 *
 * En la googleSignIn función, le informamos a Firebase que el usuario desea iniciar sesión con
 * Google usando el GoogleAuthProvider().
 *
 * También los redirige a la página de inicio de sesión de Google.
 *
 * Una vez que el usuario inicia sesión correctamente, sus datos se guardan en auth y se
 * redirige al usuario a nuestra aplicación.
 *
 * La signOut función borra los datos de autenticación y los devuelve a null.
 *
 * El nuevo estado de usuario también determina qué botones de autenticación se muestran
 * al usuario.
 */
const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
