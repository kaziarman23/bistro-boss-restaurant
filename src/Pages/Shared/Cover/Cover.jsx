/* eslint-disable react/prop-types */

import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt={title}
      bgImageSize="cover"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              magnam maiores, unde est eligendi deleniti laborum fugit eveniet
              aut incidunt tenetur! Voluptatum, ipsa quibusdam ipsum culpa nemo
              sequi error vero!
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
