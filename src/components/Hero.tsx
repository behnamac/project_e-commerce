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

	const handlePrevSlide = () => {
		setCurrentSlide(
			(prevSlide) =>
				(prevSlide - 1 + slidesImages.length) % slidesImages.length,
		);
	};

	useEffect(() => {
		const timer = setInterval(() => {
			handleNextSlide();
		}, 6000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="hero bg-base-200 min-h-[70vh]">
			<div className="hero-content text-neutral-content relative w-full text-center">
				<div className="carousel h-[70vh] w-full">
					{slidesImages.map((image, index) => (
						<div
							key={index}
							id={`slide-${index}`}
							className={`carousel-item relative h-full w-full ${
								index === currentSlide ? 'block' : 'hidden'
							}`}
						>
							<img
								src={image}
								alt={`hero ${index + 1}`}
								className="h-full w-full object-cover"
							/>
							<div className="bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black">
								<div className="text-center">
									<h1 className="mb-4 text-5xl font-bold text-white">
										Welcome to BENSTORE
									</h1>
									<p className="mb-8 text-xl text-white/90">
										Discover premium bags and accessories
										for every lifestyle
									</p>
									<button className="btn btn-primary btn-lg">
										Shop Now
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Buttons */}
				<button
					onClick={handlePrevSlide}
					className="btn btn-circle bg-base-100/20 hover:bg-base-100/40 absolute top-1/2 left-4 -translate-y-1/2 border-none text-white"
				>
					❮
				</button>
				<button
					onClick={handleNextSlide}
					className="btn btn-circle bg-base-100/20 hover:bg-base-100/40 absolute top-1/2 right-4 -translate-y-1/2 border-none text-white"
				>
					❯
				</button>

				{/* Dots Indicator */}
				<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
					{slidesImages.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`h-3 w-3 rounded-full transition-all ${
								index === currentSlide
									? 'bg-primary'
									: 'bg-white/50 hover:bg-white/75'
							}`}
						></button>
					))}
				</div>
			</div>
		</div>
	);
}

export default Hero;
