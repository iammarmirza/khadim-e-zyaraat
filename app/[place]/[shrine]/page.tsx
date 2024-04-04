import { supabase } from "@/supabase/supabaseClient"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function SupplicationList({ params }: {
    params: { shrine: string }
}) {
    const { data: supplications } = await supabase
        .from('supplications')
        .select(`*, shrine!inner(slug)`)
        .eq('shrine.slug', params.shrine)

    if(!supplications || supplications.length === 0) notFound()

    return (
        <>
            {supplications?.map(supplication => (
                <Link key={supplication.id} href={`${params.shrine}/${supplication.id}`}>{supplication.title}</Link>
            ))}
        </>
    )
}