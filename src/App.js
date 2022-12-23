import './about.jsx';
import IconHome from "./assets/home.jpg";






function App() {
  const menus = ["Home", "Login", "Register", "Services"];
  return (
    <div>
      <div className="h-[20px] w-full"><img src={IconHome} alt="home"></img>

      <header className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10 ">
    <div className="container">
        <div className="flex items-center justify-between relative">
            <div className="px-4">
                <a href="#home" className="font-bold text-4xl lg:text-4xl text-dark block py-6">Creative</a>   
                <h1><span class="block font-semibold text-dark text-3xl lg:text-6xl lg:text-center">#Bikin Nyata Ide Kreatif Yang kalian Impikan</span></h1>           
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
                            <a href="about.jsx" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">About Us</a>
                        </li>
                        <li className="group">
                            <a href="login.html" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Login</a>
                        </li>
                        <li className="group">
                            <a href="signup.html" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Sign Up</a>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </div>
    </div>
    
    </header>
</div>
</div>

    
  );
}

export default App;
