"use Client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FlipWord } from "./ui/FlipWord";

const Hero = () => {
  return (
    <div className="pb-7 sm:pb-20 pt-12 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10  left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.05]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>{" "}
      </div>

      <div className="flex justify-left relative my-20 z-10">
        <div className="max-w[89vw] md:max-w-2xl lg:max-w-[55vw] flex lg:ml-24 flex-col items-start justify-between">
          <img
            className="rounded-full h-16 w-16 object-cover object-center flex items-start"
            src="/Usman.png"
            alt="Usman.png"
          />

          <h1
            style={{ lineHeight: "1.2em" }}
            className=" pt-8 leading-[24px] tracking-tight  text-[40px] md:text-4xl lg:text-5xl text-gray-800 dark:text-white font-bold lg:w-2/3"
          >
            Full stack &nbsp;
            <FlipWord />
            web developer.
          </h1>

          <p className=" text-left mt-5 mb-7 text-sm md:text-xl lg:text-base  text-gray-600 dark:text-gray-400 ">
            {" "}
            I&apos;m Usman, a skilled web developer based in Pakistan with a
            deep focus on modern technologies like Next.js, React, and Node.js.
            My expertise with frameworks like Tailwind CSS and UI libraries 
            enables me to create fast, responsive websites
            that deliver a top-notch user experience. I&apos;m passionate about
            enhancing my skills to build solutions that make a lasting impact.
          </p>
          <div className="flex flex-row gap-x-6 text-2xl text-gray-500">
            <Link
              href={"https://www.linkedin.com/in/m-usman-9ba303307/"}
              target="_blank"
              className="hover:text-gray-800"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/usmans-github"
              target="_blank"
              className="hover:text-gray-800"
            >
              <FaGithub />
            </Link>
            <Link
              href={"https://x.com/UsmanAl57942357"}
              className="hover:text-gray-800"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"https://www.instagram.com/u5man____/"}
              className="hover:text-gray-800"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
