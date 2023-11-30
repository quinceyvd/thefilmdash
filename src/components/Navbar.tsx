"use client";
import Heading from '@/components/elements/Heading'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname();
    const pageLink = 'py-2 px-4 hover:bg-neutral-800 ease-in-out duration-200 rounded-lg';
    const activePageLink = pageLink + ' bg-rose-700';
    return (
        <nav className="sticky top-0">
            <div className="flex flex-row items-center bg-neutral-900 py-3 px-2 text-white">
                <Link href="/">
                    <Image src="/logo-sm.png" alt="logo" width={60} height={60} />
                </Link>
                <div className="inline-block h-14 w-px bg-neutral-700 ml-4"></div>
                <div className='flex ml-6 w-[200px] justify-between'>
                    <Link href="/" className={pathname !== '/' ? pageLink : activePageLink}>Create</Link>
                    <Link href="/examples" className={pathname !== '/examples' ? pageLink : activePageLink}>Examples</Link>
                </div>
            </div>
        </nav>
    )
}