import { SupplicationDetails } from "@/components/SupplicationDetails"
import { supabase } from "@/supabase/supabaseClient"
import { notFound } from "next/navigation"

export default async function SupplicationById({ params }: {
    params: { id: number }
}) {
    const { data: supplication, error } = await supabase
        .from('data')
        .select(`*, supplication!inner(id)`)
        .eq('supplication.id', params.id)
        .single()
    if(error) throw new Error()
    if(!supplication) notFound()

    return (
        <SupplicationDetails data={supplication} />
    )

}