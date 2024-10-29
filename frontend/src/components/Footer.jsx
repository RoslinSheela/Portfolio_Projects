import { assets } from "../assets/assets"


const Footer = () => {
return (
<div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className="mb-5 w-32"/>
            <p className="w-full md:w-2/3 text-gray-600">DropShipping for your favourite products.</p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91-9876543210</li>
                <li>contact@forever.com</li>
            </ul>
        </div>
    </div>
    <div>
        <hr></hr>
        <p className="py-5 text-sm text-center">Copyright 2024@forever.com - All Right Reserved.</p>
    </div>
</div>
)
}

export default Footer