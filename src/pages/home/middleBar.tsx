import { useNavigate } from "react-router";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";

export default function MiddleBar() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  const goToProject = () => {
    navigate('/project');
  };

  return (
    <div className="flex mt-auto flex-row justify-between">
      <div className="mt-auto mx-5 text-xl flex flex-col">
        <div className="flex flex-row items-center">
          <FaPerson className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
          <p onClick={goToAbout} className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2">
            About me
          </p>
        </div>

        <div className="flex flex-row items-center">
          <FaProjectDiagram className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
          <p onClick={goToProject} className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2">
            Project
          </p>
        </div>

        <div className="flex flex-row items-center">
          <BiSolidContact className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
          <p className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2">
            Contact
          </p>
        </div>
      </div>
   </div>
  );
}
