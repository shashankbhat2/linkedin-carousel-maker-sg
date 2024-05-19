import React, { Fragment } from 'react'
import {
    Link,
    NavLink,
} from "react-router-dom";
import {
    ChevronsUpDown,
    Info,
    Timer,
    Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Logo from "@/assets/logo.svg"
import CreateButton from '../ui/create-button';
import { ROUTES } from '@/lib/routes';
import { Progress } from "@/components/ui/progress"
import MobileNav from '../ui/mobile-nav';

type Props = {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <Fragment>
            <header className="flex h-16 w-full items-center justify-between border-b bg-muted/40 p-5">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center gap-2 font-semibold">
                        <img src={Logo} alt='Supergrow.ai' />
                    </Link>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className='w-auto px-2 py-0 flex gap-2 border text-slate-600 ring-0 outline-none active:outline-none focus:outline-none'>
                            <p className="uppercase tracking-wider text-xs font-bold">Default</p>
                            <ChevronsUpDown size="14px" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className="flex flex-1 h-full  min-h-screen">
                <div className="hidden bg-muted/40 md:flex flex-col gap-2 border-r">
                    <div className="flex flex-col">
                        <div className="flex flex-col  flex-1 w-auto">
                            <nav className="flex gap-3  flex-col items-start text-sm font-medium">
                                {ROUTES.map((route, index) => (
                                    <NavLink
                                        key={index}
                                        to={route.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-3 w-full p-3 text-muted-foreground hover:text-primary border-r-4 bg-gradient-to-r from-white to-blue-50 text-blue-500 border-blue-500"
                                                : "flex items-center gap-3 p-3 text-muted-foreground hover:text-primary"
                                        }
                                    >
                                        <route.icon size="16px" />
                                        {route.label}
                                    </NavLink>
                                ))}


                            </nav>

                        </div>
                    </div>
                    <div className=" px-2 py-2">
                        <Card className='w-[250px] flex flex-col p-5 gap-5'>
                            <div className="flex w-full justify-between items-center">
                                <h1 className='text-xs'>Words Generated</h1>
                                <div className="flex items-center gap-1">
                                    <Info size="14px" />
                                    <span className='text-xs'>0.3K/3K</span>
                                </div>
                            </div>
                            <Progress value={30} progressBarClassName="bg-blue-500" />
                            <span className='text-xs text-muted-foreground'>You are on a trial plan</span>
                        </Card>
                    </div>
                </div>
                <section className="flex flex-col w-full">
                    <div className="flex py-3 px-2 w-full justify-center items-center gap-2 md:gap-4 text-sm font-medium border-b bg-slate-50">
                        <Timer />
                        <span className='text-xs md:text-sm text-muted-foreground'>Your free trial ends in just 2 days</span>
                        <Button className='gap-2 w-auto p-2 text-xs rounded-full items-center justify-center'>

                            <Zap size="14px" fill='white' />
                            Upgrade Now</Button>
                    </div>
                    {children}
                </section>
            </main>
            <CreateButton />
            <MobileNav />
        </Fragment>
    )
}

export default DashboardLayout