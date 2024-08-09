import Button from "@components/button/Button";
import IconEdit from "../public/images/editIcon.svg"
import Image from "next/image";
import HomeEventCard from "@components/HomeEventCard";
import pointerImage2 from "@public/images/pointerImage2.svg";
import Events from "../data/event"
export default function (){

    return (
        <div id={"works"} className={"py-20"}>
            <div className={"flex justify-between mb-12"}>
                <div>
                    <div className={"text-[#171717] text-[48px] mb-4"}>Discover live events</div>
                    <div className={"text-[#525252]"}>Take a peek at some amazing events using Ticket Tailor.</div>
                </div>
                <div className={"hidden md:flex items-end"}>
                    <div className={"flex items-center"}>
                        <div>
                            <Button text={"Oxford, UK"} style={"bg-[#6A5BC1]/20 text-[#6A5BC1] px-3 py-2 flex gap-2 rounded-lg"}
                                    iconRight={<Image src={IconEdit} alt={""}/>}/>
                        </div>
                        <div>
                            <Button text={"See all events"} style={"text-[#6A5BC1] px-3 py-2"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}>
                {
                    Events.map((event) => {
                        return (
                            <HomeEventCard key={event.title} event={event}/>
                        )
                    })
                }

            </div>
            <div className={"mt-12 flex justify-center"}>
                <div className={"relative"}>
                    <Button text={"Discover More"} style={"border border-[#6A5BC1] hover:bg-[#6A5BC1] hover:text-white text-[#6A5BC1] px-5 py-4 rounded-3xl"}/>
                    <Image className={"absolute -right-14 top-4 text-white fill-inherit h-20 md:h-32"} src={pointerImage2} alt={""} />
                </div>
            </div>

        </div>
    )
}