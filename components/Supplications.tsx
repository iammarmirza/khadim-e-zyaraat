import Link from "next/link"

type SupplicationProps = {
    data: {
        id: number
        title: string
        shrine: {
            slug: string
        }
    }
    path: string

}
export const Supplications = (props: SupplicationProps) => {
    const { id, title } = props.data
    return (
        <Link className='w-full bg-white h-16 text-xl flex items-center px-5 rounded-md shadow-lg font-semibold'
            href={`${props.path}/${id}`}>{title}</Link>
    )
}