import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import CategoryList from "@/components/CategoryList"
import { useContext, useEffect, Suspense } from "react"
import { WixClientContext } from "@/context/wixContext"
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer"

const HomePage = async () => {

  
  return (
    <div className="home">
      <Slider />

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"Loading"}>
          {/* @ts-expect-error Server Component */}
          <ProductList categoryId={process.env.FEATURED_CATEGORY_ID!} limit={4} />
        </Suspense>
      </div>

      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <Suspense fallback={"Loading"}>
          {/* @ts-expect-error Server Component */}
          <CategoryList />
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        
        {/*<ProductList />*/}
      </div>
    </div>
  )
}

export default HomePage