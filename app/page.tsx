import { supabase } from '@/supabase/supabaseClient'
import Link from 'next/link';

export default async function Home() {
  const { data:places } = await supabase
      .from('places')
      .select()
 
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
