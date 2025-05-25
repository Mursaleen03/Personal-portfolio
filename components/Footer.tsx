import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import ContactMe from "./ContactMe";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="w-full pt-20 pb-10 relative" id="contact">
        <div className="w-full absolute left-0 bottom-0 min-h-96 -z-10">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
            width={1920}
            height={500}
            priority
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Let&apos;s take{" "}
            <span className="text-purple">your</span> digital dream from sketch to
            screen.
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Whether it&apos;s a website, app, or idea — I&apos;m here to code it
            into reality.
          </p>
        </div>
        <ContactMe />
        <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
          <p className="md:text-base text-sm md:font-normal font-light">© 2025 <span className="text-purple">Mursaleen</span>. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
