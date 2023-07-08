import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import Header from "../Header";
import Footer from "../Footer";
import Home from './Home';


const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

  const setLoggedInValue = () => {
    setLoggedIn(!isLoggedIn);
  };
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home")
                setLoggedInValue()
            //     <Link to="/" >
            // </Link>
           
                console.log(user);
                console.log(user.displayName);
            })
            .catch((error) => {
                window.alert(error.message);
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <div className="screen_bg">
          
			<Header />

            <div>
                <div className="introduction">
                    <p>Explore our website, shop with confidence, and elevate your wardrobe with our premium selection of men's
                        clothing.</p>
                </div>

                <p className="paragraph" >Welcome to our men's
                    clothing website! Discover a wide range of stylish and high-quality
                    clothing options tailored for the modern man. From casual wear to formal attire, we offer the latest trends
                    and timeless classics to elevate your wardrobe. Shop with confidence and enjoy a seamless shopping experience
                    with us.</p>


                <form>
                    <div>
                        <label htmlFor="email-address">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            onClick={onLogin}
                        >
                            Login
                        </button>
                      
                    </div>
                </form>

                <p className="text-sm text-white text-center">
                    No account yet? {' '}
                    <NavLink to="/signup">
                        Sign up
                    </NavLink>
                </p>

            </div>
            <Footer />

        </div>
    )
}

export default Login