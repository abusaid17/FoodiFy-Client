import useAuth from "../../../../Hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <h3 className="text-3xl font-bold">Hi Welcome <span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </span>
            </h3>
        </div>
    );
};

export default UserHome;