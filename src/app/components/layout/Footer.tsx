import { Typography } from '@mui/material';
import bibliography from '@/utils/bibliography.json';

const Footer = () => {
    return <footer className='h-14 flex bg-black text-white justify-center items-center w-full'>
        <Typography marginRight={2}>BIBLIOGRAPHY:</Typography>
        <div className='flex'>
            {bibliography.map(({ name, link }) => {
                return <ul>
                    <a target='_blank' href={link}>
                        <li className='w-fit mr-5'>
                            {name}
                        </li>
                    </a>
                </ul>
            })}
        </div>
    </footer>
}

export default Footer