export default function AnimationsPage() {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Stunning Animations</span>
                    <span className="block text-indigo-600">for Your Next Project</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Explore our collection of beautiful, ready-to-use animations to enhance your web applications.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <a href="/animations/confetti" className="group">
                    <div className="relative rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0 text-3xl">✨</div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                                    Confetti Effects
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Add celebratory confetti animations to your special moments
                                </p>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Placeholder for future animations */}
                <div className="relative rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm opacity-50">
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 text-3xl">🎭</div>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-lg font-medium text-gray-900">
                                Coming Soon
                            </h3>
                            <p className="text-sm text-gray-500">
                                More exciting animations on the way
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}