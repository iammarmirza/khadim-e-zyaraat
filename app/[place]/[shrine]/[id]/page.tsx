'use client'
import { supabase } from "@/supabase/supabaseClient"
import { useEffect, useState } from "react"

type SupplicationText = {
    id: number
    text: string
    supplication: {
        id: number
        shrine: number
        title: string
    }
}

export default function SupplicationById ({params} : {
    params: {id: number}
}) {
    const [fetchError, setFetchError] = useState(false)
    const [supplicationText, setSupplicationText] = useState<SupplicationText[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase
            .from('data')
            .select(`*, supplication!inner(*)`)
            .eq('supplication.id', params.id)

            if(error) {
                setFetchError(true)
                setSupplicationText([])
                console.log(error)
            }

            if(data) {
                setFetchError(false)
                setSupplicationText(data)
            }
        }

        fetchData()
    }, [])
    return(
        <>
        {supplicationText.map(sup=> (
            <p key={sup.id}>{sup.text}</p>
        ))}
        </>
    )

}