'use client'
import { useRouter, usePathname } from 'next/navigation'
import { CogIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

export const MenuBar = () => {
    const router = useRouter()
    const path = usePathname()
    return (
        <div className="flex flex-row justify-between px-3 py-4 text-white font-semibold bg-primary items-center">
            {path === '/' ?
                (
                    <p className='text-xl'>Khadim e Zyaraat</p>
                ) :
                (
                    <button onClick={() => router.back()}>
                        <ArrowLeftIcon className="h-6 w-6"/>
                    </button>
                )}
            {
                path === '/' &&
                <button>
                    <CogIcon className='h-6 w-6'/>
                </button>
            }
        </div>
    )
}