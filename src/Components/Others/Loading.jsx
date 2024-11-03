import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div>
                <HashLoader
                    color="black"
                    size={300}
                />
            </div>
        </div>
    );
};

export default Loading;