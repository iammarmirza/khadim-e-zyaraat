import { Supplications } from "@/components/Supplications"
import { supabase } from "@/supabase/supabaseClient"

export default async function SupplicationList({ params }: {
    params: { shrine: string }
}) {
    const { data: supplications, error } = await supabase
        .from('supplications')
        .select(`*, shrine!inner(slug)`)
        .eq('shrine.slug', params.shrine)

    if(error) throw new Error()

    return (
        <div className='flex flex-col gap-4 w-screen min-h-screen px-4 py-4 bg-[#F5E9E6]'>
            {supplications.length > 0 ? supplications.map(supplication => (
                <Supplications key={supplication.id} path={params.shrine} data={supplication} />
            )): (
                <p className="text-2xl self-center font-semibold">No supplications found for the given query</p>
            )}
        </div>
    )
}