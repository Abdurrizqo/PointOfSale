import { FaShoppingCart } from "react-icons/fa";

function CardMenuComponent() {
  return (
    <div className="w-full">
      <div
        className="w-full h-52 bg-center bg-cover"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1581184953963-d15972933db1?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      ></div>

      <div className="py-1 px-2">
        <h1 className="font-semibold text-lg">Nasi Goreng</h1>
        <div className="flex justify-between items-center mt-1">
          <p className="">Rp 20.000</p>
          <button className="flex justify-between items-center gap-2 bg-black rounded-full text-white px-3 py-[1px] font-semibold">
            <FaShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardMenuComponent;
