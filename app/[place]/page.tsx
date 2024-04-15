import { Shrines } from '@/components/Shrines'
import { supabase } from '@/supabase/supabaseClient'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { DetailsBox } from '@/components/DetailsBox'

export default async function ShrineList({ params }: {
    params: { place: string }
}) {
    const { data: shrines, error } = await supabase
        .from('shrines')
        .select('*, place!inner(*)')
        .eq('place.slug', params.place)

    if (error) throw new Error()
    if (shrines.length === 0) notFound()

    return (
        <div className='flex w-screen flex-1 bg-primary-BACKGROUND justify-center px-6 py-8'>
            <DetailsBox>
                {
                    shrines.map((shrine, index) => (
                        <Shrines key={index} path={params.place} data={shrine} />
                    ))
                }
            </DetailsBox>
        </div>
    )
}
