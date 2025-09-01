import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router";
import usePublicAxios from "../../../Hooks/usePublicAxios";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const publicAxios = usePublicAxios();

    const navigate = useNavigate();

    const handleGooleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                publicAxios.post('users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
            })
    }
    return (
        <div>
            {/* Google */}
            <button onClick={handleGooleLogin} className="btn bg-slate-200 text-black border-[#e5e5e5] text-center text-lg">
                < FcGoogle />
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;