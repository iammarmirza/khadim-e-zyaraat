'use client'

import { supabase } from "@/supabase/supabaseClient"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type SupplicationType = {
    id: number
    title: string
    type?: string
    shrine: {
        slug: string
    }
}

export default function SupplicationList({params}: {
    params: {shrine: string}
}) {
    const [fetchError, setFetchError] = useState(false)
    const [supplications, setSupplications] = useState<SupplicationType[]>([])
    const path = usePathname()

    useEffect(() => {
        const fetchSupplications = async () => {
            const {data, error} = await supabase
            .from('supplications')
            .select(`*, shrine!inner(slug)`)
            .eq('shrine.slug', params.shrine)

            if(error) {
                setFetchError(true)
                setSupplications([])
                console.log(error)
            }

            if(data) {
                setFetchError(false)
                setSupplications(data)
            }
        }

        fetchSupplications()
    }, [params.shrine])
    return (
        <>
        {
            supplications?.map(supplication =>(
                <Link key={supplication.id} href={`${path}/${supplication.id}`}>{supplication.title}</Link>
            ))
        }
        </>
    )
}