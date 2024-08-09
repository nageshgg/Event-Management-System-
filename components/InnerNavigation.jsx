'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../public/images/homeicon.svg"
import HomeOutline from "../public/images/homeoutline.svg"
import ReviewOutline from "../public/images/reviewoutlineicon.svg"
import ReviewIcon from "../public/images/reviewicon.svg"
import EventIcon from "../public/images/eventicon.svg"
import EventOutline from "../public/images/eventoutline.svg"

import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

function InnerNavigation() {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <div className={"bg-primary-1 py-4 px-[100px] flex justify-center"}>
            <div className={"flex gap-4 text-white"}>
                <Link href={"/dashboard"} className={`${pathname === '/dashboard' ? 'bg-white/10' : ''} py-4 w-[230px] flex justify-center gap-4 rounded-lg`}>
                    <div>
                        {
                            pathname === '/dashboard'
                                ? <Image src={HomeIcon} alt={""} />
                                : <Image src={HomeOutline} alt={""} />
                        }
                    </div>
                    <div>Dashboard</div>
                </Link>

                <Link href={"/event"} className={`${pathname === '/event' ? 'bg-white/10' : ''} py-4 w-[230px] flex justify-center gap-4 rounded-lg`}>
                    <div>
                        {
                            pathname === '/event'
                                ? <Image src={EventOutline} alt={""} /> //active Icon
                                : <Image src={EventIcon} alt={""} /> //inactive Icon
                        }

                    </div>
                    <div>Events</div>
                </Link>

                <Link href={"/reviews"} className={`${pathname === '/reviews' ? 'bg-white/10' : ''} py-4 w-[230px] flex justify-center gap-4 rounded-lg`}>
                    <div>
                        {
                            pathname === '/reviews'
                                ? <Image src={ReviewOutline} alt={""} /> //active Icon
                                : <Image src={ReviewIcon} alt={""} /> //inactive Icon
                        }

                    </div>
                    <div >Reviews</div>
                </Link>
            </div>
        </div>
    );
}

export default InnerNavigation;
