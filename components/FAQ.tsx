import { useState } from 'react'

const questions = [
    {
        q: 'How many people can be on a single team?',
        a: 'Up to 4 people can be part of a single team.',
    },
    {
        q: 'Do I have to have a team to participate?',
        a: 'No. We will have team matching during the event itself, or you can come with a team or solo. Whatever works for you!',
    },
    {
        q: 'What experience level is needed to attend?',
        a: 'All experience levels are welcome!',
    },
    {
        q: 'Do I have to be in-person?',
        a: 'Yes, you and your team will all have to be in-person to participate in the hackathon.',
    },
    {
        q: 'Will you be compensating travel?',
        a: 'Unfortunately, we cannot offer financial travel assistance like flight reimbursement at this time.',
    },
    {
        q: 'Is there a finalized schedule of events?',
        a: "We'll have a schedule out soon! Stay posted for more.",
    },
    {
        q: 'I would like to sponsor Cal Hacks 10.0!',
        a: (
            <>
                Please contact&nbsp;
                <a className="hover:underline drop-shadow-md" href="mailto:sponsorship@calhacks.io">
                    sponsorship@calhacks.io
                </a>
                !
            </>
        ),
    },
    {
        q: "My question isn't answered!",
        a: (
            <>
                Unanswered questions still?&nbsp;
                <a className="hover:underline drop-shadow-md" href="mailto:team@calhacks.io">
                    Click here to contact us!
                </a>
            </>
        ),
    },
]

const Star = ({ filled = false }) => (
    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.8888 1.69486C11.1881 0.773548 12.4916 0.773545 12.7909 1.69486L14.0008 5.41849C14.4024 6.65456 15.5543 7.49144 16.854 7.49144H20.7692C21.7379 7.49144 22.1407 8.73106 21.357 9.30046L18.1895 11.6018C17.138 12.3657 16.6981 13.7198 17.0997 14.9559L18.3096 18.6795C18.6089 19.6008 17.5544 20.367 16.7707 19.7976L13.6032 17.4962C12.5517 16.7323 11.128 16.7323 10.0765 17.4962L6.90898 19.7976C6.12527 20.367 5.07079 19.6008 5.37014 18.6795L6.58002 14.9559C6.98165 13.7198 6.54167 12.3657 5.49021 11.6018L2.3227 9.30046C1.53898 8.73105 1.94176 7.49144 2.91048 7.49144H6.82574C8.12542 7.49144 9.27729 6.65456 9.67891 5.41849L10.8888 1.69486Z"
            {...(filled && { fill: '#D7758B' })}
            stroke="#D7758B"
            stroke-width="2"
        />
    </svg>
)

const Divider = () => <div className="w-full h-[2px] bg-[#502201] mt-4" />

const Item = ({ question, answer }) => {
    const [open, setOpen] = useState(false)

    return (
        <li className="pt-4 cursor-pointer" onClick={() => setOpen((isOpen) => !isOpen)}>
            <div className="flex">
                <div className="mt-1">
                    <Star filled={open} />
                </div>
                <div className="ml-4 flex-1">
                    <p className="font-semibold md:text-xl sm:text-lg text-base">{question}</p>
                    {open && <p className="text-gray-700 mt-4">{answer}</p>}
                </div>
            </div>
            <Divider />
        </li>
    )
}

const FAQ = () => {
    return (
        <div className="mx-2 md:mx-auto md:p-6 sm:p-4 p-2 text-left text-[#5481B2]">
            <h1 className="mb-4 xl:text-5xl lg:text-4xl text-3xl font-header font-bold">
                <span className="md:block hidden">Frequently Asked Questions</span>
                <span className="md:hidden block">FAQs</span>
            </h1>

            <Divider />

            <ul>
                {questions.map(({ q, a }, index) => (
                    <Item key={index} question={q} answer={a} />
                ))}
            </ul>
        </div>
    )
}

export default FAQ
