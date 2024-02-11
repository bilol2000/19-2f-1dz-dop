import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../../Components'

const HeaderPage = () => {
    return (
        <>
            <header>
                <HeaderComponent />
            </header>
            <Outlet />
        </>
    )
}

export default HeaderPage