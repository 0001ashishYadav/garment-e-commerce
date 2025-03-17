import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const sliderRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(3);

  // Sample card data
  const cards = [
    {
      id: 1,
      title: "Mountain Retreat",
      description: "Peaceful getaway in the mountains with stunning views.",
      image:
        "https://powertraveller.com/wp-content/uploads/2024/11/quiet-mind-mountain-lodge-retreat-spa.jpg",
      tag: "Nature",
    },
    {
      id: 2,
      title: "Beach Paradise",
      description: "Relax on white sand beaches with crystal clear water.",
      image:
        "https://www.shutterstock.com/image-photo/beautiful-panoramic-sea-sand-sky-600nw-2466899247.jpg",
      tag: "Travel",
    },
    {
      id: 3,
      title: "Urban Adventure",
      description: "Explore the city with its vibrant culture and nightlife.",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e2f6ea1933e5e7423db8fc0/1620638495437-5PYCM9BR12QCYNRJEUUU/Fogcutter-Small-Group-Open-Air-Tours-San-Francisco-City-Tour-Urban-Adventure-Alcatraz-Tickets.png",
      tag: "City",
    },
    {
      id: 4,
      title: "Forest Camping",
      description: "Connect with nature in the heart of ancient forests.",
      image:
        "https://snowlakekampground.com/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Choosing-the-Best-Tent-for-Family-Camping.jpg",
      tag: "Adventure",
    },
    {
      id: 5,
      title: "Desert Safari",
      description: "Experience the beauty of sand dunes and starry skies.",
      image:
        "https://sharjahdesertsafaris.com/wp-content/uploads/2023/03/things-to-do-sharjah-desert.webp",
      tag: "Expedition",
    },
    {
      id: 6,
      title: "Island Hopping",
      description: "Discover hidden gems across multiple tropical islands.",
      image:
        "https://www.geotraveltour.com/wp-content/uploads/2021/08/hopping4.jpg",
      tag: "Exploration",
    },
  ];

  // Determine number of visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = cards.length - visibleCards;

  const prev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Featured Destinations
      </h2>

      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all ${
            currentIndex >= maxIndex
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
        >
          <ChevronRight size={24} />
        </button>

        {/* Card container */}
        <div
          ref={sliderRef}
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 px-2 transition-all duration-300"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {card.tag}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
