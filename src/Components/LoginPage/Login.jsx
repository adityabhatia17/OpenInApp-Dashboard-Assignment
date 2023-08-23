import { useEffect, useState } from "react";
import "./style.css";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { AppleLogo, GoogleLogo } from "../../Assets/svg";
import toastify, { toast } from "react-toastify";

const Login = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createUserDocument = async (user) => {
    setLoading(true);
    if (!user) {
      console.log("error");
      return;
    }

    const userRef = doc(db, "users", user.uid);
    const userData = await getDoc(userRef);

    if (!userData.exists()) {
      const { displayName, email, photoURL } = user;
      const createdAt = new Date();

      try {
        await setDoc(userRef, {
          name: displayName ? displayName : name,
          email,
          photoURL: photoURL ? photoURL : "",
          createdAt,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error creating user document: ", error);
        setLoading(false);
      }
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await createUserDocument(user);
      toast.success({
        title: "Success",
        message: "Logged In Successfully",
      });
      setLoading(false);
      localStorage.setItem("token", user.accessToken);
      navigate(`/portal`, {
        state: {
          avatarURL: user.photoURL,
        },
      });
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      console.error("Error signing in with Google: ", error.message);
    }
  };

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  return (
    <div className="login-container">
      <div className="left-side">
        <h1 style={{ color: "white", fontSize: "4.5rem" }}>Board.</h1>
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="login-header">
            <h1 style={{ marginBottom: "-1px" }}>Sign In</h1>
            <h3>Sign In to your account</h3>
            <div className="social-login">
              <div className="social-button">
                <button className="google" onClick={signInWithGoogle}>
                  <div class="google-icon">
                    <GoogleLogo />
                  </div>
                  <div>Sign in with Google</div>
                </button>
              </div>
              <div className="social-button">
                <button className="google" onClick={signInWithGoogle}>
                  <div class="google-icon">
                    <AppleLogo />
                  </div>
                  <div>Sign in with Apple</div>
                </button>
              </div>
            </div>
          </div>
          <div className="login-card">
            <form>
              <label htmlFor="username">Email Address</label>
              <input type="text" id="username" name="username" />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />

              <div style={{ color: "#346BD4" }}>Forgot Password?</div>

              <button
                type="submit"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginTop: "30px",
                }}
                onClick={signInWithGoogle}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
