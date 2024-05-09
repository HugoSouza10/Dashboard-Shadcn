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
                <div className='Container-geral flex h-full'>
                    <div className='Page flex-1 pl-5'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}