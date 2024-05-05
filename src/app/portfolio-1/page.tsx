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
import { ChevronUp, EllipsisVertical } from "lucide-react";
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
				<CarouselDots className="absolute top-5 left-0 right-0" />
				<CarouselPrevious className="absolute top-0 left-0 bottom-0 w-16 h-full translate-y-0 bg-transparent border-none opacity-0" />
				<CarouselNext className="absolute top-0 right-0 bottom-0 w-16 h-full translate-y-0 bg-transparent border-none opacity-0" />
			</Carousel>
			<div className="absolute px-3 top-10 left-0 right-0">
				<div className="flex justify-start items-center gap-3 mb-4 w-full">
					<Avatar className="w-10 h-10">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="flex flex-col justify-center items-start text-white w-full">
						<p className="font-bold">Kari Rasmussen</p>
						<p className="font-normal text-sm">5 minutes ago</p>
					</div>
					<div className="self-end flex justify-end items-start">
						<EllipsisVertical className="text-white w-4" />
					</div>
				</div>
			</div>

			<div className="absolute px-3 bottom-5 left-0 right-0 flex justify-center items-center">
				<Button className="bg-black/70 rounded-xl p-5 gap-2">
					Reply <ChevronUp className="w-4" />
				</Button>
			</div>
		</>
	);
}
