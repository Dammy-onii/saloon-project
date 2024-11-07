import Image from "next/image";

import aboutImg from "../assets/img/img_2.jpg";
import aboutHair from "../assets/img/hair_2.jpg";
import aboutMain from "../assets/img/img_1.jpg";

interface IAboutIntro {
  // title: string,
  bodyTitle: string;
  body: string;
  display: string,
}
const AboutIntro = ({ bodyTitle, body, display }: IAboutIntro) => {
  return (
    <div className=" flex flex-col lg:flex-row px-10 lg:px-28 py-20 gap-10 justify-between ">
      <div className=" lg:w-2/4 flex flex-col ">
        <h2 className=" text-orange-900 text-sm font-semibold ">
          About Our Salon
        </h2>
        <h1 className=" text-5xl lg:w-3/4 my-4 ">
          Welcome to AdeBlessing Services
        </h1>
        <Image src={aboutImg} className=" w-3/4 my-4 " alt="De Blessing Salon"  />
        <Image
          src={aboutHair}
          className=" w-2/5 my-[-40%] self-end rounded-br-[50%] "
          alt="De Blessing Salon" 
        />
      </div>
      <div className=" lg:w-2/4 flex flex-col items-center ">
        <Image src={aboutMain} className=" w-3/4 my-4 " alt="De Blessing Salon"  />
        <h2 className=" lg:w-3/4 text-lg my-4 ">{bodyTitle}</h2>
        <p className=" lg:w-3/4 font-light text-lg tracking-wide ">{body}</p>
        <button
          className={` ${display} bg-none px-8 py-4 hover:bg-orange-800 hover:border-orange-800 border-2 font-semibold text-sm text-black hover:text-white my-4  `}
        >
          MORE ABOUT US
        </button>
      </div>
    </div>
  );
};

export default AboutIntro;
