import Image from "next/image";
import facebookIcon from "../public/images/facebook.svg"
import linkedinIcon from "../public/images/linkedin.svg"
import twitterIcon from "../public/images/twitter.svg"
import youtubeIcon from "../public/images/youtube.svg"
import instagramIcon from "../public/images/instagram.svg"
import Logo from "@components/image/logo";
export default function(){
    return (
        <div className={"flex flex-col md:flex-row gap-6 justify-between items-center py-6"}>
            <div>
                <Logo/>
            </div>
            <div className={"flex gap-2"}>
                <Image src={facebookIcon} alt={""} width={"40"} height={"40"} />
                <Image src={linkedinIcon} alt={""} />
                <Image src={twitterIcon} alt={""} />
                <Image src={youtubeIcon} alt={""} />
                <Image src={instagramIcon} alt={""} />
            </div>
            <div className={"text-xs md:text-base text-[#525252]"}>
                © 2022 Company Name® Global Inc.
            </div>
        </div>
    )
}