export default function Description() {
    return (
        <div className="flex justify-center items-center h-screen bg-stone-950 text-white">
          <div className="grid grid-cols-2 gap-8 items-center max-w-5xl">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#024945] to-[#12a89c] bg-clip-text text-transparent ">Landry Dupont</span>
              </h1>
              <h2 className="text-2xl font-semibold">DÉVELOPPEUR FULLSTACK</h2>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition"
                >
                  Mail
                </a>
              </div>
            </div>
    
            <div className="relative flex justify-center items-center">
              <div className="rounded-xl overflow-hidden bg-gradient-to-r from-[#024945] to-[#12a89c]  w-48 h-48 flex items-center justify-center">
                <img
                  src="photo-Landry.jpg" 
                  alt="Landry Dupont"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
                aria-label="Edit Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487c.637-.637 1.67-.637 2.308 0l1.343 1.343c.637.637.637 1.67 0 2.308l-9.737 9.737a4.5 4.5 0 01-1.591 1.04l-3.137 1.115c-.698.248-1.347-.402-1.1-1.1l1.114-3.137a4.5 4.5 0 011.04-1.592l9.738-9.737z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 7.5L16.5 4.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
}
