import React, { useState, useEffect } from "react";
import Logo from "@/assets/Logo.png";
import ActionButton from "@/utils/ActionButton";
import CustomLink from "./Link";
import { type SectionId, navLinks } from "@/types/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(
    navLinks[0]?.id || null
  );
  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediaScrin = useMediaQuery("(min-width: 1120px)");
  const navbarBg = isTopPage ? "" : "bg-red-200 drop-shadow";

  useEffect(() => {
    const handleScroll = () => {
      setIsTopPage(window.scrollY === 0);
      navLinks.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (
            window.scrollY >= offsetTop - 100 &&
            window.scrollY < offsetBottom - 100
          ) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (sectionId: SectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className="relative bg-primary-300 h-[88px]">
      <div
        className={`${navbarBg} ${
          isTopPage ? "py-6" : "py-4"
        } animate fixed top-0 z-30 w-full py-6`}
      >
        <div className="mx-auto w-5/6 flex items-center justify-between">
          <img src={Logo} alt="Logo" className="flex-shrink-0" />

          {isAboveMediaScrin ? (
            <div className="flex items-center gap-12">
              <div className="flex gap-8 text-sm">
                {navLinks.map(({ id, label }) => (
                  <CustomLink
                    key={id}
                    section={id}
                    onClick={handleSetActive}
                    activeSection={activeSection}
                  >
                    {label}
                  </CustomLink>
                ))}
              </div>
              <div className="flex gap-4 ml-8">
                <button className="rounded-md bg-orange-500 px-10 py-2 cursor-pointer hover:bg-yellow-500 hover:text-white transition-all">
                  Sign in
                </button>
                <ActionButton to="contactus" variant="link">
                  Become a Member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button className="rounded-full bg-yellow-400 p-2 transition-all ml-auto">
              <Bars3Icon
                className="h-6 w-6 text-white"
                onClick={() => setIsMenuToggled((prev) => !prev)}
              />
            </button>
          )}

          {/* Mobile menu */}
          {!isAboveMediaScrin && isMenuToggled && (
            <div className="fixed top-0 h-screen right-0 z-40 w-[250px] bg-red-200 drop-shadow-xl animation">
              <div className="flex justify-end p-6">
                <button onClick={() => setIsMenuToggled(false)}>
                  <XMarkIcon className="h-7 w-7 text-gray-600" />
                </button>
              </div>
              <div className="ml-[10%] flex flex-col gap-10 text-xl">
                {navLinks.map(({ id, label }) => (
                  <CustomLink
                    key={id}
                    section={id}
                    onClick={(sectionId) => {
                      setActiveSection(sectionId);
                      setIsMenuToggled(false);
                    }}
                    activeSection={activeSection}
                  >
                    {label}
                  </CustomLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
