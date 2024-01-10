import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

function TotalHargaContainer() {
  return (
    <>
      <div className="md:w-[20%] w-[40%] bg-white shadow flex-col fixed right-0 top-0 bottom-0 pt-20">
        <div className="flex-1 px-5 pt-5 h-[54%] overflow-auto mb-5">
          <h1 className="text-2xl font-bold mb-5">Detail Pesanan</h1>

          {/* Loop Mulai Dari Sini */}
          <div className="border-b pb-3 border-gray-400 mb-8">
            <h1 className="text-xl truncate w-full mb-2">
              Nasi Goreng aaaaa aaa aaaa aaaa
            </h1>

            <div className="flex justify-between items-center text-lg">
              <div className="flex gap-4 items-center">
                <FaSquareMinus className="cursor-pointer" />
                <p>3</p>
                <FaSquarePlus className="cursor-pointer" />
              </div>
              <p>Rp 800.00</p>
            </div>
          </div>
          {/* Sampai Sini */}
        </div>

        <div className="border-t border-black h-60 px-5 pt-5">
          <div className="flex justify-between text-lg">
            <p>Total Pesanan</p>
            <p>Rp 3.000.000</p>
          </div>

          <div className="flex justify-between text-lg mt-3">
            <p>Jumlah Bayar</p>
            <form className="w-20">
              <input
                type="text"
                className="w-full outline-none border-b border-gray-800 text-center"
                placeholder="000"
              />
            </form>
          </div>

          <div className="flex justify-between text-lg mb-10 mt-8">
            <p></p>
            <p>Rp 3.000.000</p>
          </div>

          <div className="flex justify-between gap-5">
            <button className="bg-white rounded-full text-black py-1 font-semibold grow text-center border-black border">
              Batal
            </button>
            <button className="bg-black rounded-full text-white  py-1 font-semibold grow text-center border-black border">
              Simpan
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-[20%] w-[40%]"></div>
    </>
  );
}

export default TotalHargaContainer;
