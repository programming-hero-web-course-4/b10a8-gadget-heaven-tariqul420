import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        const filterByCategory = [...data].filter(gadget => gadget.category === category)
        setGadgets(filterByCategory)
    }, [category, data])

    console.log(gadgets);
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget} />)
            }
        </div>
    );
};

export default GadgetCards;