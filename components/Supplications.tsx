import Link from "next/link"

type SupplicationProps = {
    id: number
    title: string
    shrine: {
        slug: string
    }
}
export const Supplications = (props: {
    data: SupplicationProps
    path: string
}) => {
    const { id, title } = props.data
    return (
        <Link className='w-full bg-white h-16 text-2xl flex items-center justify-center rounded-lg shadow-lg font-semibold'
            href={`${props.path}/${id}`}>{title}</Link>
    )
}