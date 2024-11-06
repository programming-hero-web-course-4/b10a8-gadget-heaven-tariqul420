import { useEffect, useState } from "react";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

const About = () => {
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    useEffect(() => {
        document.title = 'About | Gadget Heaven';
    }, []);

    return (
        <div className="max-w-4xl mx-auto my-10 p-6">
            <h1 className="text-4xl font-bold text-center mb-6">About Gadget Heaven</h1>
            <p className="text-lg mb-4">
                Welcome to <strong>Gadget Heaven</strong>, your one-stop destination for the latest and greatest in technology! Whether you’re looking for the newest smartphone, a powerful laptop, or a cutting-edge smartwatch, we’ve got you covered. Our goal is to bring you the best gadgets to fit your lifestyle and keep you connected.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
                At Gadget Heaven, our mission is to help you stay ahead of the tech curve. We aim to provide detailed information on the latest devices, helping you make informed decisions on your next purchase. Whether you’re a tech enthusiast or a casual user, we’re here to help you find the perfect gadget.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Gadget Heaven?</h2>
            <ul className="list-disc ml-5 text-lg mb-4">
                <li>Comprehensive reviews and comparisons of phones, laptops, and smartwatches</li>
                <li>Latest tech news and product updates</li>
                <li>User-friendly design with easy navigation</li>
                <li>Trusted source for expert opinions and recommendations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Our Products</h2>
            <p className="text-lg mb-4">
                Gadget Heaven features a wide range of products including:
            </p>
            <ul className="list-disc ml-5 text-lg mb-4">
                <li>Smartphones from top brands like Apple, Samsung, and Google</li>
                <li>Laptops for both casual use and professional work</li>
                <li>Smartwatches to help you stay connected on the go</li>
            </ul>

            <p className="text-lg mb-4">
                Whether you’re upgrading your gear or looking for the perfect gift, Gadget Heaven is here to guide you every step of the way. Explore our site and discover the latest tech that suits your needs.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Stay Connected</h2>
            <p className="text-lg mb-4">
                Follow us for the latest updates on new gadgets and exclusive deals. We’re excited to be part of your tech journey!
            </p>

            <hr className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">About the Author</h2>

            <div className="flex gap-8 max-sm:flex-col">
                <div className="relative w-fit h-full flex items-center justify-center"
                    onMouseEnter={() => setIsProfileHovered(true)}
                    onMouseLeave={() => setIsProfileHovered(false)}
                >
                    <img
                        src="https://i.postimg.cc/nzCvp3Yr/about.jpg"
                        alt="profile"
                        className="w-[100px] h-[100px] rounded-full object-cover border-4 border-[#3B9DF8] cursor-pointer"
                    />


                    <div
                        className={` ${isProfileHovered ? "opacity-100 z-20 translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute top-[-270px] left-[50%] transform translate-x-[-50%] bg-white w-[250px] rounded-md p-[15px] shadow-md transition-all duration-300`}>

                        <div
                            className="flex items-center justify-between border-b border-gray-200 pb-[7px]">
                            <p className="text-[1rem] font-[600] text-gray-700">Socials</p>
                            <div className="flex items-center gap-[8px]">
                                <a target="_blank" href="https://www.facebook.com/tariqul.islam.fb">
                                    <FaFacebookSquare className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out" />
                                </a>
                                <a target="_blank" href="https://github.com/tariqul420">
                                    <FaGithubSquare className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out" />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/tariqul.islam.fb">
                                    <FaInstagramSquare className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center justify-center flex-col mt-5">
                            <div className="relative">
                                <img
                                    src="https://i.postimg.cc/nzCvp3Yr/about.jpg"
                                    alt="profile"
                                    className="w-[80px] h-[80px] rounded-full object-cover" />
                                <div
                                    className="w-[10px] h-[10px] rounded-full bg-green-400 absolute top-[7px] right-[8px] border-[2px] border-white"></div>
                            </div>
                            <h4 className="text-[1.1rem] font-[600] text-gray-700 mt-2">Tariqul Islam</h4>
                            <p className="text-[0.8rem] text-gray-600">Front-End Developer</p>
                        </div>

                        <a target="_blank" href="https://m.me/tariqul.islam.fb">
                            <button
                                className="flex mx-auto hover:underline items-center gap-[8px] font-[500] text-[0.9rem] text-[#3B9DF8] mt-4">
                                <FiMessageCircle className="text-[1.1rem]" />
                                Send Message
                            </button>
                        </a>

                        <div className="bg-white w-[15px] h-[15px] rotate-[45deg] absolute bottom-[-7px] left-[50%] transform translate-x-[-50%]"></div>
                    </div>
                </div>

                <div className="w-10/12">
                    <h3 className="text-xl font-bold">Tariqul Islam</h3>
                    <p className="text-lg">
                        Hi! I am Tariqul Islam, a passionate front-end developer and the creator of Gadget Heaven.
                        I built this platform to help tech enthusiasts and consumers find the best gadgets available.
                        My goal is to provide the most up-to-date information, expert reviews, and comparisons to make sure
                        you get the right tech products to fit your needs. I hope you enjoy your time here!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
