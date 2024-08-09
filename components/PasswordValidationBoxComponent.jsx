import IconCheck from "@components/icon/IconCheck";

export default function({checked=false, text}){
    return (
        <div className={"flex items-center gap-2"}>
            <div>
                <IconCheck checked={checked} />
            </div>
            <div className={"text-xs text-[#4F4D55]"}>{text}</div>
        </div>
    )
}