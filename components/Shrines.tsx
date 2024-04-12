import Link from "next/link"

type ShrineProps = {
    data: {
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
    path: string

}

export const Shrines = (props: ShrineProps) => {
    const { slug, name } = props.data
    return (
        <Link className='w-full bg-white h-16 text-xl flex items-center px-5 rounded-md shadow-lg font-semibold'
            href={`${props.path}/${slug}`}>{name}
        </Link>
    )
}