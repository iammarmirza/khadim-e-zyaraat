'use client'

import { supabase } from '@/utils/supabase/supabaseClient'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [fetchError, setFetchError] = useState(false)
  const [fetchedData, setFetchedData] = useState<{id: number, name: string}[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
      .from('places')
      .select()

      if (error) {
        setFetchError(true)
        setFetchedData(null)
        console.log(error)
      }

      if (data) {
        setFetchError(false)
        setFetchedData(data)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      {
        fetchedData?.map(data => (
          <Link href={`/${data.name}`}>{data.name}</Link>
        ))
      }
    </>
  );
}
