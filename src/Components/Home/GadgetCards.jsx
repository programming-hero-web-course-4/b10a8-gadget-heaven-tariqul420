import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCards = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const location = useLocation();

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if (location.pathname === '/') {
            setGadgets(data);
        } else {
            const filterByCategory = [...data].filter(gadget => gadget.category === category);
            setGadgets(filterByCategory);
        }
    }, [category, data, location.pathname]);

    return (
        <div>
            {gadgets.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget} />)}
                </div>
            ) : (
                <div className="flex items-center justify-center flex-col space-y-6 p-10 bg-[#13131308] rounded-[12px]">
                    <img className="w-[9.5rem] mx-auto mb-4" src="https://i.postimg.cc/JzQV0Sf2/error.webp" alt="No data available" />
                    <h2 className="font-bold text-3xl text-color-secondary mb-2">No Information Available</h2>
                    <p className="text-xl text-color-secondary">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.
                    </p>
                </div>
            )}
        </div>
    );
};

export default GadgetCards;
