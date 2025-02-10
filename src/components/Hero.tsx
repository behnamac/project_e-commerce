import { useEffect, useState } from 'react';
import slide1 from '../assets/images/slider/slide01.jpg';
import slide2 from '../assets/images/slider/slide02.jpg';
import slide3 from '../assets/images/slider/slide03.jpg';
import slide4 from '../assets/images/slider/slide04.jpg';

function Hero() {
	const slidesImages = [slide1, slide2, slide3, slide4];
	const [currentSlide, setCurrentSlide] = useState(0);
	const handleNextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesImages.length);
	};
	useEffect(() => {
		const timer = setInterval(() => {
			handleNextSlide();
		}, 6000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="c-center">
			<div className="c-space relative h-[70vh] overflow-hidden">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{slidesImages.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`hero ${index + 1}`}
							className="h-[70vh] w-full shrink-0 object-cover"
						/>
					))}
				</div>

				<div className="c-center absolute bottom-2 h-5 w-30 gap-2 rounded-xl bg-gray-300">
					{slidesImages.map((_, index) => (
						<button
							key={index}
							className={`h-3 w-3 rounded-full bg-gray-100 shadow-md hover:cursor-pointer ${
								index === currentSlide ? 'bg-gray-500' : ''
							}`}
							onClick={() => setCurrentSlide(index)}
						></button>
					))}
				</div>
			</div>
		</section>
	);
}

export default Hero;
