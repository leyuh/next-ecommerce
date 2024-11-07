import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
    return <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image src="" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500" />
                <Image src="" alt="" fill sizes="25vw" className="absolute object-cover rounded-md" />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
            </div>
            <div className="text-sm text-gray-500">Desc</div>
            <button className="rounded-2xl ring-1 ring-primary text-primary px-4 text-xs hover:bg-primary hover:text-white w-max">Add to Cart</button>
        </Link>
    </div>
}

export default ProductList;