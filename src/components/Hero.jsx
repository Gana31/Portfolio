import { FiMapPin } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroImage from "../../public/Hero.jpg";
import WorkEmoji from "../../public/Work.webp";

function Hero() {
  return (
    <div className="bg-primary py-[50px] md:py-[96px]">
      <div className="w-full md:w-[1100px] m-auto flex justify-between items-center flex-col px-[15px] md:flex-row-reverse gap-2">
        {/* Hero Image  */}
        <div className="md:w-[35%] m-auto">
          <img src={HeroImage} alt="hero_image" className="w-full rounded" />
        </div>
        {/* Hero Content */}
        <div className="md:w-[60%] flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] font-poppins text-white">
              Hi, I'm Ashwinee{" "}
              <span className="inline-block animate-waving-hand">👋</span>
            </h1>
            <p className="text-lg font-normal font-poppins text-dimWhite">
              As a full-stack developer, I specialize in creating scalable web
              applications with seamless user experiences. I am proficient in
              both front-end and back-end technologies.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-normal font-poppins text-dimWhite flex items-center gap-1">
              <FiMapPin />
              Odisha, India
            </p>
            <p className="text-lg font-normal font-poppins text-dimWhite flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
              Available for work
              <img src={WorkEmoji} alt="workEmoji" className="w-[26px]" />
            </p>
          </div>
          <div className="flex gap-3">
            <Link to={"www.linkedin.com/in/ashwinee111"} className="scale-box">
              <FaLinkedin size={25} color="#0077b5" className="scale-child" />
            </Link>
            <Link to={"https://github.com/Ashwinee111"} className="scale-box">
              <FaGithubSquare
                size={25}
                color="#d1d5db"
                className="scale-child"
              />
            </Link>
            <Link
              to={
                "https://www.instagram.com/_siku__08?igsh=cW00azF1bXh4anBq&utm_source=qr"
              }
              className="scale-box"
            >
              <FaInstagramSquare
                size={25}
                color="#e95950"
                className="scale-child"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
