"use client";
import Image from 'next/image'
import tendencies from '../../utils/tendencies.json'
import { useState } from 'react';
import Text from '../components/Text';

interface ITendencies {
    id: number;
    img: string;
    name: string;
    bgColor: string;
    summary: string
}

export default function Tendencies() {
    const [selectedTendence, setSelectedTendence] = useState<number>(0);

    const handleSelectTendence = (id: number) => {
        if (selectedTendence === 0)
            setSelectedTendence(id)
    }

    return (
        <div className='flex-col my-5 mg:m-0 mg:flex-row flex mg:justify-evenly shrink items-center h-full w-full'>
            {tendencies.map(({
                id,
                img,
                name,
                bgColor,
                summary
            }: ITendencies) => {

                const display = selectedTendence !== id && selectedTendence !== 0
                    ? "none"
                    : ""

                return <div
                    key={id}
                    onClick={() => handleSelectTendence(id)}
                    style={{ display }}
                    className='cursor-pointer flex flex-col items-center hover:scale-110 hover:m-10 mg:hover:m-0 transition-all'
                >
                    <div
                        onClick={() => setSelectedTendence(0)}
                        style={{ backgroundColor: bgColor }}
                        className={'w-80 h-80 flex justify-center items-center'}>
                        <div>
                            <Image
                                alt=''
                                src={img}
                                width={250}
                                height={250}
                            />
                        </div>
                    </div>
                    <div className='text-center w-80 mt-3 mb-3'>
                        <h1 className='font-bold text-xl'>{name}</h1>
                        <p className='text-gray-500'>{summary}</p>
                    </div>
                </div>
            })}
            {
                selectedTendence === 0 ?
                    <></>
                    :
                    <div className='h-9/10 overflow-x-auto w-5/12 flex flex-col items-center justify-start'>
                        <Text
                            string={tendencies[selectedTendence - 1].expanded_info}
                        />
                        <div className='flex'>
                            {tendencies[selectedTendence - 1].news.map((item) => {

                                const { title, link, image } = item

                                return (
                                    <div key={title} className='w-3/5'>
                                        <a
                                            href={link}
                                            target='_blank'
                                            className='hover:text-zinc-500'
                                        >
                                            <Image
                                                className='w-full object-cover'
                                                alt={title}
                                                width={100}
                                                height={100}
                                                src={image}
                                                unoptimized
                                            />
                                            <p className='cursor-pointer'>
                                                {title}
                                            </p>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            }
        </div >
    )
}