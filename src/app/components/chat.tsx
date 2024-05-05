import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const Chat = () => {
    return (
        <div className="flex justify-start items-center gap-3 mb-4">
            <Avatar className="w-14 h-14">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center items-start">
                <p className="font-bold">Kari Rasmussen</p>
                <p className="font-normal text-slate-600 text-sm">I'll be there in 2 mins.</p>
            </div>
            <div className="self-end flex flex-col justify-center items-end text-[12px] w-16">
                <p className="text-gray-400">Just Now</p>
                <Badge variant="outline" className="bg-primary text-white mt-1 w-6 h-6 px-[6.5px]">4</Badge>
            </div>
        </div>
    )
}
export default Chat