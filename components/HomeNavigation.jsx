'use client';

import React from "react";
import Link from "next/link";
import Logo from "@components/image/logo";
import NotificationFrame from "../public/images/notificationframe.svg"
import profilePic from "../public/images/profilepic.svg"
import ChevronDown from "../public/images/chevrondown.svg"
import Image from "next/image";

function HomeNavigation() {
  //   navigation for dashboard component.
  //   This will be used across the dashboard, events and reviews pages
  return (
      <div className={"py-6 px-[100px] flex justify-between items-center"}>
          <div>
              <Link href={"/dashboard"}>
                  <Logo/>
              </Link>
          </div>
          <div className={"flex gap-4"}>
              <div>
                  <Image src={NotificationFrame} alt={""} />
              </div>
              <div className={"flex items-center"}>
                  <div className={"mr-8"}><Image src={profilePic} alt={""} /></div>
                  <div className={"mr-6"}>
                      <div>Arfi Ganteng</div>
                      <div>arfi.ganteng@mail.com</div>
                  </div>
                  <div>
                      <Image src={ChevronDown} alt={""} />
                  </div>
              </div>
          </div>

      </div>
  );
}

export default HomeNavigation;
