import Tag from "./Tag";
import SkillsIcon from "../constants/skills/index";

function Skills() {
  return (
    <div className="bg-secondary py-[50px] md:py-[96px]">
      <div className="w-full md:w-[1100px] m-auto px-[15px]">
        <div className="flex justify-center items-center flex-col gap-y-3 text-center">
          <Tag
            text="Skills"
            subText="The skills, tools and technologies I am really good at:"
          />
        </div>
        {/* Skills Icon */}
        <div className="grid grid-cols-2 grid-rows-2 gap-y-4 md:grid-cols-5 mt-14">
          {SkillsIcon.map((skill) => (
            <div
              key={skill.id}
              className="scale-box flex justify-center items-center flex-col gap-y-4"
            >
              <img
                src={skill.Icon}
                alt="Icon"
                className="w-[64px] scale-child"
              />
              <p className="text-lg text-dimWhite font-poppins font-medium">
                {skill.Text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
