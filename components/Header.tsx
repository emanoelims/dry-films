import Image from 'next/image'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/dry-films.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="netflix logo"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Filmes</li>
          <li className="headerLink">Novos & Popular</li>
          <li className="headerLink">Minha Lista</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Criança</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href="/account"> */}
        <Image
          width={32}
          height={32}
          onClick={logout}
          src="/avatar"
          alt=""
          className="cursor-pointer rounded"
        />
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header