import Link from "next/link"

type ShrineProps = {
    id: number
    name: string
    slug: string
    place: {
        id: number
        name: string
        logo: string
        slug: string
    }
}

export const Shrines = (props: {
    data: ShrineProps
    path: string
}) => {
    const { slug, name } = props.data
    return (
        <Link className='w-full bg-white h-16 text-2xl flex items-center justify-center rounded-lg shadow-lg font-semibold'
            href={`${props.path}/${slug}`}>{name}</Link>
    )
}