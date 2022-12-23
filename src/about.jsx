import IconCoffe from "./assets/coffe.jpg"

function App() {
    const menus = ["Home", "Login", "Register", "Services"];
    return (
      <div className="h-[2000px] w-full"><img src={IconCoffe} alt="coffe" class="max-w-full mx-auto"></img>
  
        <header className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
          <div className="flex items-center justify-between relative">
              <div className="px-4">
                  <a href="#home" className="font-bold text-4xl lg:text-4xl text-dark block py-6">Creative</a>                
              </div>
              <div className="flex items-center px-4">
                  <button id="hamburger" nameName="hamburger" type="button" className="block absolute right-4 lg:hidden">
                      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                      <span className="hamburger-line transition duration-300 ease-in-out"></span>
                      <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                  </button>
  
                  <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                      <ul className="block lg:flex">
                          <li className="group">
                              <a href="app.js" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a>
                          </li>
                          <li className="group">
                              <a href="login.html" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Login</a>
                          </li>
                          <li className="group">
                              <a href="signup.html" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Sign Up</a>
                          </li>
                          <li className="group">
                              <a href="about.html" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">About Us</a>
                          </li>
                      </ul>
                  </nav>
      
              </div>
          </div>
      </div>
      </header>
  
      
      <main className="container max-w-5xl mx-auto ">
      <section id="home" className="pt-36 ">
          <div className="container">
              <div className="flex flex-wrap">
                  <div className="w-full  px-4">
                      <h1 className="block text-center font-bold text-dark text-5xl lg:text-center lg:text-7xl m-32">Creative</h1>
  
                      <h2 className="font-medium text-slate-500 text-2xl text-center lg:text-center lg:text-3xl">#Bikin Nyata Ide Kreatif Yang Kalian Impikan</h2>
                     
                  </div>
              
                   
              </div>
          </div>
      </section>
      </main>
  
      </div>
    );
  }
  
  export default App;
  