"use client"

import WifiIcon from '@mui/icons-material/Wifi';

const Loading = () => {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className='relative w-fit h-fit'>
            <WifiIcon className='w-32 h-32' />
            <div
                style={{
                    clipPath: 'polygon(49% 25%, 74% 26%, 95% 41%, 97% 63%, 80% 51%, 50% 47%, 21% 51%, 3% 62%, 4% 42%, 28% 26%)'
                }}
                className='animate-up-n-down w-32 h-40 dark:bg-zinc-800 bg-white absolute top-20'
            ></div>
        </div>
    </div>
}

// 

export default Loading