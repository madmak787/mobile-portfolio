import { CircleDashed, CircleUserRound, MessageSquareText, Phone } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 pb-1 bg-white shadow-2xl shadow-primary">
            <ul className="flex justify-center items-center gap-10 text-black">
                <li><Link href={``} className="p-4 text-primary"><MessageSquareText /></Link></li>
                <li><Link href={``} className="p-4 text-gray-500"><CircleDashed /></Link></li>
                <li><Link href={``} className="p-4 text-gray-500"><Phone /></Link></li>
                <li><Link href={``} className="p-4 text-gray-500"><CircleUserRound /></Link></li>
            </ul>
        </div>
    )
}
export default Navbar