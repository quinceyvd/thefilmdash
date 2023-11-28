import Heading from '@/components/elements/Heading'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div className="flex flex-row bg-neutral-900 py-3 px-2 font-[inter]">
                <Image src="/logo-sm.png" alt="logo" width={60} height={60} />
                <Link href="/" className='text-white'>Home</Link>
                <Link href="/examples" className='text-white'>Examples</Link>
            </div>
        </nav>
    )
}