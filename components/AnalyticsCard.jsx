import Image from "next/image";
export default function({title, icon, value, percentage, comment}){
    const changeColor = (item) => {
        return item && item[0] === "+";
    }
    return (
        <div className={"bg-white w-full max-w-[290px] p-6 rounded-xl"}>
            <div className={"flex justify-between"}>
                <div>{title}</div>
                <div>
                    <Image src={icon} alt={""} />
                </div>
            </div>
            <div className={"flex gap-4 mt-6 items-center"}>
                <div className={"text-[30px]"}>{value}</div>
                <div>
                    {
                        changeColor(percentage)
                            ? <span className={"text-green-500"}>{percentage}</span>
                            : <span className={"text-red-500"}>{percentage}</span>
                    }
                    <span className={"ml-1"}>{comment}</span>

                </div>
            </div>
        </div>
    )
}