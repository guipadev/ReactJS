import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import LogoReact from "../img/react-logo.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Bienvenido al Chat</h2>
      <img src={LogoReact} alt="ReactJs logo" width={50} height={50} />
      <p>Inicie sesión con Google para chatear con sus parcer@s 😜</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};
export default Welcome;
