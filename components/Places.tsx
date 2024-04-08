import Image from "next/image"
import Link from "next/link"

type PlaceProps = {
   id: number
   name: string
   logo: string
   slug: string
}

export const Places = (props: {data: PlaceProps}) => {
    const { name, logo, slug} = props.data
    return (
        <Link href={slug} className="rounded-lg border overflow-hidden w-full h-32 relative">
            <Image className=' brightness-[80%]' src={`/${logo}`} alt='random image' objectFit="cover" fill />
            <p className="text-white font-semibold text-3xl absolute bottom-5 left-5">{name}</p>
        </Link>
    )
}