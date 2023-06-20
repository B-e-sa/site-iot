"use client";
import Image from 'next/image'
import tendencies from '../../utils/tendencies.json';
import { useState } from 'react';
import { Typography } from '@mui/material';
import Text from '../components/Text';
import x from '../../../public/general-icons/x.svg'
import Head from 'next/head';

export default function Tendencies() {
    const [selectedTendenceId, setSelectedTendenceId] = useState<number>(0);

    const handleSelectTendence = (id: number): void => {
        selectedTendenceId === 0
            ? setSelectedTendenceId(id)
            : setSelectedTendenceId(0)
    }

    const getCurrentTendence = () => tendencies[selectedTendenceId - 1]

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="Author" content="Luteya Coulston Namasa" key="author" />
                <title>{`Luteya Coulston | vckkk` || "some title"} </title>
            </Head>

            <div className='flex-col my-5 mg:m-0 mg:flex-row flex mg:justify-evenly shrink items-center h-screen w-full'>
                {tendencies.map(({
                    id,
                    img,
                    name,
                    bgColor,
                    summary
                }) => {

                    const display = selectedTendenceId !== id && selectedTendenceId !== 0
                        ? "none"
                        : ""

                    return <div
                        key={id}
                        onClick={() => handleSelectTendence(id)}
                        style={{ display }}
                        className='cursor-pointer flex flex-col items-center hover:scale-110 hover:m-10 mg:hover:m-0 transition-all'
                    >
                        <div
                            onClick={() => handleSelectTendence(0)}
                            style={{ backgroundColor: bgColor }}
                            className={'w-80 h-80 flex justify-center items-center'}
                        >
                            <div className='relative'>
                                {selectedTendenceId !== 0 && <Image
                                    alt="close"
                                    src={x}
                                    width={35}
                                    height={35}
                                    className='absolute -top-[3.3rem] -left-[3.3rem] invert'
                                />}
                                <Image
                                    alt={name}
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
                {selectedTendenceId === 0 ?
                    <></>
                    :
                    <div className='h-9/10 overflow-x-auto w-5/12 flex flex-col items-center justify-start'>
                        <Text
                            string={getCurrentTendence().expanded_info}
                        />
                        <div className='flex'>
                            {getCurrentTendence()
                                .news
                                .map(({
                                    title,
                                    link,
                                    image
                                }) => {
                                    return (
                                        <div key={title} className='w-3/5'>
                                            <a
                                                href={link}
                                                target='_blank'
                                                className='hover:text-zinc-800'
                                            >
                                                <Image
                                                    className='w-full h-32 object-cover'
                                                    alt={title}
                                                    width={100}
                                                    height={100}
                                                    src={image}
                                                    unoptimized
                                                />
                                                <Typography
                                                    paddingRight={2}
                                                    fontWeight={600}
                                                >
                                                    {title}
                                                </Typography>
                                            </a>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>}
            </div >
        </>
    )
}