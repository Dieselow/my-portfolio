import React, {useRef, useState} from "react";
import Image from "next/image";
import {AiOutlineVerticalRight, AiOutlineVerticalLeft} from "react-icons/ai";


let count = 0;
interface ImageProps {
    projectImages: Array<String>
    projectDirectory: String
}
export default function ImageSlider(props: ImageProps){
    const images: Array<string> = [];
    if (props.projectImages != undefined){
        props.projectImages.forEach((image: String)=> {
            images.push("/images/projects/" + props.projectDirectory + "/" + image)
        });
    }
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);
   /** const handleOnNextClick = () => {
        count = (count + 1) % images.length;
        setCurrentIndex(count);
        // @ts-ignore
        slideRef.current.classList.add("fade-anim");
    };

    const handleOnPrevClick = () => {
        const productsLength = images.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        // @ts-ignore
        slideRef.current.classList.add("fade-anim");
    }; **/


    // @ts-ignore
    return (
        <>
            <div className="max-w-screen-xl m-auto">
                <div ref={slideRef} className="align-middle w-full relative select-none">
                    <Image height={300} width={300} className={"object-contain"} layout={"fixed"} src={images[currentIndex]} alt=""/>
                    <div
                        className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                        {/*
                        <button
                            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                            onClick={handleOnPrevClick}>
                            <AiOutlineVerticalRight size={35}/>
                        </button>
                        <button
                            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                            onClick={handleOnPrevClick}>
                            <AiOutlineVerticalLeft size={35}/>
                        </button>
                        */}
                    </div>
                </div>
            </div>
        </>
    );
}
