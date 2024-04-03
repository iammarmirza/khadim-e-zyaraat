'use client'

import { useEffect, useState } from "react"
import { supabase } from '@/supabase/supabaseClient'
import Link from "next/link"

type ShrineType = {
    id: number
    name: string
    slug: string
    place: {
        id: number
        name: string
        logo?: string
        slug: string
    }
}

export default function ShrineList({ params }: {
    params: { place: string }
}) {
    const [fetchError, setFetchError] = useState(false)
    const [shrines, setShrines] = useState<ShrineType[]>([])

    useEffect(() => {
        const fetchShrines = async () => {
            const { data, error } = await supabase
                .from('shrines')
                .select('*, place!inner(*)')
                .eq('place.slug', params.place)


            if (error) {
                setFetchError(true)
                console.log(error)
                setShrines([])
            }

            if (data) {
                setFetchError(false)
                setShrines(data)
            }
        }

        fetchShrines()
    }, [params.place])
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