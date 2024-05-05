"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArchiveRestore } from "lucide-react";

type Tab = {
	title: string;
	value: string;
	content?: string | React.ReactNode | any;
};

export const Tabs = ({ tabs: propTabs, containerClassName, activeTabClassName, tabClassName, contentClassName }: { tabs: Tab[]; containerClassName?: string; activeTabClassName?: string; tabClassName?: string; contentClassName?: string }) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
	};

	const [hovering, setHovering] = useState(false);

	return (
		<> 
            <div className={cn("flex flex-row items-center justify-between [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full", containerClassName)}>
				{propTabs.map((tab, idx) => (
					<button
						key={tab.title}
						onClick={() => {
							moveSelectedTabToTop(idx);
						}}
						onMouseEnter={() => setHovering(true)}
						onMouseLeave={() => setHovering(false)}
						className={cn("relative px-4 py-2", tabClassName)}
						style={{
							transformStyle: "preserve-3d",
						}}
					>
						{active.value === tab.value && <motion.div layoutId="clickedbutton" transition={{ type: "spring", bounce: 0.3, duration: 0.6 }} className={cn("absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full bg-transparent", activeTabClassName)} />}

						<span className={`relative block ${active.value === tab.value?'text-primary':'text-gray-400'} dark:text-white`}>{tab.title}</span>
					</button>
				))}
			</div>
            <div className="flex items-center justify-between text-sm bg-green-100 w-full p-3 rounded">
                <div className="flex justify-start items-center gap-1 text-primary font-semibold">
                    <ArchiveRestore className="w-4 h-4" /> Archived
                </div>
                <div className="">
                    <span className="bg-primary text-white rounded-xl py-1 px-2">36 chats</span>
                </div>
            </div>
			<FadeInDiv tabs={tabs} active={active} key={active.value} hovering={hovering} className={cn("mt-5", contentClassName)} />
		</>
	);
};

export const FadeInDiv = ({ className, tabs, hovering }: { className?: string; key?: string; tabs: Tab[]; active: Tab; hovering?: boolean }) => {
	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};
	return (
		<div className="relative w-full h-[80vh]">
			{tabs.map((tab, idx) => (
				<motion.div
					key={tab.value}
					layoutId={tab.value}
					style={{
						scale: 1 - idx * 0.1,
						top: hovering ? idx * -10 : 0,
						zIndex: -idx,
						opacity: idx < 3 ? 1 - idx * 0.1 : 0,
					}}
					animate={{
						y: isActive(tab) ? [0, 40, 0] : 0,
					}}
					className={cn("w-full h-full absolute top-0 left-0", className)}
				>
					{tab.content}
				</motion.div>
			))}
		</div>
	);
};
