import Image from 'next/image'
import Link from 'next/link'

interface ITopics {
    img: string;
    name: string;
    bgColor: string;
    summary: string;
    link: string;
}

export default function Tendencies() {

    const topics: ITopics[] = [
        {
            img: '/ia.svg',
            name: 'Artificial Intelligence',
            bgColor: 'bg-yellow-400',
            summary: 'Sistemas em aprendizado, com raciocínio, percepção e compreensão da linguagem natural.',
            link: '/ia'
        },
        {
            img: '/blockchain.svg',
            name: 'Blockchain',
            bgColor: 'bg-green-400',
            summary: 'Registro distribuído, armazenamento seguro e descentralizado de informações em uma rede.',
            link: '/blockchain'
        },
        {
            img: '/5g.svg',
            name: '5g',
            bgColor: 'bg-blue-400',
            summary: 'A quinta geração de tecnologia de redes móveis, maior velocidade, menor latência, maior capacidade.',
            link: '/fivegen'
        }
    ]

    return (
        <div className='flex-col my-5 mg:m-0 mg:flex-row flex mg:justify-evenly shrink items-center h-full w-full'>
            {topics.map(({ img, name, bgColor, summary, link }) => {
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