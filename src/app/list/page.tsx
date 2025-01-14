import Filter from "@/components/Filter"
import ProductList from "@/components/ProductList"
import { wixClientServer } from "@/lib/wixClientServer"
import Image from "next/image"
import { Suspense } from "react"

const ListPage = async ({ searchParams } : { searchParams: any }) => {
    
    const wixClient = await wixClientServer();
    const res = await wixClient.collections.getCollectionBySlug(searchParams.cat || "all-products");

    return <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="bg-pink-50 hidden sm:flex px-4 justify-between h-64">
            <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                <h1 className="text-4xl leading-[48px] font-semibold text-gray-700">Grab up to 50% off on <br /> selected products</h1>
                <button className="rounded-3xl bg-primary text-white w-max py-3 px-5 text-sm">Buy Now</button>
            </div>
            <div className="relative w-1/3">
                <Image src="/woman.png" alt="" fill className="object-contain" />
            </div>
        </div>

        <Filter />

        <h1 className="mt-12 text-xl font-semibold">{res.collection?.name} For You!</h1>
    
        <Suspense fallback="Loading">
            {/* @ts-expect-error Server Component */}
            <ProductList categoryId={res.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams}  />
        </Suspense>
    
    </div>
}

export default ListPage