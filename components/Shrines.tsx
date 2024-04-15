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
        <Link className='w-full bg-primary-100 py-3 text-lg flex items-center px-6 rounded-full font-semibold'
            href={`${props.path}/${slug}`}>{name}
        </Link>
    )
}