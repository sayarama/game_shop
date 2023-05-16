
export default function Home() {
  return (
    <>
    <div className='w-screen h-screen bg-slate-100'>
      <nav className=' w-full p-5 shadow-xl'>
        <div className='text-black m-auto w-3/4 items-center flex justify-between'>
        <div>Anu Gaming Store</div>
        <div>
          <ul className='flex gap-5 items-center'>
            <li>Home</li>
            <li>Cara Pesan</li>
            <li>Product</li>
            <li>Testimoni</li>
            <li>Contact</li>
            <button className='bg-blue-500 px-6 text-white font-bold py-2 rounded-lg'>Login</button>
          </ul>
        </div>
        </div>
      </nav>

      <section>
        <img src="https://raw.githubusercontent.com/ulrmdhn/game_shop/master/src/img/diluc.png"/>
      </section>
    </div>
    </>
  )
}
