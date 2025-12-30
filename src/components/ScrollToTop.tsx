import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="cursor-pointer fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary-500 text-white shadow-md hover:bg-primary-700 animate"
        aria-label="scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
