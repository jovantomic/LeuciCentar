<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8572c7e2c7cd86418afae149b8790bb000734ffd
import Add from "@/components/Add"
import ProductImages from "@/components/ProductImages"

const SinglePage = () => {
    return (
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        {/*IMG*/}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages/>
        </div>
        {/*TEXT*/}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Ime Proizvoda</h1>
        <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Culpa officia ut tempora neque dolorem earum aspernatur, 
          voluptate harum, quaerat placeat necessitatibus labore fugiat! 
          Laudantium, totam molestias ipsa sequi perspiciatis repellendus.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
            <h3 className="text-2xl text-gray-500 line-through">
              45.000 din
            </h3>
            <h2 className="font-medium text-3xl">
              38.000 din
            </h2>
          </div>
          <div className="h-[2px] bg-gray-100" />
          <Add/>

            <div className="h-[2px] bg-gray-100" />
            <div className="text-sm">
            <h4 className="font-medium mb-4">Opis</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Similique aut amet ipsam accusantium cumque quia hic sequi 
              ipsum inventore, ex quod nihil, animi recusandae beatae cum, 
              esse sed excepturi possimus.
            </p>
            </div>
            <div className="text-sm">
            <h4 className="font-medium mb-4">Opis</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Similique aut amet ipsam accusantium cumque quia hic sequi 
              ipsum inventore, ex quod nihil, animi recusandae beatae cum, 
              esse sed excepturi possimus.
            </p>
            </div>
            <div className="text-sm">
            <h4 className="font-medium mb-4">Opis</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Similique aut amet ipsam accusantium cumque quia hic sequi 
              ipsum inventore, ex quod nihil, animi recusandae beatae cum, 
              esse sed excepturi possimus.
            </p>
            </div>  


        </div>
  
      

      </div>
<<<<<<< HEAD
=======
=======
const SinglePage = () => {
    return (
      <div className=''>SinglePage</div>
>>>>>>> 66fed6cc6d5af5f224e2810a5807de684ba79901
>>>>>>> 8572c7e2c7cd86418afae149b8790bb000734ffd
    )
  }
  
  export default SinglePage