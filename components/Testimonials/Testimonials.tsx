// Testimonials.js
'use client'
import { useState } from 'react';
import Slider from 'react-slick';
import {TestimonialItem} from './TestimonialItem';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import team1 from '@/public/images/team1.png'
import team2 from '@/public/images/team2.png'
import team3 from '@/public/images/team3.png'
import team4 from '@/public/images/team1.png'
import team5 from '@/public/images/team2.png'


export const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [testimonialsData] = useState([
        {
            text: 'Joining Golden Generation has been a life-changing experience for me. The community service projects not only help those in need but also bring together people from all walks of life. It\'s a true embodiment of unity and compassion.',
            name: 'Abdrahman Oladimeji',
            image: team1
        },
        {
            text: 'The environmental clean-up initiative by Golden Generation was not just about cleaning; it was a learning journey for me. Understanding our impact on the environment and what we can do to preserve it was eye-opening.',
            name: 'AbdulMalik Olaniyan',
            image: team2
        },
        {
            text: 'Golden Generation\'s literacy program for secondary school students is remarkable. Seeing the joy in the students\' eyes as they learn is priceless. Proud to be part of the noble cause!',
            name: 'Adebayo Faruq',
            image: team3
        },
        {
            text: 'As a volunteer at Golden Generation, I have developed invaluable leadership and organizational skills. Their focus on personal growth while serving the community is what sets them apart.',
            name: 'Ruqoyah Babalola',
            image: team4
        },
        {
            text: 'Golden Generation\'s commitment to sustainable community development is inspiring. Their projects not only address immediate needs but also aim to empower communities for the long term.',
            name: 'Jokanola Yusuf',
            image: team5
        },
    ]);
    

    // Settings for the slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        centerMode: true,
        focusOnSelect: true,
        beforeChange: (_:number, next:number) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 889,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
        ]
    };

    return (
        <div className="testimonial-carousel block max-w-[1200px] mx-auto pb-12 md:pb-40 overflow-x-hidden h-full">
            <div className="mx-auto w-16 h-1 bg-secondary mb-5"></div>
            <div className='mb-10 flex flex-col justify-center'>
                <h1 className="text-center mx-4 text-2xl sm:text-3xl font-semibold font-Roboto text-dark">
                    What our beneficiaries are saying
                </h1>
                <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="115" height="13" viewBox="0 0 115 13" fill="none">
                    <path d="M2 11C38.8053 6.9079 112.533 -0.45788 113 2.8158" stroke="#3498DB" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </div>
            
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="p-2">
                        <TestimonialItem
                            testimonial={testimonial.text}
                            name={testimonial.name}
                            isActive={index === currentSlide} 
                            image={testimonial.image}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


