export const AdditionalCards: FC<> = () => {
	return (
		<>
			<img src="/cards.webp" className="hidden md:block" style={{ width: '95vw', margin: 'auto' }} />
			<img src="/cards-mobile.webp" className="block md:hidden" style={{ width: '95vw', margin: 'auto' }} />
		</>
	)
}

export default AdditionalCards