import { CogIcon } from '@heroicons/react/24/solid'
export const MenuBar = () => {
    return (
        <>
            <div className="w-screen flex flex-row justify-between px-3 py-4 text-white font-semibold bg-purple-700 items-center">
                <p className='text-2xl'>Khadim e Zyaraat</p>
                <button>
                    <CogIcon className="h-8 w-8" />
                </button>
            </div>
        </>
    )
}