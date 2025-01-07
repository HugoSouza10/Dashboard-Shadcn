
import {Route, Routes} from 'react-router-dom';
import {Dashboard} from '../page/Dashbord';
import {AparelhosAuditivos} from '../page/AparelhosAuditivos'


export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/aparelhosAuditivos" element={<AparelhosAuditivos/>}/>
        </Routes>
    )
 }