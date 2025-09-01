import { useEffect, useState } from "react";
import ShowChefRecomend from "../ShowChefRecomend/ShowChefRecomend";
import SectionTitle from "../SectionTitle/SectionTitle";

const ChefRecomend = () => {
    const [recomend, setRecomend] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const chefRecomends = data.filter(item => item.category === "offered");
                setRecomend(chefRecomends);
            });
    }, []);

    return (
        <section>
            <SectionTitle
                subHeading="--- Should Try ---"
                Heading="CHEF RECOMMENDS"
            />
            <div className="grid md:grid-cols-3 gap-6">
                {recomend.map(item => (
                    <ShowChefRecomend
                        key={item._id}
                        item={item}
                    />
                ))}
            </div>
        </section>
    );
};

export default ChefRecomend;
