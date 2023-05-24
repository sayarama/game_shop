import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiFillWallet, AiFillHeart, AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import Card from "./Card/Card";
import Slider from "./Slider/Slider";

export default function Home() {
  const images = `<img src="https://raw.githubusercontent.com/ulrmdhn/game_shop/master/src/img/akai.png"/>`
  return (
    <>
      <div className="w-screen bg-slate-100  ">
        <nav className=" w-full p-5 shadow-xl bg-slate-100">
          <div className="text-black m-auto w-3/4 items-center flex justify-between">
            <div>Anu Gaming Store</div>
            <div>
              <ul className="flex gap-5 items-center">
                <li className="hover:bg-slate-400 p-2">Home</li>
                <li className="hover:bg-slate-400 p-2">Cara Pesan</li>
                <li className="hover:bg-slate-400 p-2">Product</li>
                <li className="hover:bg-slate-400 p-2">Testimoni</li>
                <li className="hover:bg-slate-400 p-2">Contact</li>
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
              <button className="p-3 border-blue-700 text-blue-700 flex items-center gap-3 font-bold border-4 rounded-lg ">
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

        <div className="w-full bg-indigo-100/75  p-10">
          <h1 className="text-center text-black text-4xl font-bold">Lihat Produk Kami</h1>
          <div className="flex gap-4 items-center justify-center mt-10">
            <p className="bg-gray-500 p-2 rounded-xl hover:bg-gray-600">Mobile Games</p>
            <p className="bg-gray-500 p-2 rounded-xl hover:bg-gray-600">PC Games</p>
            <p className="bg-gray-500 p-2 rounded-xl hover:bg-gray-600">PlayStation</p>
            <p className="bg-gray-500 p-2 rounded-xl hover:bg-gray-600">Nintendo</p>
            <p className="bg-gray-500 p-2 rounded-xl hover:bg-gray-600">Popular</p>
            <p className="bg-gray-500 p-2 rounded-xl hover:bg-gray-600">Promo</p>
          </div>
          <div className=" w-fit m-auto">
          <div className="flex justify-center items-center gap-10 mt-10  ">
            <Card  images="https://raw.githubusercontent.com/ulrmdhn/game_shop/master/src/img/akai.png" title={'Mobile Legends'}/>
            <Card  images="https://raw.githubusercontent.com/ulrmdhn/game_shop/master/src/img/pubg.png" title={'PUBG'}/>
            <Card  images="https://raw.githubusercontent.com/ulrmdhn/game_shop/master/src/img/omen.webp" title={'Valorant'}/>
            <Card  images="https://raw.githubusercontent.com/ulrmdhn/game_shop/master/src/img/shogun.webp" title={'Genshin Impact'}/>
            
          </div>
          <div className="flex justify-end text-black gap-7 mt-10">
            <div className="flex shadow-xl  items-center bg-white p-2 rounded-lg">
              <input className="w-full outline-none" type="text"/>
              <AiOutlineSearch/>
            </div>
            <div className="flex shadow-xl items-center gap-4 p-3 bg-white rounded-lg">
              <p>Next</p>
              <AiOutlineArrowRight/>
            </div>
          </div>
          </div>
        </div>

        <div className="w-full p-6 text-center ">
          <h1 className="text-black font-bold text-5xl mb-11">Testimonial</h1>
          <div>
          <Slider/>
          </div>
        </div>
      </div>
    </>
  );
}
