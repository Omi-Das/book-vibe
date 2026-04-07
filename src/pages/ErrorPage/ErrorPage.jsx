import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            
            <div className="text-center px-6">
                
                {/* 404 Text */}
                <h1 className="text-8xl font-extrabold text-red-500 drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-semibold mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-300 mt-3 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4 justify-center">
                    
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                    >
                        Go Back
                    </button>

                    <Link
                        href="/"
                        className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
                    >
                        Go Home
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default ErrorPage;