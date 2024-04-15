
export const DetailsBox = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className='max-w-[768px] flex-1 bg-white rounded-3xl border flex flex-col gap-3 px-4 py-5 overflow-auto'>
            {children}
        </div>
    )
}