import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu , AiFillCloseSquare } from 'react-icons/ai';

const Navbar = ()=>{
    const [open,setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
      
      
  return(
   <nav className="text-black bg-yellow-200 p-6">
    <div className=" md:hidden" onClick={()=> setOpen(!open)}>
        {
            open == true ? 
            <AiFillCloseSquare className="text-2xl"></AiFillCloseSquare>
            :
            <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
        }
    </div>
    
     <ul className={`md:flex absolute duration-2000 md:static
     ${open ? 'top-16' :"-top-60"}
     bg-yellow-200 px-6`}>
     {
        routes.map(route => 
            <Link key={route.id} route={route}>
                
            </Link>
            )
     }
     </ul>
   </nav>
  )
}
export default Navbar;