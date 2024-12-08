// components/Navbar.js
const Navbar = () => {
    return (
      <header>
       
        {/* Main Navigation */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            {/* Left Section: Menu Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">Shop</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">Product</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">Pages</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
            </div>
  
            {/* Right Section: Contact & Cart */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-600">Contact: (808) 555-0111</span>

             
              
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Navbar;
  