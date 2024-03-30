import Tag from "./Tag";
import { MdArrowOutward } from "react-icons/md";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import StudyNotion from "/public/StudyNotion.png";
import CarRental from "/public/Car Rental.png";
import BuyMeTea from "/public/Buy Me a Tea.png";
import Eshop from "/public/Eshop.png";

function Project() {
  return (
    <div className="bg-secondary py-[50px] md:py-[96px]" id="projects">
      <div className="w-full md:w-[1100px] m-auto px-[15px]">
        <div className="flex justify-center items-center flex-col gap-y-3 text-center">
          <Tag
            text="Projects"
            subText="Some of the noteworthy projects I have built:"
          />
        </div>
        {/* Project */}
        <div className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2 mt-14 font-poppins">
          {/* PROJECT-1  */}
          <div
            className="w-full rounded-md border bg-dimGrey"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div
              className="portfolio-img"
              style={{ backgroundImage: `url(${StudyNotion})` }}
            ></div>
            <div className="p-4">
              <a
                href="https://github.com/Ashwinee111/StudyNotion_EdTech"
                className="inline-flex items-center text-xl font-semibold text-white no-underline"
              >
                StudyNotion   <MdArrowOutward size={25} />
              </a>
              <p className="mt-3 text-lg text-dimWhite">
                StudyNotion is a versatile and intuitive ed-tech platform that
                is designed to provide an immersive learning experience to
                students and a platform for instructors to showcase their
                expertise.
              </p>
              <div className="mt-4">
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #React JS
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #Node JS
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #Express JS
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #MongoDB
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #Tailwind CSS
                </span>
              </div>
              <a
                href="https://studynotion-ashwinee.vercel.app/"
                className="flex justify-center items-center gap-3  mt-5 no-underline text-lg text-dimWhite bg-secondary w-full text-center py-2 rounded-md"
              >
                Preview <LiaExternalLinkAltSolid size={25} />
              </a>
            </div>
          </div>
          {/* PROJECT-2  */}
          <div
            className="w-full rounded-md border bg-dimGrey"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div
              className="portfolio-img"
              style={{ backgroundImage: `url(${CarRental})` }}
            ></div>
            <div className="p-4">
              <a
                href="https://github.com/Ashwinee111/Car_Rental"
                className="inline-flex items-center text-xl font-semibold text-white no-underline"
              >
                Car Rental   <MdArrowOutward size={25} />
              </a>
              <p className="mt-3 text-lg text-dimWhite">
                A car rental website is an online platform that allows users to
                rent cars for personal or business use. The website provides an
                easy-to-use interface for searching, comparing, and reserving
                cars from a wide selection of vehicles that vary in make, model,
                size, and price.
              </p>
              <div className="mt-4">
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #React JS
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #Router
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #SCSS
                </span>
              </div>
              <a
                href="https://car-rental-ashwinee.vercel.app/"
                className="flex justify-center items-center gap-3  mt-5 no-underline text-lg text-dimWhite bg-secondary w-full text-center py-2 rounded-md"
              >
                Preview <LiaExternalLinkAltSolid size={25} />
              </a>
            </div>
          </div>
          {/* PROJECT-3  */}
          <div
            className="w-full rounded-md border bg-dimGrey"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div
              className="portfolio-img"
              style={{ backgroundImage: `url(${Eshop})` }}
            ></div>
            <div className="p-4">
              <a
                href="https://github.com/Ashwinee111/E_Shop"
                className="inline-flex items-center text-xl font-semibold text-white no-underline"
              >
                EShop   <MdArrowOutward size={25} />
              </a>
              <p className="mt-3 text-lg text-dimWhite">
                EShop is a React JS-based website featuring TailWind CSS and the
                AOS library for animations. It offers a dynamic carousel for
                product display, alongside captivating animations to engage
                users. With options for both dark and light themes, the site
                ensures optimal viewing preferences. Its modern UI and
                responsive design enhance user experience.
              </p>
              <div className="mt-4">
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #React JS
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #Tailwind CSS
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #AOS
                </span>
              </div>
              <a
                href="https://e-shop-ashwinee.vercel.app/"
                className="flex justify-center items-center gap-3  mt-5 no-underline text-lg text-dimWhite bg-secondary w-full text-center py-2 rounded-md"
              >
                Preview <LiaExternalLinkAltSolid size={25} />
              </a>
            </div>
          </div>
          {/* PROJECT-4  */}
          <div
            className="w-full rounded-md border bg-dimGrey"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div
              className="portfolio-img"
              style={{ backgroundImage: `url(${BuyMeTea})` }}
            ></div>
            <div className="p-4">
              <a
                href="https://github.com/Ashwinee111/Buy_Me_a_Tea"
                className="inline-flex items-center text-xl font-semibold text-white no-underline"
              >
                Buy Me a Tea   <MdArrowOutward size={25} />
              </a>
              <p className="mt-3 text-lg text-dimWhite">
                Buy Me a Tea utilizes Razorpay for seamless payment processing,
                mirroring Buymeacoffee's model. The platform enables supporters
                to financially back content creators with ease.
              </p>
              <div className="mt-4">
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #React JS
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #Node JS
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #Express JS
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #MongoDB
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #Razorpay
                </span>
                <span className="text-sm mb-2 mr-2 inline-block rounded-full bg-secondary py-2 px-4 font-medium text-white">
                  #Tailwind CSS
                </span>
              </div>
              <a
                href="https://buy-me-a-tea-ashwinee.vercel.app/"
                className="flex justify-center items-center gap-3  mt-5 no-underline text-lg text-dimWhite bg-secondary w-full text-center py-2 rounded-md"
              >
                Preview <LiaExternalLinkAltSolid size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
