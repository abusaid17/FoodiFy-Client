
const SectionTitle = ({ Heading, subHeading, menuName, menuDescription }) => {
    return (
        <div className="text-center py-4">
            <p className="text-lg font-semibold text-orange-400 py-3"> {subHeading} </p>
            <h1 className="text-4xl font-semibold">{Heading}</h1>
            {/* For menu page */}
            <h2>{menuName}</h2>
            <p>{menuDescription}</p>
        </div>
    );
};

export default SectionTitle;