import Image from "next/image";

export default function({item}){
    return (
        <div
            className={
            "hover:bg-white border border-[#F5F5F5] hover:border-transparent p-8 rounded-3xl " +
                "hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]"
        }
        >
            <div className={"mb-8"}>
                <Image src={item.icon} alt={""} />
            </div>
            <div className={"text-2xl font-medium"}>{item.title}</div>
            <div>{item.description}</div>
        </div>
    )
}