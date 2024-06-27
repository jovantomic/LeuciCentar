
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
//import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useContext, useEffect } from "react";


const HomePage = async () => {

  // TEST (FETCHING ON THE CLIENT COMPONENT)

  /*const wixClient = useContext(WixClientContext);

   useEffect(() => {
     const getProducts = async () => {
       const res = await wixClient.products.queryProducts().find();

       console.log(res)
       console.log('idegas')
     };

     getProducts();
   }, [wixClient]);
  */

  // TEST (FETCHING ON THE SERVER COMPONENT)

  

  return (
    <div className="">
        <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Proizvodi</h1>
        <Suspense fallback={"loading"}>
        <ProductList categoryId={process.env.FEATURED!} limit={4} searchParams={""}/>
  
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl ">Kategorije</h1>
        <Suspense fallback={"loading"}>
        <CategoryList/>
        </Suspense>

      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Novi Proizvodi</h1>
       
      </div>
    </div>
    
  )
}

export default HomePage