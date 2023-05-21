import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiFillWallet, AiFillHeart } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import Card from "./Card/Card";

export default function Home() {
  return (
    <>
      <div className="w-screen bg-slate-100 ">
        <nav className=" w-full p-5 shadow-xl bg-slate-100">
          <div className="text-black m-auto w-3/4 items-center flex justify-between">
            <div>Anu Gaming Store</div>
            <div>
              <ul className="flex gap-5 items-center">
                <li>Home</li>
                <li>Cara Pesan</li>
                <li>Product</li>
                <li>Testimoni</li>
                <li>Contact</li>
                <button className="bg-blue-700 px-6 text-white font-bold py-2 rounded-lg">
                  Login
                </button>
              </ul>
            </div>
          </div>
        </nav>

        <section className="flex w-9/12 m-auto items-center justify-center">
          <div className="w-5/6">
            <h1 className="text-7xl font-bold mb-4 text-purple-600 w-3/4">
              Top up game murah dan terpecaya
            </h1>
            <p className="text-xl text-black mb-4 w-80">
              AnuGameStore - Pit Stop To Upgrade Your Game Accounts
            </p>
            <section className="flex gap-8">
              <button className="bg-blue-700 text-white font-bold px-7 py-3 rounded-lg shadow-2xl shadow-blue-700/50">
                Daftar
              </button>
              <button className="px-5 py-3 border-blue-700 text-blue-700 font-bold border-4 rounded-lg ">
                Lihat Produk <IoIosArrowDroprightCircle />
              </button>
            </section>
          </div>
          <div>
            <img
              className="w-72"
              src="https://raw.githubusercontent.com/ulrmdhn/game_shop/master/src/img/diluc.png"
            />
          </div>
        </section>
        <div className="w-full h-80 p-5">
          <section className="bg-blue-700 rounded-xl w-full h-full flex items-center justify-around shadow-xl">
            <div>
              <AiFillWallet className="text-7xl" />
              <h3 className="text-5xl font-bold mt-2">Multi Payment</h3>
              <p className="w-72 tracking-wide mt-2">
                Kita Menerima segala jenis pembayaran digital yang memudahkan
                kamu dalam pembelian
              </p>
            </div>
            <div>
              <BsCartFill className="text-7xl" />
              <h3 className="text-5xl font-bold mt-2">Easy Checkout</h3>
              <p className="w-72 tracking-wide mt-2">
                Sistem Check out yang mudah karena langsung terhubung dengan
                WhatsApp
              </p>
            </div>
            <div>
              <AiFillHeart className="text-7xl" />
              <h3 className="text-5xl font-bold mt-2">Cheap Price</h3>
              <p className="w-72 tracking-wide mt-2">
                Kami menawarkan harga yang lebih murah namun juga lebih aman
              </p>
            </div>
          </section>
        </div>

        <div className="w-full h-screen bg-red-500 p-5">
          <h1 className="text-center text-4xl font-bold">Lihat Produk Kami</h1>
          <div className="flex gap-4 items-center justify-center mt-7">
            <p className="bg-gray-500 p-2 rounded-xl">Mobile Games</p>
            <p className="bg-gray-500 p-2 rounded-xl">PC Games</p>
            <p className="bg-gray-500 p-2 rounded-xl">PlayStation</p>
            <p className="bg-gray-500 p-2 rounded-xl">Nintendo</p>
            <p className="bg-gray-500 p-2 rounded-xl">Popular</p>
            <p className="bg-gray-500 p-2 rounded-xl">Promo</p>
          </div>
          <div>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
}
