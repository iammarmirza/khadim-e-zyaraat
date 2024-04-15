import { DetailsBox } from "@/components/DetailsBox"
import { Supplications } from "@/components/Supplications"
import { supabase } from "@/supabase/supabaseClient"
import { notFound } from "next/navigation"

export default async function SupplicationList({ params }: {
    params: { shrine: string }
}) {
    const { data: supplications, error } = await supabase
        .from('supplications')
        .select(`*, shrine!inner(slug)`)
        .eq('shrine.slug', params.shrine)

    if (error) throw new Error()
    if (supplications.length === 0) notFound()

    return (
        <div className='flex w-screen flex-1 bg-primary-BACKGROUND justify-center px-6 py-8'>
            <DetailsBox>
                {
                    supplications.map(supplication => (
                        <Supplications data={supplication} path={params.shrine} />
                    ))
                }
            </DetailsBox>
        </ div>
    )
}