import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const location = useLocation()

    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        if (location.pathname === '/') {
            setGadgets(data)
        } else {
            const filterByCategory = [...data].filter(gadget => gadget.category === category)
            setGadgets(filterByCategory)
        }
    }, [category, data, location.pathname])

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget} />)
            }
        </div>
    );
};

export default GadgetCards;