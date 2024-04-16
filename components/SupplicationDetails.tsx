import { Noto_Naskh_Arabic } from 'next/font/google'
import { hasEnglishText } from '@/utils/langcheck'

type SupplicationDetailProps = {
    data: {
        id: number
        text: string
        supplication: {
            id: number
        }
    }

}

const arabicFont = Noto_Naskh_Arabic({
    subsets: ['arabic'],
    weight: ['400', '700']
})
export const SupplicationDetails = (props: SupplicationDetailProps) => {

    const {text} = props.data
    const renderSupplication = () => {

        const lines = text.split('\n').filter(line => line !== '')

        return lines.map((line, index) => {
            const isEnglish = hasEnglishText(line)
            return <p
                key={index}
                dir={isEnglish ? 'ltr' : 'rtl'}
                className={isEnglish ? 'text-xl' : `text-2xl tracking-wide line-clamp-2 leading-relaxed font-semibold text-justify ${arabicFont.className}`}>{line}</p>
        })
    }
    return (
        <div className="flex flex-col min-h-screen w-screen px-6 py-5 bg-primary-BACKGROUND gap-7">
            {renderSupplication()}
        </div>
    )
}