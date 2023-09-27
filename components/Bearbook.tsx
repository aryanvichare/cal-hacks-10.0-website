import Image from 'next/image'

const bearbook = {
    '1.0': 'beep boop',
    '2.0': 'boop beep',
    '3.0': 'brightest smile',
    '4.0': 'coolest hair',
    '5.0': 'biggest heart',
    '6.0': 'nicest eyes',
    '7.0': 'class clown',
    'hello:world': 'most out of this world',
    '8.0': 'most likely to succeed',
    '9.0': 'teacher’s pet',
    'AI LLM': 'biggest flirt',
}

const Bearbook = () => (
    <div>
        <img
            src="/bearbook/header.png"
            className="mx-auto md:w-9/12 w-100 md:py-10 pt-24"
            alt="bearbook header - 10 years of cal hacks"
        />
        <div className="flex w-100 md:grid md:grid-cols-3 md:w-9/12 mx-auto mt-12 overflow-x-scroll md:overflow-x-hidden pr-8 md:pr-0">
            {Object.keys(bearbook)
                .slice(0, 9)
                .map((key) => (
                    <div
                        key={`first-bear-group-${key}`}
                        className="flex flex-col text-brown justify-center items-center ml-8 md:ml-0 md:mb-16 shrink-0"
                    >
                        <Image
                            alt={bearbook[key]}
                            src={`/bearbook/${key.replace(':', ';')}.png`}
                            height={300}
                            width={232}
                        />
                        <p className="text-lg font-header font-bold mt-4">{key}</p>
                        <p>{bearbook[key]}</p>
                    </div>
                ))}
            {Object.keys(bearbook)
                .slice(9, 11)
                .map((key) => (
                    <div
                        key={`second-bear-group-${key}`}
                        className="flex flex-col text-brown justify-center items-center ml-8 md:ml-0 md:mb-16 shrink-0 md:hidden"
                    >
                        <Image
                            alt={bearbook[key]}
                            src={`/bearbook/${key.replace(':', ';')}.png`}
                            height={300}
                            width={232}
                        />
                        <p className="text-lg font-header font-bold mt-4">{key}</p>
                        <p>{bearbook[key]}</p>
                    </div>
                ))}
        </div>
        <div className="hidden md:grid grid-cols-2 w-6/12 mx-auto md:overflow-x-hidden">
            {Object.keys(bearbook)
                .slice(9, 11)
                .map((key) => (
                    <div
                        key={`third-bear-group-${key}`}
                        className="flex flex-col text-brown justify-center items-center ml-8 md:ml-0 md:mb-16 shrink-0"
                    >
                        <Image
                            alt={bearbook[key]}
                            src={`/bearbook/${key.replace(':', ';')}.png`}
                            height={300}
                            width={232}
                        />
                        <p className="text-lg font-header font-bold mt-4">{key}</p>
                        <p>{bearbook[key]}</p>
                    </div>
                ))}
        </div>
        <img
            src="/bearbook/bear.png"
            style={{ height: '150px', position: 'absolute', bottom: '-5px', right: '24px' }}
            className="hidden md:block"
        />
    </div>
)

export default Bearbook
