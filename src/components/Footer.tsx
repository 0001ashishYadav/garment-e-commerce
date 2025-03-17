import { MdOutlineCopyright, MdFacebook } from "react-icons/md";
import { RiDiscordFill, RiTwitterXFill, RiGithubFill } from "react-icons/ri";
import { PiVinylRecord } from "react-icons/pi";

function Footer() {
  return (
    <footer className="h-[35vh] border-t-2 border-b-2  border-gray-500/20 mt-8 mb-2">
      <div className="h-[75%] max-w-6xl flex justify-center items-center border-b-2  border-gray-500/20 mx-auto">
        <div className="text-5xl h-[100%] w-[50%] font-semibold pt-6 ">
          <span className=" text-gray-500">AK</span>
          <span className=" text-red-800">garments</span>
        </div>

        {/* <div className="flex md:grid text-center items-baseline justify-center text-white">
          <img className="h-8 mx-auto" src="./logo.png" />

          <p className=" translate-y-[-4px] md:translate-y-0">Garments</p>
        </div> */}

        <div className="h-[100%] w-[50%] flex justify-between items-center  font-medium text-gray-500">
          <ul className="grid gap-6 items-center">
            <li className="text-black">Resources</li>
            <li>Home</li>
            <li>About</li>
          </ul>

          <ul className="grid gap-6 items-center">
            <li className="text-black">Follow us</li>
            <li>GitHub</li>
            <li>Discord</li>
          </ul>

          <ul className="grid gap-6 items-center">
            <li className="text-black">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
      </div>

      <div className="h-[25%] max-w-6xl text-[12px] text-gray-500 flex justify-between items-center mx-auto">
        <div className="flex items-center gap-0.5">
          <MdOutlineCopyright />
          <p>2025ashishyadav. All Rights reserved</p>
        </div>

        <div className="flex justify-center items-center gap-5 text-lg">
          <MdFacebook />
          <RiDiscordFill />
          <RiTwitterXFill />
          <RiGithubFill />
          <PiVinylRecord />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
