import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { Helmet } from '@dr.pogodin/react-helmet';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    // For sign in using Email and Password
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    // const from = location.state?.from?.pathname || "/";
    const from = location.state?.from?.pathname || "/";
    console.log('locatiom state inside login: ', location.state)


    // For validate captcha
    const [disable, setDisable] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleValidateCaptch = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            // alert('Captcha Matched');
            setDisable(false);
        }
        else {
            // alert('Captcha Does Not Match');
            setDisable(true);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Login Successfully",
                    icon: "success",
                    draggable: true
                });
                navigate(from, { replace: true });
                form.reset();
            })
    }


    return (
        <>
            <Helmet>
                <title>
                    FoodiFy | Login
                </title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h2 className='text-3xl font-semibold text-center'>Login</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">

                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />

                                <label className="label mt-4">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptch} type="text" name="captcha" className="input" placeholder="Validate Captcha" />
                                {/* <button  className="btn btn-outline btn-info btn-xs w-[96%] mt-2">Validate Captcha</button> */}

                                {/* <input className="btn btn-neutral mt-4 w-full" type="submit" disabled={disable} value="Login with Email" /> */}

                                <button type="submit" disabled={false} className="btn bg-success w-[97%] mt-2 text-slate-800 border-[#e5e5e5]">
                                    <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                    Login with Email
                                </button>
                            </div>
                        </form>
                        <div className='text-center pb-2'>
                            <p>Don't Have an Account? <Link to='/register'><span className='text-lg text-primary font-semibold'>Register First</span></Link></p>
                        </div>
                        <hr />
                        <div className='mx-auto text-center py-4'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
