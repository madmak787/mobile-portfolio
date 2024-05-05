import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { people } from "../../constants/data";
import { Tab } from "./components/tab";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<div className="py-5 px-3">
			<header className="flex justify-between items-center">
				<h1 className="text-lg text-primary font-extrabold">MohdAmirKhan</h1>
				<div className="flex gap-3">
					<Search />
					<Menu />
				</div>
			</header>
			<div className="flex flex-row items-center justify-center mb-5 w-full">
				<AnimatedTooltip items={people} />
			</div>

			<Tab />

			<Navbar />
		</div>
	);
}
