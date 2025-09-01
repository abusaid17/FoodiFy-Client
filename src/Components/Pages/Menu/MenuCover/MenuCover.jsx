
const MenuCover = ({ image, title, description }) => {

    return (
        <div
            className="hero h-[500px] "
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="hero-overlay bg-opacity-50 "></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md px-16 py-10 rounded-xl bg-black/40">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MenuCover;