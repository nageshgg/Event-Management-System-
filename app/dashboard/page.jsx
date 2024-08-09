"use client";
import AttendeeFrame from "../../public/images/attendeeframe.svg";
import EventFrame from "../../public/images/eventframe.svg";
import RevenueFrame from "../../public/images/revenueframe.svg";
import ReviewFrame from "../../public/images/reviewframe.svg";
import EventLinkIcon from "../../public/images/eventlinkicon.svg";
import HomeEventCard from "@components/HomeEventCard";
import AnalyticsCard from "@components/AnalyticsCard";
import Events from "../../data/event";
import { useState } from "react";
import EventModal from "@components/dialog/EventModal";
import { Dialog } from "@node_modules/@headlessui/react";
import ListEventDetailsCard from "@components/ListEventDetailsCard";
import Image from "next/image";
import EventDetails from "@components/EventDetails";
import NextTopLoader from "nextjs-toploader";

function page() {
  // importing analytics data response
  const analytics = [
    {
      title: "Events",
      icon: EventFrame,
      value: "3",
      percentage: "",
      comment: "",
    },
    {
      title: "Attendees",
      icon: AttendeeFrame,
      value: "102",
      percentage: "-25%",
      comment: "vs last month",
    },
    {
      title: "Revenue",
      icon: RevenueFrame,
      value: "£1,122",
      percentage: "+25%",
      comment: "vs last month",
    },
    {
      title: "Reviews",
      icon: ReviewFrame,
      value: "42",
      percentage: "",
      comment: "",
    },
  ];
  let [isOpenEventModal, setIsOpenEventModal] = useState(false);
  let [eventState, setEventState] = useState(null);
  let [eventId, setEventID] = useState(null);

  function closeModal() {
    setIsOpenEventModal(false);
  }
  function openModal(event) {
    setEventState(event);
    setEventID(event.eventId);
    console.log(eventState, eventId);
    setIsOpenEventModal(true);
  }

  return (
    <div className={"py-8 px-[100px]"}>
      <NextTopLoader />
      <EventModal
        isOpen={isOpenEventModal}
        close={() => closeModal()}
        title="Event Details"
        showclose={true}
        showbtn={true}
        eventId={eventId}
        event={<EventDetails event={eventState} />}
      />

      <div className={"flex gap-6"}>
        <div>Home</div>
        <div>/</div>
        <div>Dashboard</div>
      </div>
      <div className={"flex justify-center gap-6 mt-8"}>
        {analytics.map((item) => {
          return (
            <AnalyticsCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              value={item.value}
              percentage={item.percentage}
              comment={item.comment}
            />
          );
        })}
      </div>
      <div className={"mt-8"}>
        <div className={"mb-8"}>Completed Events</div>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          }
        >
          {Events.map((event, key) => {
            return (
              <HomeEventCard
                key={key}
                event={event}
                link={EventLinkIcon}
                clicker={() => openModal(event)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
