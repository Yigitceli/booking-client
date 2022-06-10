import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import useOnClickOutside from "../hooks/useClickOutside";

interface IProps {
  photos: Array<{ src: string }>;
  index: number;
  setIndex: (v: number) => void;
  setOpen: (v: boolean) => void;
}

const Slider: React.FC<IProps> = ({ photos, index, setIndex, setOpen }) => {
  const imageRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null)
  useOnClickOutside(imageRef, () => setOpen(false), leftArrowRef, rightArrowRef);

  const handleClick = (type: string) => {
    if (type == "l") {
      setIndex(index == 0 ? photos.length - 1 : index - 1);
    } else {
      setIndex(index == photos.length - 1 ? 0 : index + 1);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full z-50 fixed h-screen bg-grayTransperant flex justify-center items-center">
      <button
        ref={leftArrowRef}
        className="z-60 fixed text-5xl left-5 hover:scale-105 transition-all ease-in-out duration-100"
        onClick={(e) => handleClick("l")}
      >
        <BsFillArrowLeftCircleFill color="white" />
      </button>
      <AiFillCloseCircle
        className="z-60 fixed text-4xl right-5 top-5 cursor-pointer hover:scale-105 transition-all ease-in-out duration-100"
        color="white"
        onClick={handleClose}
      />
      <img src={photos[index].src} ref={imageRef} />
      <button
        ref={rightArrowRef}
        className="z-60 fixed text-5xl right-5 hover:scale-105 transition-all ease-in-out duration-100"
        onClick={(e) => handleClick("r")}
      >
        <BsFillArrowRightCircleFill color="white" />
      </button>
    </div>
  );
};

export default Slider;
