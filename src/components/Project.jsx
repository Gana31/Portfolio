import Tag from "./Tag";
import { MdArrowOutward } from "react-icons/md";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import StudyNotion from "/public/StudyNotion.png";

function Project() {
  return (
    <div className="bg-secondary h-full py-[50px] md:py-[96px]" id="projects">
      <div className="w-full h-full md:w-[1100px] m-auto px-[15px]">
        <div className="flex justify-center items-center flex-col gap-y-3 text-center">
          <Tag
            text="Projects"
            subText="Some of the noteworthy projects I have built:"
          />
        </div>
        {/* Project */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-14 font-poppins">
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
                href="https://learn-alpha-murex.vercel.app/"
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
                href="https://learn-alpha-murex.vercel.app/"
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
