import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <a
        href="#"
        id="scroll"
        className={`fixed right-2 bottom-5 md:right-10 md:bottom-10 cursor-pointer w-10 h-10  rounded-full flex justify-center items-center text-center shadow-xl animate-bounce bg-dimGrey hover:bg-white text-dimWhite hover:text-dimGrey ${
          isVisible ? "block" : "hidden"
        }`}
        onClick={scrollToTop}
      >
        <FaArrowUp size={20} />
      </a>
    </>
  );
}
export default ScrollToTopButton;
