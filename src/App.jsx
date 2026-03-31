
import './App.css'

function App() {
  

  return (
    <body>
      <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products1</a></li>
      <li><a>Feature</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a>cart logo</a>
    <button className="btn btn-active btn-secondary">Secondary</button>
  </div>
</div>


<div>
  <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Supercharge Your<br/>Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity<br/>
software—all in one place. Start creating faster today.<br/>

Explore Products

      </p>
      <div>
        <button className="btn btn-primary mx-4">Explore Products</button>
        <button className="btn btn-primary">Watch Demo</button>
      </div>
      
    </div>
  </div>
</div>
</div>

<div>
  <div className="w-full bg-gradient-to-r from-blue-800 to-purple-600 py-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-white text-center">
        
        {/* Item 1 */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">50K+</h2>
          <p className="text-sm opacity-80 mt-1">Active Users</p>
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-white/30"></div>

        {/* Item 2 */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">200+</h2>
          <p className="text-sm opacity-80 mt-1">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-white/30"></div>

        {/* Item 3 */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">4.9</h2>
          <p className="text-sm opacity-80 mt-1">Rating</p>
        </div>

      </div>
    </div>
</div>

<div>
  <div className="hero bg-base-200 h-100">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
      <p className="py-6">
        Choose from our curated collection of premium digital products designed<br/>to boost your productivity and creativity.
      </p>
      <button className="btn btn-primary mx-4">Products</button>
      <button className="btn btn-primary">Cart</button>
    </div>
  </div>
</div>
</div>
    </body>

    

    



  )
}

export default App;
