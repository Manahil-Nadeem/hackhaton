

const Product = () => {
    return (
  
      <div className="mt-1">
          <img
            src="/Sofa.png" // Path to the sofa image
            alt="Sofa"
            className="h-100 w-100 object-contain float-right"
          />
  
  <div className="w-full md:w-full  px-4 ">
      <div className=" mt-1 bg-gray-100 py-150 " >
        {/* Heading */}
        <h1>All Products</h1>
        <button className="mt-9 bg-green-500 text-white px-6 py-3 rounded">Shop Now</button>
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
    <img
            src="/H.35.png" 
            alt="feature product"
            className="h-100 w-auto object-contain inline-block"
          />
  
  <div className="mt-6 text-center">
    <h1 className="text-[40px] text-Black-800 font-size50px font-bold text-lef">Our Products</h1>
    <img
            src="/H.46.png" 
            alt="feature product"
            className="h-100 w-auto object-contain inline-block"
          />
      </div>
  
      </div>
    </div>
  </div>
  </div>
   </div>   
    );
  };
  
  export default Product;
  
  