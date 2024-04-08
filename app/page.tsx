import { supabase } from '@/supabase/supabaseClient'
import { Places } from '@/components/Places';

export default async function Home() {
  const { data: places } = await supabase
    .from('places')
    .select()
    
  return (
    <div className='flex flex-col gap-4 w-screen px-4 py-4 min-h-screen bg-[#F5E9E6]'>
      {
        places?.map(place => (
            <Places key={place.id} data={place}/>
        ))
      }
    </div>
  );
}
