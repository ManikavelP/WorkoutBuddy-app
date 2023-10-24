
import { Link } from "react-router-dom";
import "../assets/index.css"

const Navbar = () =>{
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-300  font-bold text-xl z-10 ">
    <div className="container mx-5 max-w-screen-md  my-6 sm:pl-5 pl-3"> {/* Adjust max-w-screen-md */}
      <Link to='/'>
        <h1 className="text-2xl cursor-pointer">FitTrack Buddy</h1>
      </Link>
    </div>
  </header>
  )
}
export default Navbar;