

const Hero = () => {
  return (

    <div className="mt-1">
        <img
          src="/Sofa.png" // Path to the sofa image
          alt="Sofa"
          className="h-100 w-100 object-contain float-right"
        />

<div className="w-full md:w-full  px-4 ">
    <div className=" mt-1 bg-gray-100 py-200 " >
      {/* Heading */}
      <p className=" spacing 12 mt-3 text-4xl h-100 text-black-600 text-left">
        Welcome to Chairy
      </p>
      <h1 className=" mt-4 text-[50px] text-Black-800 font-size30px font-bold text-left ">
        Best Furniture Collection for <br/>
        your interior.
      </h1>

      <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700 mx-auto sm:mx-0">
      <span>Shop Now</span></button>
      
     </div>

      
     

      {/* Second Image Below Sofa, Right Aligned */}
      <div className="mt-6 text-center ">
        <img
          src="/H.23.png" // Path to the second image
          alt="Table"
          className="h-40 w-auto object-contain inline-block"
        />

<div className="mt-6 text-center">
  <h1 className="text-[40px] text-Black-800 font-size50px font-bold text-lef">Feature Products</h1>
  <img
          src="/H.24.png" 
          alt="feature product"
          className="h-100 w-auto object-contain inline-block"
        />

   
    

<div className="mt-6 text-center">
  <h1 className="text-[40px] text-Black-800 font-size50px font-bold text-lef">Our Products</h1>
  <img
          src="/H.46.png" 
          alt="Our Products"
          className="h-100 w-auto object-contain inline-block"
        />
<div className="mt-6 text-center">
  <h1 className="text-[40px] text-Black-800 font-size50px font-bold text-lef">All Products</h1>
  <img
          src="/69.png" 
          alt="all product"
          className="h-150 w-300 object-contain inline-block"
        />

<div className="mt-6 text-center">
  <img
          src="/89.png" 
          alt="all product"
          className="h-150 w-300 object-contain inline-block"
        />
 <div className="mt-6 text-center">
  <img
          src="/99.png" 
          alt="library stool chair"
          className="h-150 w-300 object-contain inline-block"
        />
 
    </div>
    </div>
</div>
    </div>
  </div>
</div>
</div>
 </div>   
  );
};

export default Hero;

