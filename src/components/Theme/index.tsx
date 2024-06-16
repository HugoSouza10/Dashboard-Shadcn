import { ReactNode } from 'react';
import { Header } from '../Header';

type Props = {
    children:ReactNode;
}

export const Theme = ({children}:Props) => {
    return (
        <div className='container-full'>
            <div className='Area'>
                <Header/>
                <div className='flex h-full'>
                    <div className='Page flex-1'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}