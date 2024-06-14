import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image"

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-blue-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            2 Godine garancije i 20% popusta na
            <br /> 
            <div className="flex gap-4"> sve  <div className="text-4xl font-semibold leading-[48px] text-blue-600"> Led Proizvode</div> </div>
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
          Kupi odmah!
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/zena.png" alt="" fill className="object-contain" />
        </div>
      </div>
     {/* Filteri */}
     <Filter/>
     {/* Proizvodi Lista */}
     <h1 className="mt-12 text-xl font-semibold">Kategorija</h1>
     <ProductList/>
    </div>
  );
  }
  
  export default ListPage