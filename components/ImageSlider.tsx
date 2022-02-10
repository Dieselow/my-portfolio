import React, {useRef, useState} from "react";
import Image from "next/image";
import {AiOutlineVerticalRight, AiOutlineVerticalLeft} from "react-icons/ai";


let count = 0;
export const ImageSlider = () => {
    const images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef();

    const handleOnNextClick = () => {
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
    };


    // @ts-ignore
    return (
        <>
            <div className="max-w-screen-xl m-auto">
                <div ref={slideRef} className="align-middle w-full relative select-none">
                    <Image height="300" width="300" src={images[currentIndex]} alt=""/>

                    <div
                        className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
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
                    </div>
                </div>
            </div>
        </>
    );
}
