import AboutImg from "/public/My_Image.png";
import Tag from "./Tag";
import Resume from "/public/ashwinee.pdf";

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
              Hello there! My name is Ashwinee Kumar Sethi, and I am a
              Full-Stack Developer with specialization in HTML, CSS, JavaScript,
              Tailwind CSS, React JS, GSAP, MongoDB, Node JS, and Express JS. I
              have a deep passion for creating seamless digital experiences by
              combining creativity with technical expertise. Whether it's
              front-end development using React and Tailwind CSS or backend
              solutions powered by MongoDB and Node.js, I always strive to bring
              ideas to life with efficiency and innovation. I stay up-to-date
              with the latest industry trends and continuously work on improving
              my skills to provide high-quality solutions that exceed
              expectations. I believe in collaboration and would love to work
              with you to create something amazing!
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
