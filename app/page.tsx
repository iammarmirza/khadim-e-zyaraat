import { supabase } from '@/supabase/supabaseClient'
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const { data: places } = await supabase
    .from('places')
    .select()
  return (
    <>
      {
        places?.map(place => (
          <>
            <Link href={place.slug} key={place.id}>{place.name}</Link>
            <Image src={`/${place.logo}`} width={100} height={100} alt='place image'/>
          </>
        ))
      }
    </>
  );
}
