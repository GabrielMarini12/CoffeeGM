import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ArrowUp() {
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  window.addEventListener("scroll", getPageYAfterScroll);

  function pageUp() {
    window.scroll(0, 0);
  }

  return (
    <>
      {pageYPosition > 900 && (
        <div className="fixed bottom-5 right-3 bg-green-950 p-2 rounded-lg text-white cursor-pointer">
          <FaArrowUp size={18} onClick={pageUp} />
        </div>
      )}
    </>
  );
}
