"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Chat from "./chat";


export function Tab() {
	const tabs = [
		{
			title: "Chats",
			value: "chats",
			content: (
				<div className="w-full relative h-full overflow-hidden bg-white">
					<ChatContent />
				</div>
			),
		},
		{
			title: "Groups",
			value: "groups",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-500 to-green-700">
					<p>Services tab</p>
					<DummyContent />
				</div>
			),
		},
		{
			title: "Calls",
			value: "calls",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-500 to-green-700">
					<p>Playground tab</p>
					<DummyContent />
				</div>
			),
		},
	];

	return (
		<div className="relative flex flex-col mx-auto w-full h-full items-start justify-start">
			<Tabs tabs={tabs} />
		</div>
	);
}

const DummyContent = () => {
	return <Image src="/assets/images/linear.webp" alt="dummy image" width="1000" height="1000" className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />;
};

const ChatContent = () => {
	return (
		<>
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
		</>
	);
};
