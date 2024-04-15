'use client'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center bg-primary-BACKGROUND px-5 gap-6">
            <h2 className="text-3xl font-bold text-center">Some internal error has been occurred</h2>
            <button className="bg-red-500 px-4 py-2 rounded-md text-white font-semibold text-xl" onClick={() => reset()}>Retry</button>
        </div>
    )
}