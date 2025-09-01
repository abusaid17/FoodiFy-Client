import { Helmet } from "@dr.pogodin/react-helmet";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const publicAxios = usePublicAxios();

    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext);
    // Manage React Hooks Form and use React Hooks Form
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {

                        // create user inside database 
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        publicAxios.post('users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created successfully inside database')
                                    reset();
                                    Swal.fire({
                                        title: "User Created Successfully",
                                        icon: "success",
                                        draggable: true
                                    });
                                    navigate('')
                                }
                            })

                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
    }


    return (
        <>
            <Helmet>
                <title>
                    FoodiFy | Register
                </title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className=" text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">PhotoURL</label>
                                <input
                                    type="text"
                                    name="photourl"
                                    placeholder="Name"
                                    className="input"
                                    {...register("PhotoURL", { required: true })}
                                />
                                {errors.PhotoURL && <span className=" text-red-600">Name is required</span>}
                            </div>


                            <div className=" form-control">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className=" text-purple-700">Email is required</span>}
                            </div>


                            <div className=" form-control">
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/
                                    })}
                                />
                                {errors.password?.type === 'minLength' && <span className=" text-blue-600">Password must be at least 6 charecter</span>}
                                {errors.password?.type === 'pattern' && <span className=" text-blue-600">Use at least one Uppercase One Lowercase and One Speatial Charecter</span>}
                            </div>

                            <input className="btn text-white text-lg bg-amber-500 mt-4 w-[97%]" type="submit" value="Register" />


                        </form>
                        <div className="text-center pb-2">
                            <p>Already have an Account ? <Link to='/login'><span className="text-lg font-semibold text-primary">Login First</span></Link></p>
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

export default Register;
