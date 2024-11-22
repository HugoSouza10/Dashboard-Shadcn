
import {Route, Routes} from 'react-router-dom';
import {Dashboard} from '../page/Dashbord';


export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
        </Routes>
    )
 }