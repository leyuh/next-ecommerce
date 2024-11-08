"use client"

import Image from "next/image";
import { useState } from "react";

const images = [
    { id: 1, url: ""},
    { id: 2, url: ""},
    { id: 3, url: ""},
    { id: 4, url: ""},
]

const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return <div>
        <div className="">
            <div className="h-[500px] relative">
                <Image src={images[index].url} alt="" fill className="object-cover rounded-md" sizes="30vw" />
            </div>
        </div>
        <div className="flex justify-between gap-4 mt-8">
            {images.map((img, i) => (
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
                    <Image src={img.url} alt="" fill className="object-cover rounded-md" sizes="30vw" />
                </div>
            ))}
            
        </div>

    </div>
}

export default ProductImages;