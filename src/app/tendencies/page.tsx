"use client";
import Image from 'next/image'
import tendencies from '../../utils/tendencies.json'
import { useState } from 'react';

interface ITendencies {
    id: number;
    img: string;
    name: string;
    bgColor: string;
    summary: string
}

export default function Tendencies() {
    const [selectedTendence, setSelectedTendence] = useState<number>(0);

    return (
        <div className='flex-col my-5 mg:m-0 mg:flex-row flex mg:justify-evenly shrink items-center h-full w-full'>
            {tendencies.map(({
                id,
                img,
                name,
                bgColor,
                summary
            }: ITendencies) => {
                return <div onClick={() => { setSelectedTendence(id) }}
                    style={{
                        display: selectedTendence !== id && selectedTendence !== 0
                            ? 'none'
                            : ''
                    }}
                    className='cursor-pointer flex flex-col items-center hover:scale-110 hover:m-10 mg:hover:m-0 transition-all'>
                    <div
                        style={{ backgroundColor: bgColor }}
                        className={'w-80 h-80 flex justify-center items-center'}>
                        <Image alt='' src={img} width={250} height={250} />
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
                    <div className='w-5/12 flex flex-col items-center justify-center'>
                        <div>
                            <p onClick={() => setSelectedTendence(0)}>X</p>
                            {tendencies[selectedTendence - 1].expanded_info
                                .split('\n')
                                .map((item) => {
                                    return <p className='mb-3 text-justify'>
                                        {item}
                                    </p>
                                })}
                        </div>
                        <div className='flex'>
                            {tendencies[selectedTendence - 1].news.map((tendence) => {
                                return (
                                    <div className='w-3/5'>
                                        <a
                                            href={tendence.link}
                                            target='_blank'
                                            className='hover:text-zinc-500'
                                        >
                                            <Image
                                                className='w-full h-2/3 object-cover odd:w-96'
                                                alt={tendence.title}
                                                width={100}
                                                height={100}
                                                src={tendence.image}
                                                unoptimized
                                            />
                                            <p className='cursor-pointer'>{tendence.title}</p>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            }
        </div>
    )
}