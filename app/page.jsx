"use client";

import React from "react";
import LandingNavigation from "@components/LandingNavigation";
import Footer from "@components/Footer";
import Image from "next/image";
import headerImage from "/public/images/headerImage.svg";
import spotifyImage from "/public/images/spotifyImage.png";
import tiktokImage from "/public/images/tiktokImage.png";
import bbcImage from "/public/images/bbcImage.png";
import trivagoImage from "/public/images/trivagoImage.png";
import rakutenImage from "/public/images/rakutenImage.png";
import pointerImage from "/public/images/pointerImage.svg";
import device from "/public/images/device.svg";
import database from "/public/images/database.svg";
import goup from "/public/images/go-up.svg";
import receive from "/public/images/receive.svg";
import Button from "@components/button/Button";
import DiscoverSection from "@components/DiscoverSection";
import ValuePropositionCard from "@components/ValuePropositionCard";

function page() {
  const valueProposition = [
    {
      icon: database,
      title: "Unbeatable value",
      description:
        "Flexible and fair pricing helps your event budget go further. There are no contracts or tiers. Just the same great service and support for everyone. Save 73% on your ticketing vs our lead competitor*.",
    },
    {
      icon: receive,
      title: "Easy-to-use",
      description:
        "You’re busy planning your event, so let us make the ticketing easy. Our feature-rich platform is simple, yet powerful, making anything possible. And if you need our help, we’re on hand 24/7.",
    },
    {
      icon: device,
      title: "More than ticketing",
      description:
        "What if the next ticket you sold could have a positive impact on the planet? With Ticket Tailor it can. We’re not climate-experts, or as legendary as Attenborough, but you would be choosing.",
    },
  ];
  return (
    <div className="relative">
      <div className={"px-5 md:px-10 lg:px-20 xl:px-[120px] bg-[#F8F8F8]"}>
        <LandingNavigation />
        <div id={"home"} className={"my-[90px] grid md:grid-cols-2"}>
          <div className={"max-w-[600px]"}>
            <div
              className={
                "text-[32px] md:text-[56px] mb-6 leading-[64px] font-semibold"
              }
            >
              Find your tribe: Connect with people who share your spark.
            </div>
            <div className={"text-base md:text-lg mb-14"}>
              Whatever sparks your curiosity, there's a community waiting to
              welcome you. From quiet book cafes to adventurous hikes, and from
              insightful business talks to creative skill-sharing workshops,
              Ticket hub offers a universe of experiences designed to connect
              you with kindred spirits.
            </div>
            <div>
              <a href={"/signup"}>
                <Button
                  text={"Create an Event"}
                  style={
                    "py-4 px-5 bg-[#6A5BC1] text-white rounded-full font-medium"
                  }
                />
              </a>
            </div>
          </div>
          <div className={"grid justify-center items-center mt-10"}>
            <Image src={headerImage} alt={"header-image"} />
          </div>
        </div>
        <div
          className={
            "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-between gap-x-10 gap-y-5 my-10"
          }
        >
          <Image src={spotifyImage} alt={""} />
          <Image src={tiktokImage} alt={""} />
          <Image src={bbcImage} alt={""} />
          <Image src={trivagoImage} alt={""} />
          <Image src={rakutenImage} alt={""} />
        </div>
        <DiscoverSection />
      </div>
      <div
        id={"about"}
        className={"my-20 px-5 md:px-10 lg:px-20 xl:px-[120px]"}
      >
        <div
          className={
            "flex justify-center text-center text-5xl text-[#171717] mb-14"
          }
        >
          <div className={"max-w-[650px]"}>
            Why 80,000+ event Creators trust Ticket Hub
          </div>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-6"}>
          {valueProposition.map((item) => (
            <ValuePropositionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
      <div
        className={
          "bg-[#6A5BC1] h-[420px] mx-4 rounded-[32px] text-white flex justify-center items-center"
        }
      >
        <div>
          <div
            className={"text-2xl md:text-[48px] font-medium mb-6 text-center"}
          >
            Sign up and get started
          </div>
          <div className={"text-center"}>
            Our ticketing platform is made for you - and loved by everyone.
          </div>
          <div className={"mt-[56px] flex justify-center relative text-white"}>
            <Button
              text={"Create Event"}
              style={"bg-white py-3 px-5 bg-opacity-100 text-black rounded-2xl"}
            />
            <Image
              className={
                "absolute right-5 top-5 text-white fill-inherit h-20 md:h-32"
              }
              src={pointerImage}
              alt={""}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end p-5">
        <Image
          src={goup}
          alt={""}
          onClick={() => window.scrollTo(0, 0)}
          className="cursor-pointer hover:animate-bounce"
        />
      </div>

      <div id={"contact"} className={"px-5 md:px-10 lg:px-20 xl:px-[120px]"}>
        <Footer />
      </div>
    </div>
  );
}

export default page;
