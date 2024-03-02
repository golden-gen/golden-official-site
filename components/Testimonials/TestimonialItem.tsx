import Image, { StaticImageData } from "next/image";

// TestimonialItem.tsx
interface ITestimonialItemProps {
    testimonial: string;
    name: string;
    isActive: boolean;
    image: StaticImageData;
}
export const TestimonialItem = ({ testimonial, name, isActive, image }:ITestimonialItemProps) => {
    const activeClass = "scale-100 bg-primary text-white h-[400px]";
    const normalClass = "scale-90 bg-white h-[380px]";

    return (
        <div className={`p-10 cursor-grab transition-transform duration-300 shadow-lg rounded-lg overflow-hidden mb-4 border ${isActive ? activeClass : normalClass}`}>
            <div className="flex mb-5">
                <div>
                    <Image src={image} alt={name} />
                </div>
                <p className={`${isActive? 'text-white' : 'text-gray-800'} text-sm font-semibold my-auto ml-3`}> {name}</p>
            </div>
            <p className={`${isActive? 'text-white line-clamp-10 md:line-clamp-12': 'text-gray-600 line-clamp-8 md:line-clamp-10'}`}>{testimonial}</p>
        </div>
    );
};
