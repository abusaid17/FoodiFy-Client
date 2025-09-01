import { useState } from 'react';
import image from '../../../../assets/shop/banner2.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../../Hooks/useMenu';
import OrderTabPannel from '../../Menu/OrderTabPannel/OrderTabPannel';
import { useParams } from 'react-router';
import { Helmet } from '@dr.pogodin/react-helmet';

const OrderFood = () => {
    const { category } = useParams();   // ✅ destructure to get the actual value
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const initialIndex = categories.indexOf(category); // category is now string (ex: "pizza")
    const [tabIndex, setTabindex] = useState(initialIndex === -1 ? 0 : initialIndex);

    console.log('inside categories : ', categories);
    console.log('inside category : ', category);
    console.log('inside index : ', initialIndex);

    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <section>
            <Helmet>
                <title>FoodiFy | Order Food</title>
            </Helmet>
            {/* Order food banner section */}
            <section>
                <div
                    className="hero h-[500px]"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md px-16 py-10 rounded-xl bg-black/40">
                            <h1 className="mb-5 text-5xl font-bold uppercase">Our shop</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Order tab panel section */}
            <section className='mt-6'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel><OrderTabPannel items={salad} /></TabPanel>
                    <TabPanel><OrderTabPannel items={pizza} /></TabPanel>
                    <TabPanel><OrderTabPannel items={soup} /></TabPanel>
                    <TabPanel><OrderTabPannel items={dessert} /></TabPanel>
                    <TabPanel><OrderTabPannel items={drinks} /></TabPanel>
                </Tabs>
            </section>
        </section>
    );
};

export default OrderFood;
