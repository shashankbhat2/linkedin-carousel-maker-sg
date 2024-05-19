import { MOBILE_ROUTES } from '@/lib/routes'
import {  NavLink } from 'react-router-dom'

const MobileNav = () => {
    return (
        <nav className='flex w-full md:hidden fixed justify-between border-t gap-0 bottom-0 bg-slate-50 p-1 border-1'>
            {MOBILE_ROUTES.map((route, i) => {
                return (
                    <NavLink
                        key={i}
                        to={route.path}
                        className={({ isActive, isPending }) =>
                            isActive ? "flex flex-col items-center gap-2 rounded-lg p-2 text-muted-foreground transition-all  text-blue-500  border-blue-500 bg-gr" : "flex flex-col items-center gap-2 rounded-lg p-2 text-muted-foreground transition-all hover:text-primary"
                          }                                            
                    >
                        <route.icon size="16px" />
                        <p className='text-xs font-bold'>{route.label}</p>
                        
                    </NavLink>
                )
            })}
        </nav>
    )
}

export default MobileNav