import React from 'react';
import Image from 'next/image';

const SliderSection = () => {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
  ];


  return (
   
    <div className="slider absolute bottom-[5%] right-[20%] w-[60%] h-[var(--height)] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mix-blend-difference opacity-80">
       <div className="list">
          {images.map((imageSrc, index) => (
            <div
              key={imageSrc}
              className="item"
              style={{position:'relative', left:`${index * 100}px` }}
            >
              <Image src={imageSrc}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
              />
            </div>
          ))}
        </div>
    </div>
  );
}

export default SliderSection;
