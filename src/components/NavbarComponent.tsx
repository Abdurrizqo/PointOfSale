import { FaCaretDown } from "react-icons/fa6";
import { motion } from "framer-motion";

function NavbarComponent() {
  return (
    <>
      <nav className="h-20 w-full bg-black px-10 font-poppins flex justify-center items-center fixed z-10">
        <div className="flex-1">
          <form>
            <input
              type="text"
              className="px-4 py-1 bg-slate-100 outline-none w-1/3 rounded-full"
              placeholder="cari menu"
            />
          </form>
        </div>

        <div className="flex justify-center gap-4 items-center text-white">
          <div
            className="rounded-full bg-gray-400 h-10 w-10 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1564289626773-0d4085846f7b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          ></div>

          <motion.button whileTap={{ scale: 0.8 }} className="flex gap-3 items-center">
            <p>Hai, Arra</p>
            <FaCaretDown />
          </motion.button>
        </div>
      </nav>
      <div className="h-20 w-full"></div>
    </>
  );
}

export default NavbarComponent;
