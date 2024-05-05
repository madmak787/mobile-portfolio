"use client";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";
import Image from "next/image";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ChevronUp, EllipsisVertical, Menu, MessageSquareText, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioPage() {
	const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

	return (
		<div className="py-5 px-3">
			<header className="flex justify-between items-center">
				<Link href={`/`}><ArrowLeft /></Link>
				<Menu />
			</header>
			<div className="flex flex-col justify-start items-center gap-2 mb-4 w-full">
				<Avatar className="w-20 h-20 border-primary border-2 rounded-full">
					<AvatarImage src="https://github.com/shadcn.png" className="object-cover object-center" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="font-bold m-0">Kari Rasmussen</p>
				<p className="font-normal text-sm text-gray-400 -mt-2">+91-9899549211</p>
			</div>

			<ul className="flex justify-center items-center gap-6 text-black mt-8">
                <li><Link href={`mailto:madmak787@gmail.com?subject=Contact via Email&body=Hi Amir, Please reply on this email.`} className="block w-12 h-12 p-3 rounded text-primary bg-primary-foreground"><MessageSquareText /></Link></li>
                <li><Link href={`tel:+91-9899549211`} className="block w-12 h-12 p-3 rounded text-primary bg-primary-foreground"><Phone /></Link></li>
                <li><Link href={`https://api.whatsapp.com/send?phone=919899549211&text=Hi%20Amir%2C%0APlease%20revert%20me%20when%20you%20see%20this%20message.%0AThanks%20%E2%98%BA%EF%B8%8F`} className="block w-12 h-12 p-3 rounded text-primary bg-primary-foreground"><Video /></Link></li>
            </ul>

			<div className="w-full my-10">
				<div className="flex justify-between items-center text-sm">
					<p className="font-semibold">Work Experience</p>
					<Link className="text-primary text-[12px]" href={`#`}>See all</Link>
				</div>
				<ul className="w-full mt-5 text-[12px]">
					<li className="flex justify-start items-center gap-3 mb-3">
						<Image src={`/assets/images/school.png`} alt="" width="100" height="100" className="w-10 h-10 bg-primary-foreground p-1 rounded-full" />
						<div className="w-full flex flex-col justify-center items-start">
							<p className="w-full font-bold m-0 flex justify-between items-center">
								<span>Sivana ICC</span>
								<span className="bg-primary p-1 -mt-1 rounded-lg text-white text-[10px]">(Feb-2017 - Present)</span>
							</p>
							<p className="m-0">IT Lead and Senior Software Engineer</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-3 mb-3">
						<Image src={`/assets/images/diploma.png`} alt="" width="100" height="100" className="w-10 h-10 bg-primary-foreground p-1 rounded-full" />
						<div className="w-full flex flex-col justify-center items-start">
							<p className="w-full font-bold m-0 flex justify-between items-center">
								<span>Incedo Inc</span>
								<span className="bg-primary p-1 -mt-1 rounded-lg text-white text-[10px]">(Nov-2016 - Feb-2017)</span>
							</p>
							<p className="m-0">Bakhshi Polytechnic (BTEUP)</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-3 mb-3">
						<Image src={`/assets/images/school.png`} alt="" width="100" height="100" className="w-10 h-10 bg-primary-foreground p-1 rounded-full" />
						<div className="w-full flex flex-col justify-center items-start">
							<p className="w-full font-bold m-0 flex justify-between items-center">
								<span>Sivana ICC</span>
								<span className="bg-primary p-1 -mt-1 rounded-lg text-white text-[10px]">(Feb-2017 - Present)</span>
							</p>
							<p className="m-0">IT Lead and Senior Software Engineer</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-3 mb-3">
						<Image src={`/assets/images/diploma.png`} alt="" width="100" height="100" className="w-10 h-10 bg-primary-foreground p-1 rounded-full" />
						<div className="w-full flex flex-col justify-center items-start">
							<p className="w-full font-bold m-0 flex justify-between items-center">
								<span>Incedo Inc</span>
								<span className="bg-primary p-1 -mt-1 rounded-lg text-white text-[10px]">(Nov-2016 - Feb-2017)</span>
							</p>
							<p className="m-0">Bakhshi Polytechnic (BTEUP)</p>
						</div>
					</li>
				</ul>
			</div>

			<div className="w-full my-10">
				<div className="flex justify-between items-center text-sm">
					<p className="font-semibold">Education</p>
					<Link className="text-primary text-[12px]" href={`#`}>See all</Link>
				</div>
				<ul className="w-full mt-5 text-[12px]">
					<li className="flex justify-start items-center gap-3 mb-3">
						<Image src={`/assets/images/school.png`} alt="" width="100" height="100" className="w-10 h-10 bg-primary-foreground p-1 rounded-full" />
						<div className="flex flex-col justify-center items-start">
							<p className="font-bold m-0">High School</p>
							<p className="m-0">A.H. Inter College</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-3 mb-3">
						<Image src={`/assets/images/diploma.png`} alt="" width="100" height="100" className="w-10 h-10 bg-primary-foreground p-1 rounded-full" />
						<div className="flex flex-col justify-center items-start">
							<p className="font-bold m-0">Diploma In Computer Science</p>
							<p className="m-0">Bakhshi Polytechnic (BTEUP)</p>
						</div>
					</li>
					<li className="flex justify-start items-center gap-3 mb-3">
						<Image src={`/assets/images/college.png`} alt="" width="100" height="100" className="w-10 h-10 bg-primary-foreground p-1 rounded-full" />
						<div className="flex flex-col justify-center items-start">
							<p className="font-bold m-0">B-Tech</p>
							<p className="m-0">RRSIMT (AKTU)</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
