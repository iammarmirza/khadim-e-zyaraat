import { supabase } from "@/supabase/supabaseClient"
import { notFound } from "next/navigation"

export default async function SupplicationById({params}: {
    params: {id: number}
}) {
    const { data: supplication } = await supabase
        .from('data')
        .select(`*, supplication!inner(*)`)
        .eq('supplication.id', params.id)
        .single()
    
    if(!supplication) notFound()

    return (
       <>
       {supplication.text}
       </>
    )

}