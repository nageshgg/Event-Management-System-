"use client";

import React, { useState } from "react";
import IconLogo from "@components/icon/IconLogo";
import Logo from "@components/image/logo";
import Link from "next/link";
import Button from "@components/button/Button";
import menuImage from "../public/images/menuImage.svg";
import Image from "next/image";

function Navigation() {
  const [toggleState, setToggleState] = useState(false);

  return (
    <div
      className={
        "py-6 flex justify-between items-center sticky top-0 bg-[#F8F8F8]"
      }
      id="navigation"
    >
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className={" gap-12 hidden md:flex"}>
        <Link href={"/#home"}>Home</Link>
        <Link href={"/#works"}>Events</Link>
        <Link href={"/#about"}>About</Link>
        <Link href={"/#contact"}>Contact</Link>
      </div>
      <div className={"gap-3 hidden md:flex"}>
        <Link href={"/signup"}>
          <Button
            text={"Create Account"}
            style={
              "text-sm text-[#6A5BC1] border border-[#6A5BC1] rounded-full py-2 px-3 hover:bg-[#6A5BC1] hover:text-white font-medium cursor-pointer"
            }
          />
        </Link>

        <Link href={"/login"}>
          <Button
            text={"Sign In"}
            style={
              "text-sm text-[#6A5BC1] border border-[#6A5BC1] rounded-full py-2 px-3 hover:bg-[#6A5BC1] hover:text-white font-medium cursor-pointer"
            }
          />
        </Link>
      </div>

      <div className={"md:hidden"}>
        <div className="relative ml-3">
          <div>
            <button
              type="button"
              onClick={() => setToggleState(!toggleState)}
              className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <Image className="h-8 w-8 rounded-full" src={menuImage} alt="" />
            </button>
          </div>

          {toggleState ? (
            <div
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
            >
              <Link
                className={"block py-2 px-3 hover:bg-gray-100"}
                href={"/#home"}
              >
                Home
              </Link>
              <Link
                className={"block py-2 px-3 hover:bg-gray-100"}
                href={"/#works"}
              >
                Events
              </Link>
              <Link
                className={"block py-2 px-3 hover:bg-gray-100"}
                href={"/#about"}
              >
                About
              </Link>
              <Link
                className={"block py-2 px-3 hover:bg-gray-100"}
                href={"/#contact"}
              >
                Contact
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
