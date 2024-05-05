"use client";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Image from "next/image";
import {  MicOff, Phone, Users, Video, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
	const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

	return (
		<>
			<Carousel
				plugins={[plugin.current]}
				opts={{
					align: "start",
					loop: true,
				}}
				className="bg-black m-0"
			>
				<CarouselContent>
					<CarouselItem className="p-0">
						<Image src={`/assets/images/wallpaper-01.jpg`} alt="" width={768} height={768} className="w-full h-screen object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="p-0">
						<Image src={`/assets/images/wallpaper-02.jpg`} alt="" width={768} height={768} className="w-full h-screen object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="p-0">
						<Image src={`/assets/images/wallpaper-03.jpg`} alt="" width={768} height={768} className="w-full h-screen object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="p-0">
						<Image src={`/assets/images/wallpaper-04.jpg`} alt="" width={768} height={768} className="w-full h-screen object-cover object-top" />
					</CarouselItem>
					<CarouselItem className="p-0">
						<Image src={`/assets/images/wallpaper-05.jpg`} alt="" width={768} height={768} className="w-full h-screen object-cover object-top" />
					</CarouselItem>
				</CarouselContent>
			</Carousel>
			<div className="absolute px-3 top-5 left-0 right-0">
				<div className="flex justify-start items-start gap-3 mb-4 w-full">
					<div className="flex flex-col justify-center items-start text-white w-full">
						<p className="font-bold">Kari Rasmussen</p>
						<p className="font-normal text-sm">5 minutes ago</p>
					</div>
					<div className="self-end flex justify-end items-start">
						<Image src={`/assets/images/avatar.jpg`} alt="Caller" width="200" height={300} className="rounded-xl w-28 h-32 object-cover object-center" />
					</div>
				</div>
			</div>

			<div className="absolute p-2 bottom-5 left-5 right-5 rounded-xl gap-2 bg-white/10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
				<Button variant="secondary" className="bg-white/40 rounded-xl py-2 px-3">
					<MicOff className="w-5 h-5" />
				</Button>
				<Button variant="secondary" className="bg-white/10 text-white rounded-xl py-2 px-3">
					<Video className="w-5 h-5" />
				</Button>
				<Button variant="secondary" className="bg-red-500 text-white rounded-xl py-2 px-3">
					<Phone className="w-5 h-5 rotate-[135deg]" />
				</Button>
				<Button variant="secondary" className="bg-white/10 text-white rounded-xl py-2 px-3">
					<Volume2 className="w-5 h-5" />
				</Button>
				<Button variant="secondary" className="bg-white/10 text-white rounded-xl py-2 px-3">
					<Users className="w-5 h-5" />
				</Button>
			</div>
		</>
	);
}
