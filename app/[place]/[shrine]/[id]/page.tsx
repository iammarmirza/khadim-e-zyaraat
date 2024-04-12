import { SupplicationDetails } from "@/components/SupplicationDetails"
import { supabase } from "@/supabase/supabaseClient"

export default async function SupplicationById({ params }: {
    params: { id: number }
}) {
    const { data: supplication } = await supabase
        .from('data')
        .select(`*, supplication!inner(id)`)
        .eq('supplication.id', params.id)
        .single()

    if(!supplication) throw new Error('No supplication data for the given query!')

    return (
        <>
            {supplication && <SupplicationDetails data={supplication} />}
        </>
    )

}