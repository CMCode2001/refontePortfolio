import Marquee from "../Components/components/ui/marquee";
import * as React from "react";

const projects = [
  {
    img: "/img/P0.png",
    alt: "Project 0", 
  },
  {
    img: "/img/P1.jpg",
    alt: "Project 1",
  },
  {
    img: "/img/P2.jpg",
    alt: "Project 2",
  },
  {
    img: "/img/P3.jpg",
    alt: "Project 3",
  },
  {
    img: "/img/P4.jpg",
    alt: "Project 4",
  },
  {
    img: "/img/P5.jpg",
    alt: "Project 5",
  },
  {
    img: "/img/P6.jpg",
    alt: "Project 6",
  },
  {
    img: "/img/P7.png",
    alt: "Project 7",
  },
  {
    img: "/img/P8.png",
    alt: "Project 8",
  },
  {
    img: "/img/P9.jpg",
    alt: "Project 9",
  },
  {
    img: "/img/P10.jpg",
    alt: "Project 10",
  },
  {
    img: "/img/P11.jpg",
    alt: "Project 11",
  },
  {
    img: "/img/P12.jpg",
    alt: "Project 12",
  },
  {
    img: "/img/P14.png",
    alt: "Project 14",
  },
  {
    img: "/img/P15.png",
    alt: "Project 15",
  },
  {
    img: "/img/P16.jpg",
    alt: "Project 16",
  },
  {
    img: "/img/P17.JPG",
    alt: "Project 17",
  },
  {
    img: "/img/P18.JPG",
    alt: "Project 18",
  },
  {
    img: "/img/P19.png",
    alt: "Project 19",
  },
  {
    img: "/img/P20.jpg",
    alt: "Project 20",
  },
  {
    img: "/img/logo/L1.png",
    alt: "Logo 1",
  },
  {
    img: "/img/logo/L3.png",
    alt: "Logo 3",
  },
  {
    img: "/img/logo/L4.png",
    alt: "Logo 4",
  },
  {
    img: "/img/logo/L5.jpg",
    alt: "Logo 5",
  },
  {
    img: "/img/logo/L6.jpg",
    alt: "Logo 6",
  },
  {
    img: "/img/logo/L11.png",
    alt: "Logo 11",
  },
  {
    img: "/img/logo/L2.png",
    alt: "Logo 2",
  },
  {
    img: "/img/logo/L7.png",
    alt: "Logo 7",
  },
  {
    img: "/img/logo/L8.png",
    alt: "Logo 8",
  },
  {
    img: "/img/logo/L9.png",
    alt: "Logo 9",
  },
  {
    img: "/img/logo/L10.png",
    alt: "Logo 10",
  },
];


export default function BlogDesign() {
  return (
    <>
    <div className="container mx-auto px-4">
        <div style={{opacity: '1', transform: 'none'}}>
          <div className="pb-8 flex flex-col mt-0 max-lg:mt-0 items-center justify-center text-4xl -rotate-2">
              <div className=" font-bold max-sm:text-2xl text-yellow-600">
                Graphic Design 🎨              
              </div>
              <div className="w-40 h-2 bg-yellow-600 rounded-full"></div>
              <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-4"></div>
          </div>
        </div>
    </div>


    <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-sm bg-white md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:50s]">
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.img}
            alt={project.alt}
            className="mx-4 h-[180px] w-auto rounded-sm "
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-background"></div>
    </div>
    </>
  );
}
