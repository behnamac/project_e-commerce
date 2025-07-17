import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	children,
	className = '',
	...props
}) => {
	const baseClasses =
		'inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

	const variants = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700',
		secondary: 'bg-gray-600 text-white hover:bg-gray-700',
		outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
		ghost: 'text-gray-600 hover:bg-gray-100',
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2',
		lg: 'px-6 py-3 text-lg',
	};

	const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
};

export default Button;
