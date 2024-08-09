import Image from "next/image";
import Link from "next/link";
export default function ({ event, link, clicker }) {
  return (
    <div className={"rounded-3xl p-3 bg-white group cursor-pointer " + event.classes} onClick={clicker}>
      <div className={"relative"}>
        <Image src={event.image} alt={""} className={"w-full rounded-2xl"} />
          {
              link
              ? (
                      <div className={"absolute top-0 hidden group-hover:block w-full h-full rounded-2xl bg-black/10"}>
                          <div className={"absolute right-2.5 bottom-2.5"}>
                              <Image src={link} alt={""}/>
                          </div>
                      </div>
                  )
              : ""
          }

      </div>
        <div className={"mt-4 text-[#171717] text-lg font-medium"}>
        {event.title}
      </div>
      <div className={"flex justify-between items-center mt-3 gap-1"}>
        <div className={"font-medium text-[#525252]"}>{event.date}</div>.
        <div className={"text-[#525252]"}>{event.location}</div>
      </div>
    </div>
  );
}
