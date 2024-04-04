import { supabase } from '@/supabase/supabaseClient'
import Link from "next/link"
import { notFound } from 'next/navigation'

export default async function ShrineList({ params }: {
    params: { place: string }
}) {
    const { data: shrines } = await supabase
        .from('shrines')
        .select('*, place!inner(*)')
        .eq('place.slug', params.place)
    
    if(!shrines || shrines.length === 0) notFound()
    return (
        <div>
            {
                shrines?.map(shrine => (
                    <Link key={shrine.id} href={`${params.place}/${shrine.slug}`}>{shrine.name}</Link>
                ))
            }
        </div>
    )
}
