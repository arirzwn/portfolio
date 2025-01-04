import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export function NavigasiBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mx-5">
        <div className=" pt-4 flex items-center justify-between">
          <a href="#" className="font-semibold">
            Ari Rizwan
          </a>

          <button
            onClick={handleToggle}
            aria-label="Toggle menu"
            className="font-bold"
          >
            {isOpen ? (
              <IoClose className="font-bold text-xl" />
            ) : (
              <RxHamburgerMenu />
            )}
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {isOpen ? (
            <div className="flex flex-col text-sm gap-y-2">
              <ul className="flex flex-col gap-y-2">
                <li>Home</li>
                <li>Article</li>
              </ul>
              <a href="#">Github</a>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
