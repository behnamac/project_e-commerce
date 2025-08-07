interface PlaceholderImageProps {
	width?: number;
	height?: number;
	className?: string;
	alt?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
	width = 400,
	height = 400,
	className = '',
	alt = 'Placeholder',
}) => {
	return (
		<div
			className={`bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 ${className}`}
			style={{ width: `${width}px`, height: `${height}px` }}
		>
			<div className="flex h-full w-full items-center justify-center">
				<span className="text-gray-500 dark:text-gray-400">{alt}</span>
			</div>
		</div>
	);
};

export default PlaceholderImage;
