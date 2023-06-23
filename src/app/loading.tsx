"use client"

import WifiIcon from '@mui/icons-material/Wifi';

const Loading = () => {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className='relative w-fit h-fit flex justify-center items-center flex-col'>
            <WifiIcon className='w-32 h-32' />
            <p>Loading...</p>
        </div>
    </div>
}

export default Loading