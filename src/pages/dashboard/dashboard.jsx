import React, {useEffect} from 'react'

import SideNav from './components/sidenav'

const DashBoard = ()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div>
            <SideNav/>
        </div>
    )
}

export default DashBoard