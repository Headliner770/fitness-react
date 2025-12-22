import React, { useState, useEffect } from "react";
import Logo from "@/assets/Logo.png";
import ActionButton from "@/utils/ActionButton";
import CustomLink from "./Link";
import { type SectionId, navLinks } from "@/types/type";
// import { label } from "framer-motion/client";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(
    navLinks[0]?.id || null
  );

  const handleSetActive = (sectionId: SectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className="relative h=[88px]">
      <div className="fixed top-0 z-30 w-full">
        <div className="mx-auto w-5/6 flex-between">
          <div className="flex-between gap-20 w-full">
            <img src={Logo} alt="Logo" />
            <div className="flex-between w-full">
              <div className="flex-between gap-8 text-sm">
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
              <div className="flex-between gap-8">
                <button className="rounded-md bg-orange-500 px-10 py-2 cursor-pointer hover:bg-yellow-500 hover:text-white animate">
                  Sign in
                </button>
                <ActionButton to="contactus" variant="link">
                  Become a Member
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
