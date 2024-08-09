import ListEventDetailsCard from "@components/ListEventDetailsCard";
import Image from "next/image";

export default function ({event}) {
    // {
    //     "event Name": "JKT 48 11th Anniversary Concert",
    //     "Descriptions": "Are you ready to fly again"
    // }
    return (
        <div>
            <div className="my-6">
                <div className={"my-6"}>
                    <ListEventDetailsCard name={"Event Name"} details={"JKT 48 11th Anniversary Concert"} className={"my-6"}/>
                </div>
                <div className={"my-6"}>
                    <ListEventDetailsCard

                        name={"Descriptions"}
                        details={"Are you ready to fly again? JKT48 will soon be celebrating its 11th anniversary through the JKT48 11th Anniversary Concert: Flying High.\n" +
                            "\n" +
                            "Fasten your seat belt, because JKT48 will invite you to fly higher into the sky. Together, we will witness the beauty of the universe through the songs and dances of the JKT48 stars."}
                    />
                </div>
                <div className={"my-6"}>
                    <ListEventDetailsCard name={"Event Location"}
                                          details={"Gelora Bung Karno Stadium, Jakarta, Indonesia"} />
                </div>

                <div className={"my-6 grid grid-cols-2"}>
                    <ListEventDetailsCard name={"Ticket Available"} details={"200000"}/>
                    <ListEventDetailsCard name={"Ticket Price"} details={"£114"}/>
                </div>
                <div className={"my-6 grid grid-cols-2"}>
                    <ListEventDetailsCard name={"Event Date & Time"} details={"Dec 31, 2023 - 16:00 PM"}/>
                    <ListEventDetailsCard name={"Ticket Selling Period"}
                                          details={"Sep 1, 2023 - Dec 1, 2023"}/>
                </div>
                <ListEventDetailsCard name={"Event Thumbnail"} details={<Image src={""} alt={""}/>} className={"my-6"}/>
            </div>
        </div>
    )
}