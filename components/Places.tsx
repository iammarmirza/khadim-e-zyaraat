import Image from "next/image"
import Link from "next/link"

export const Places = (props: { logo: string, link: string, name: string }) => {
    return (
        <Link href={props.link} className="rounded-lg border overflow-hidden w-full h-32 relative">
            <Image className=' brightness-[80%]' src={`/${props.logo}`} alt='random image' objectFit="cover" objectPosition="center" fill />
            <p className="text-white font-semibold text-3xl absolute bottom-5 left-5">{props.name}</p>
        </Link>
    )
}