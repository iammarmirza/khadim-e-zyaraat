import { Shrines } from '@/components/Shrines'
import { supabase } from '@/supabase/supabaseClient'

export default async function ShrineList({ params }: {
    params: { place: string }
}) {
    const { data: shrines } = await supabase
        .from('shrines')
        .select('*, place!inner(*)')
        .eq('place.slug', params.place)

        if(!shrines || shrines.length === 0) throw new Error()
        return (
            <div className='flex flex-col gap-4 w-screen min-h-screen px-4 py-4 bg-[#F5E9E6]'>
                {
                    shrines?.map(shrine => (
                        <Shrines key={shrine.id} data={shrine} path={params.place} />
                    ))
                }
            </div>
        )
}
