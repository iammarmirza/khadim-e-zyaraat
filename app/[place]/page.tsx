import { Shrines } from '@/components/Shrines'
import { supabase } from '@/supabase/supabaseClient'
import { notFound } from 'next/navigation'

export default async function ShrineList({ params }: {
    params: { place: string }
}) {
    const { data: shrines, error } = await supabase
        .from('shrines')
        .select('*, place!inner(*)')
        .eq('place.slug', params.place)

    if (error) throw new Error()

    return (
        <div className='flex flex-col gap-3 w-screen min-h-screen px-4 py-4 bg-[#F5E9E6]'>
            {shrines.length > 0 ? shrines.map(shrine => (
                <Shrines key={shrine.id} data={shrine} path={params.place} />
            )) : notFound()
            }
        </div>
    )
}
