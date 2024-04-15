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
        <Link className='w-full bg-primary-100 py-3 text-lg flex items-center px-6 rounded-full font-semibold'
            href={`${props.path}/${id}`}>{title}</Link>
    )
}