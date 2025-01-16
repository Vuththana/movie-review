
import Card from '@/Components/Card/Movie/MovieCard';
import Navbar from '@/Components/Navbar/Navbar'
import { Link } from '@inertiajs/inertia-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Hero() {
  const HeroBannerLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrIz4vku26gOYFeMLc-ARfg2TnE6l8-_Bqg&s';
  const [selected, setSelected] = useState<'today' | 'week'>('today');

  return (
    <div className='overflow-hidden'>
      <Navbar />
      
      <main className='flex-1 mt-14 h-screen'>
        <section className='sm:w-full md:w-[600px] lg:w-[1300px] mx-auto'>
        <div
          className="relative w-full h-[500px] flex bg-cover bg-center"
          style={{
            backgroundImage:  `url(${HeroBannerLink})`,
          }}
        >
          <div className='w-[350px] my-auto p-10'>
            <h1 className="p-4 font-semibold sm:text-[60px] md:text-[30px] lg:text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-500 to-blue-600">
              That's a Wrap 2024
            </h1>

            <div className='mt-2'>
              <p className='text-3xl text-white mb-10 font-extralight'>
                The best (and worse) movie in 2024.
              </p>

              <Link 
                href='/about' 
                className='inline-flex justify-center border-2 w-[130px] rounded-full text-md font-semibold text-white gap-2 px-4 py-3 hover:text-white hover:no-underline'>
                  Check it out 
                  <span className="glyphicon glyphicon-arrow-right"></span>
              </Link>

            </div>

          </div>

        </div>
        </section>

        <section className='sm:w-[1300px] mx-auto mt-10'>
          <div className='sm:w-[500px]'>
            <div className='flex gap-4 sm:justify-center sm:items-center'>
              
              <span className='font-semibold sm:text-2xl md:text-5xl lg:text-5xl text-5xl'>
                Trending 
              </span>

              <div className='relative border rounded-full inline-flex justify-center items-center'>

              {/* Background sliding container */}
              <div
                  className={`absolute top-0 left-0 w-1/2 h-full bg-blue-950 rounded-full transition-all duration-300 ${selected === 'today' ? 'translate-x-0' : 'translate-x-full'}`}
              ></div>

                <div 
                className={`hover:cursor-pointer rounded-full z-0 px-5 py-[3px] ${selected === 'today' ? 'bg-green-900 rounded-full transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-green-600' : ''}`}
                onClick={() => setSelected('today')}
                  >
                  <span className='sm:text-2xl px-4 font-semibold'>
                    Today
                  </span>
                </div>


                <div                 
                className={`hover:cursor-pointer rounded-full z-0 px-5 ${selected === 'week' ? 'bg-green-900 rounded-full transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-green-600' : ''}`}
                onClick={() => setSelected('week')}
                  >
                  <span className='sm:text-2xl font-semibold'>
                  This Week
                  </span>
                </div>
              </div>

            </div>
            <div className='flex gap-4 sm:justify-center mt-10'>
              <Card   
              Links={{
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bQoccVWVNzv3-p_uLInNQle8MZFJ8eO6Ag&s',
                url: 'https://example.com/movie-details',
              }}
              title="Movie Title"/>
            </div>
          </div>
        </section>


      </main>
    </div>
  )
}
