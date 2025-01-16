// resources/js/Pages/About.tsx
import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

const About: React.FC = () => {
    return (
        <div>
            <Navbar />

            <main className='flex-1 mt-14 h-screen'>    
                <div className='w-[800px] mx-auto'>
                    <h1 className='text-4xl font-semibold text-black'>About Us</h1>
                    <p className=''>
                        At Movie Review, we are dedicated to creating a space where movie enthusiasts can share their personal experiences and honest reviews about the movies they've watched. Whether you're looking for recommendations or want to discover your next favorite film, our platform makes it easier than ever to find movies that match your interests. Join our community and become part of a vibrant network of movie lovers!
                    </p>
                    <div className='w-[50%] mt-5'>
                        <h1 className='text-2xl font-semibold'>
                        Interact
                        </h1>
                        <p>Review your favorite movies and find your movies to your liking.</p>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
        
    );
};

export default About;
