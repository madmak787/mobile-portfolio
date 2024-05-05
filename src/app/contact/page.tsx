"use client";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, CirclePause, Menu, Mic, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
	.object({
		message: z.string().min(10, { message: "Please enter your message." }),
	})

type FormValue = z.infer<typeof formSchema>;

export default function PortfolioPage() {

	const onSubmit = async (data: FormValue) => {
		const formData = new FormData();
		formData.append("message", data.message);

		const url = `${process.env.NEXT_PUBLIC_API_URL}/contact`;
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((result) => {
				if(result.success) {
				} else {
					
				}
			})
			.catch((error) => {
				console.log(error)
			});
	};

	const form = useForm<FormValue>({
		resolver: zodResolver(formSchema),
	});

	return (
		<div className="pt-5 px-3">
			<div className="flex justify-start items-center gap-3 w-full shadow-2xl pb-3">
				<Link href={`/`}><ArrowLeft /></Link>
				<Avatar className="w-10 h-10">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div className="flex flex-col justify-center items-start w-full">
					<p className="font-bold">Kari Rasmussen</p>
					<p className="font-normal text-sm">5 minutes ago</p>
				</div>
				<div className="self-end flex justify-end items-start">
					<Menu className="w-4" />
				</div>
			</div>

			<div className="bg-white relative h-[88vh] overflow-hidden">
				<div className="h-[90%] w-[106%] pr-[6%] overflow-x-hidden overflow-y-scroll">
					<div className="text-[12px] text-gray-400 text-center py-5">TODAY</div>
					
					<div className="flex w-[85%] justify-start items-start gap-2 my-4">
						<Avatar className="w-10 h-10 border-primary border-2 rounded-full">
							<AvatarImage src="https://github.com/shadcn.png" className="object-cover object-center" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="flex flex-col gap-2">
							<p className="text-sm text-slate-700">Hi...Are you intrested in my profile? You can contact me by sending a message here...</p>
							<div className="flex gap-2">
								<Image src="/assets/images/wallpaper-01.jpg" alt="wallpaper" width={100} height={100} className="rounded-xl object-cover object-center w-24 h-24" />
								<Image src="/assets/images/wallpaper-02.jpg" alt="wallpaper" width={100} height={100} className="rounded-xl object-cover object-center w-24 h-24" />
							</div>
						</div>
					</div>

					<div className="flex flex-col w-[85%] justify-start items-end gap-2 my-4 ms-auto">
						<div className="flex gap-2 bg-primary text-white p-2 justify-center items-center rounded-xl">
							<CirclePause className="bg-white rounded-full text-primary w-10 h-10" />
							<Image src="/assets/images/waveform.png" alt="audio" width={600} height={100} className="object-cover object-left w-[65%] h-8" />
							<p className="text-sm">0:45</p>
						</div>
						<p className="text-[10px] text-gray-500">5 mins ago</p>
					</div>

					<div className="flex w-[85%] justify-start items-start gap-2 my-4">
						<Avatar className="w-10 h-10 border-primary border-2 rounded-full">
							<AvatarImage src="https://github.com/shadcn.png" className="object-cover object-center" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="flex flex-col gap-2">
							<p className="text-sm text-slate-700">Let me know how I can help you...</p>
						</div>
					</div>

					<div className="flex flex-col w-[85%] justify-start items-end gap-2 my-4 ms-auto">
						<div className="flex gap-2 bg-primary text-white p-2 justify-center items-center rounded-xl">
							<p className="text-sm">Okay</p>
						</div>
						<div className="flex gap-2 bg-primary text-white p-2 justify-center items-center rounded-xl">
							<p className="text-sm">I need help with...</p>
						</div>
						<p className="text-[10px] text-gray-500">59 secs ago</p>
					</div>

				</div>

				<div className="absolute left-0 right-0 bottom-0">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full text-slate-500">
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem className="relative">
										<div className="flex justify-center items-center">
											<FormControl>
												<Input className="h-12 min-h-12 rounded-3xl py-3 px-10 mb-1 !ring-0" placeholder="" {...field} />
											</FormControl>
										</div>
										<FormMessage className="absolute bottom-2 text-[10px] left-0 right-0 text-center" />
										<Smile className="absolute left-2 bottom-4 w-5" />
										<Mic className="absolute right-2 bottom-3 w-8 h-8 p-2 bg-primary text-secondary rounded-full" />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
