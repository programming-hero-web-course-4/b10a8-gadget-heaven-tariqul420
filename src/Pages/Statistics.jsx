import { useLoaderData } from "react-router-dom";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="w-11/12 mx-auto">
            <ComposedChart
                width={1200}
                height={500}
                data={data}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="product_title" />
                <YAxis dataKey={"price"} />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" barSize={30} fill="#9538e2" />
                <Area type="monotone" dataKey="price" fill="#9538e280" stroke="#9538e299" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;