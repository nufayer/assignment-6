
import './App.css'
import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Play from "../src/assets/Play.png"; 



function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);



  // fetch data
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // add to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // remove from cart
  const handleRemove = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };

  // clear cart
  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <div>
      
      <div className="navbar bg-base-100">
        <div className="navbar-start">
  <a className="btn btn-ghost text-3xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
    DigiTools
  </a>
</div>

        <div className="navbar-end gap-4">
          <a
  onClick={() => setView("cart")}
  className="cursor-pointer flex items-center gap-1"
>
  <HiOutlineShoppingCart className="text-2xl" />
  <span>({cart.length})</span>
</a>

          <button>Login</button>

          <button className="w-30 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-800 to-purple-600">
            Get Started
          </button>
        </div>
      </div>

      





      <div className="hero min-h-150">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/3mwwnn3r/banner.png"
            className="max-w-sm rounded-lg"
          />

          <div>
            <div class="inline-flex items-center gap-2 bg-[#EBEFFF] px-4 py-1.5 rounded-full border border-transparent shadow-sm my-5">
  <div class="relative flex h-3 w-3 items-center justify-center">
    <div class="absolute h-full w-full rounded-full bg-[#7C2DFF] opacity-30 animate-pulse"></div>
    <div class="relative h-1.5 w-1.5 rounded-full bg-[#7C2DFF]"></div>
  </div>

  <span class="text-[#7C2DFF] font-medium text-sm">
    New: AI-Powered Tools Available
  </span>
</div>
            <h1 className="text-5xl font-bold">
              Supercharge Your Digital Workflow
            </h1>

            <p className="py-6 ">
              Access premium AI tools, design assets, templates, and productivity<br/>
             software—all in one place. Start creating faster today.<br/>

              Explore Products

            </p>

            <button className="w-40 py-3 rounded-full text-white bg-gradient-to-r from-blue-800 to-purple-600 mx-4">
              Explore Products
            </button>
            <button className="btn btn-outline btn-secondary rounded-4xl"> <img src={Play} alt="demo" className="w-5 h-5" /> Watch Demo</button>
          </div>
        </div>
      </div>






      
      <div className="w-full bg-gradient-to-r from-blue-800 to-purple-600 py-10 text-white text-center">
        <div className="flex justify-around">
          <div>
            <h2 className="text-3xl font-bold">50K+</h2>
            <p>Active Users</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">200+</h2>
            <p>Premium Tools</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">4.9</h2>
            <p>Rating</p>
          </div>
        </div>
      </div>

      



    <div className='my-9'>
      <h2 className="text-4xl font-bold py-5">Premium Digital Tools</h2>
      <p className='text-gray-600'>Choose from our curated collection of premium digital products designed<br/>to boost your productivity and creativity.</p>
    </div>






      <div className="p-6">

        <div className="text-center mb-6">
          <button
            onClick={() => setView("products")}
            className={`mr-3 px-6 py-3 rounded-full text-white ${
              view === "products" ? "bg-gradient-to-r from-blue-700 to-purple-600" : "bg-gray-200 "
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-6 py-3 rounded-full text-white ${
              view === "cart" ? "bg-gradient-to-r from-blue-700 to-purple-600" : "bg-gray-200"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {view === "products" && (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {products.map(product => (
      <div key={product.id} className="rounded-2xl bg-white p-6 shadow-md border">

        
        <div className="w-12 h-12 bg-gray-100 mb-4 flex items-center justify-center rounded-full">
          <img
            src={product.icon}
            alt={product.name}
            className="w-6 h-6 object-contain"
          />
        </div>

        
        <h2 className="text-xl font-semibold mb-2">
          {product.name}
        </h2>

        
        <p className="text-sm text-gray-500 mb-4">
          {product.description}
        </p>

        
        <div className="mb-4">
          <span className="text-2xl font-bold">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">
            /{product.period}
          </span>
        </div>

        <ul className="mb-4">
          {product.features.slice(0, 3).map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        
        <button
          onClick={() => handleAddToCart(product)}
          className="w-full py-2 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-full"
        >
          Add to Cart
        </button>

      </div>
    ))}

  </div>
)}

       {view === "cart" && (
  <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-2xl">

    <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

    {cart.length === 0 ? (
      <p className="text-gray-500 text-center">
        Your cart is empty.
      </p>
    ) : (
      <>
        {/* CART ITEMS */}
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-200 p-4 rounded-xl"
            >
              <div className="flex items-center gap-4">

               
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>

               
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${item.price}
                  </p>
                </div>
              </div>

              
              <button
                onClick={() => handleRemove(item.id)}
                className="text-pink-500 text-sm font-medium"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        
        <div className="flex justify-between mt-6 text-gray-700">
          <span>Total:</span>
          <span className="font-semibold">
            $
            {cart.reduce((total, item) => total + item.price, 0)}
          </span>
        </div>

        
        <button
          onClick={handleCheckout}
          className="w-full mt-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-700 to-purple-600"
        >
          Proceed To Checkout
        </button>
      </>
    )}

  </div>
)}

      </div>




     <div className='py-20'>
       <div className='my-6'>
          <h2 className="text-4xl font-bold py-4">Get Started in 3 Steps</h2>
          <p className='text-gray-600 '>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div>
        <div class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    
    
    <div class="relative bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition">
      
      <div class="absolute top-4 right-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white text-sm font-semibold w-8 h-8 flex items-center justify-center rounded-full">
        01
      </div>

      
      <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
        
        <img src="../src/assets/user.png" class="w-8 h-8" />
      </div>

      <h3 class="text-lg font-semibold text-gray-900 mb-2">Create Account</h3>
      <p class="text-sm text-gray-500 leading-relaxed">
        Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>

    
    <div class="relative bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition">
      <div class="absolute top-4 right-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white text-sm font-semibold w-8 h-8 flex items-center justify-center rounded-full">
        02
      </div>

      <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
        <img src="../src/assets/package.png" class="w-8 h-8" />
      </div>

      <h3 class="text-lg font-semibold text-gray-900 mb-2">Choose Products</h3>
      <p class="text-sm text-gray-500 leading-relaxed">
        Browse our catalog and select the tools that fit your needs.
      </p>
    </div>

    
    <div class="relative bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition">
      <div class="absolute top-4 right-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white text-sm font-semibold w-8 h-8 flex items-center justify-center rounded-full">
        03
      </div>

      <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
       <img src="../src/assets/rocket.png" class="w-8 h-8" />
      </div>

      <h3 class="text-lg font-semibold text-gray-900 mb-2">Start Creating</h3>
      <p class="text-sm text-gray-500 leading-relaxed">
        Download and start using your premium tools immediately.
      </p>
    </div>

  </div>
      </div>
     </div>







      <div className='py-20'>
        <div>
          <h2 className="text-4xl font-bold py-4">Simple, Transparent Pricing</h2>
          <p className='text-gray-600'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>


        <div class="bg-gray-50 py-16 px-4 font-sans">
  <div class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full">
      <h3 class="text-2xl font-bold text-gray-900 flex items-baseline">Starter</h3>
      <p class="text-gray-500 mt-2 flex items-baseline">Perfect for getting started</p>
      <div class="mt-6 flex items-baseline">
        <span class="text-4xl font-bold text-gray-900">$0</span>
        <span class="text-gray-500 ml-1 text-xl">/Month</span>
      </div>
      
      <ul class="mt-8 space-y-4 flex-grow">
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Access to 10 free tools
        </li>
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Basic templates
        </li>
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Community support
        </li>
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          1 project per month
        </li>
      </ul>
      
      <button class="mt-10 w-full bg-gradient-to-r from-blue-700 to-purple-600 text-white font-semibold py-4 rounded-full">
        Get Started Free
      </button>
    </div>

    <div class="relative bg-gradient-to-r from-blue-700 to-purple-600 rounded-2xl shadow-xl p-8 flex flex-col h-[105%]">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-100 text-orange-600 text-sm px-4 py-1 rounded-full border-2 border-white">
        Most Popular
      </div>
      
      <h3 class="text-2xl font-bold text-white flex items-baseline">Pro</h3>
      <p class="text-purple-100 mt-2 flex items-baseline">Best for professionals</p>
      <div class="mt-6 flex items-baseline">
        <span class="text-4xl font-bold text-white">$29</span>
        <span class="text-purple-100 ml-1 text-xl">/Month</span>
      </div>
      
      <ul class="mt-8 space-y-4 flex-grow">
        <li class="flex items-center text-white">
          <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Access to all premium tools
        </li>
        <li class="flex items-center text-white">
          <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Unlimited templates
        </li>
        <li class="flex items-center text-white">
          <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Priority support
        </li>
        <li class="flex items-center text-white">
          <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Unlimited projects
        </li>
        <li class="flex items-center text-white">
          <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Cloud sync
        </li>
        <li class="flex items-center text-white">
          <svg class="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Advanced analytics
        </li>
      </ul>
      
      <button class="mt-10 w-full bg-white text-[#7C2DFF] font-bold py-4 rounded-full">
        Start Pro Trial
      </button>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full">
      <h3 class="text-2xl font-bold text-gray-900 flex items-baseline">Enterprise</h3>
      <p class="text-gray-500 mt-2 flex items-baseline">For teams and businesses</p>
      <div class="mt-6 flex items-baseline">
        <span class="text-4xl font-bold text-gray-900">$99</span>
        <span class="text-gray-500 ml-1 text-xl">/Month</span>
      </div>
      
      <ul class="mt-8 space-y-4 flex-grow">
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Everything in Pro
        </li>
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Team collaboration
        </li>
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Custom integrations
        </li>
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Dedicated support
        </li>
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          SLA guarantee
        </li>
        <li class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Custom branding
        </li>
      </ul>
      
      <button class="mt-10 w-full bg-gradient-to-r from-blue-700 to-purple-600 text-white font-semibold py-4 rounded-full">
        Contact Sales
      </button>
    </div>
    
  </div>
</div>

      </div>


      </div>
    

    
    
  );
}

export default App;