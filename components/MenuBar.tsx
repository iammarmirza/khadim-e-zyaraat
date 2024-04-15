'use client'
import { useRouter, usePathname } from 'next/navigation'
import { CogIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

export const MenuBar = () => {
    const router = useRouter()
    const path = usePathname()
    return (
        <>
            <div className="w-screen flex flex-row justify-between px-3 py-4 text-white font-semibold bg-primary items-center">
                {path === '/' ?
                    (
                        <p className='text-2xl'>Khadim e Zyaraat</p>
                    ) :
                    (
                        <button onClick={() => router.back()}>
                            <ArrowLeftIcon className="h-8 w-8" />
                        </button>
                    )}
                <button>
                    <CogIcon className="h-8 w-8" />
                </button>
            </div>
        </>
    )
}