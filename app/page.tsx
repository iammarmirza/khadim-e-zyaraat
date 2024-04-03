'use client'

import { supabase } from '@/supabase/supabaseClient'
import { useEffect, useState } from 'react';
import Link from 'next/link';

type PlaceType = {
  id: number
  name: string
  slug: string
}
export default function Home() {
  const [fetchError, setFetchError] = useState(false)
  const [places, setPlaces] = useState<PlaceType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
      .from('places')
      .select()

      if (error) {
        setFetchError(true)
        setPlaces([])
        console.log(error)
      }

      if (data) {
        setFetchError(false)
        setPlaces(data)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      {
        places?.map(place => (
          <Link href={place.slug} key={place.id}>{place.name}</Link>
        ))
      }
    </>
  );
}
