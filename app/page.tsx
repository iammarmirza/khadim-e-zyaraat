import { supabase } from '@/supabase/supabaseClient'
import { Places } from '@/components/Places';

export default async function Home() {
  const { data: places, error } = await supabase
    .from('places')
    .select()

  if(error) throw new Error()
    
  return (
    <div className='flex flex-col gap-2 w-screen px-2 py-4 min-h-screen bg-[#F5E9E6]'>
      {
        places?.map(place => (
            <Places key={place.id} data={place}/>
        ))
      }
    </div>
  );
}
