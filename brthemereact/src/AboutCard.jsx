import React from "react";

const AboutCard = (props) => {
  return (
    <div className="w-1/4 mb-4 float-left px-2">
      <img src={props.img} alt={props.alt} className="w-full" />
      <h3 className="font-normal my-[10px] text-2xl">{props.name}</h3>
      <p className="opacity-60 my-[15px]">{props.title}</p>
      <p className="my-[15px]">
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <p className="my-[15px]">
        <button className="contact-btn bg-[#f1f1f1] w-full px-4 py-2 align-middle overflow-hidden ">
          Contact
        </button>
      </p>
    </div>
  );
};

export default AboutCard;
