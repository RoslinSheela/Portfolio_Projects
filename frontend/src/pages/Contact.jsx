import Title from "../components/Title"
import {assets} from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"}/>

      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px]'src={assets.contact_img}/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">Trade Center, Chennai <br></br>Tamil Nadu</p>
          <p className="text-gray-500">Tel: 9876543210 <br></br>Email: roslin@gmail.com</p>
          <p></p>
          <p></p>
          <button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-500">Explore More</button>

        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
