import Image from 'next/image'
import Link from 'next/link'
import tendencies from '../../utils/tendencies.json'

interface ITendencies {
    img: string;
    name: string;
    bgColor: string;
    summary: string;
    link: string;
}

export default function Tendencies() {
    return (
        <div className='flex-col my-5 mg:m-0 mg:flex-row flex mg:justify-evenly shrink items-center h-full w-full'>
            {tendencies.map(({ img, name, bgColor, summary, link }: ITendencies) => {
                return <Link shallow href={`tendencies/${link}`}>
                    <div className='flex flex-col items-center hover:scale-110 hover:m-10 mg:hover:m-0 transition-all'>
                        <div className={bgColor + ' w-80 h-80 flex justify-center items-center'}>
                            <Image alt='' src={img} width={250} height={250} />
                        </div>
                        <div className='text-center w-80 mt-3 mb-3'>
                            <h1 className='font-bold text-xl'>{name}</h1>
                            <p className='text-gray-500'>{summary}</p>
                        </div>
                    </div>
                </Link>
            })}
        </div>
    )
}