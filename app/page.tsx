import { supabase } from '@/supabase/supabaseClient'
import { Places } from '@/components/Places';

export default async function Home() {
  const { data: places } = await supabase
    .from('places')
    .select()
  return (
    <div className='flex flex-col gap-4 w-screen px-4 py-4'>
      {
        places?.map(place => (
            <Places logo={place.logo} link={place.slug} key={place.id} name={place.name}/>
        ))
      }
    </div>
  );
}
