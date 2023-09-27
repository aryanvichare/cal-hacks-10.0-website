import { FC } from 'react'

interface IAdditionalCards {}

export const AdditionalCards: FC<IAdditionalCards> = () => {
    return (
        <>
            <img src="/cards.webp" className="z-10 hidden md:block" style={{ width: '95vw', margin: 'auto' }} />
            <img src="/cards-mobile.webp" className="z-10 block md:hidden" style={{ width: '95vw', margin: 'auto' }} />
        </>
    )
}

export default AdditionalCards
