import AboutImg from "/public/My_Image.png";
import Tag from "./Tag";
import Resume from "/public/ganesh_ronghe_9096528473.pdf";

function About() {
  return (
    <div className="bg-primary py-[50px] md:py-[96px]" id="about">
      <div className="w-full md:w-[1100px] m-auto px-[15px]">
        <div className="flex justify-center items-center flex-col gap-y-3 text-center mb-2">
          <Tag text="About me" subText="" />
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row gap-6 mt-10">
          <div className="md:w-[35%] m-auto">
            <img
              src={AboutImg}
              alt="hero_image"
              className="w-full rounded-md"
            />
          </div>
          <div className="md:w-[50%]">
            <h2 className="text-2xl text-white font-poppins mb-2">
              Curious about me? Here you have it:
            </h2>
            <p className="text-lg font-normal font-poppins text-dimWhite mb-5">
            Hello there! My name is Ganesh Ronghe, and I am a Full-Stack Developer 
            from Chhatrapati Sambhaji Nagar, Maharashtra. I hold a Master's degree in 
            Computer Applications (MCA) from the Government College of Engineering. 
            During my academic journey, I completed a 6-month internship with the Alpha Developer 
            Team LLP, where I gained valuable hands-on experience. I am passionate about leveraging 
            my technical skills and creativity to build efficient and innovative digital solutions. 
            Whether it's working on the front-end or the back-end, I am committed to delivering high-quality 
            results. I believe in the power of collaboration and am eager to work with you to bring your ideas to life!
            </p>
            <a
              href={Resume}
              download="Resume"
              className="items-center rounded-md bg-white px-4 py-3 text-sm font-medium text-secondary border-none no-underline font-poppins"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
