'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { auth, db } from '@/lib/firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

interface UserData {
  email: string
  firstName: string
  lastName: string
}

export default function Header() {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setUserData(docSnap.data() as UserData)
        }
      } else {
        setUserData(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
  }

  return (
    <header className="w-full bg-[#E4F7B8] py-6 px-4 lg:px-24 flex justify-between items-center">
      <Image src="/shapes/Frame 100.png" alt="Logo" width={52} height={38} />

      <nav className="hidden lg:flex gap-6 font-semibold text-black">
        <Link href="/">Accueil</Link>
        <Link href="/activites">Activités</Link>
        <Link href="/calendrier">Calendrier</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/profil">Profil</Link>
      </nav>

      {userData ? (
        <div className="hidden lg:flex flex-col text-sm items-end text-[#2D2D2D]">
          <span>{userData.firstName} {userData.lastName}</span>
          <span className="text-xs">{userData.email}</span>
          <button
            onClick={handleLogout}
            className="mt-1 px-3 py-1 border border-black rounded-full hover:bg-[#cce8b5]"
          >
            Se déconnecter
          </button>
        </div>
      ) : (
        <div className="hidden lg:flex gap-2">
          <Link href="/login">
            <button className="border border-black px-4 py-1 rounded-full text-black hover:translate-y-1">
              Se connecter
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-[#9BAEF6] text-white px-4 py-1 rounded-full hover:translate-y-1">
              S&apos;inscrire
            </button>
          </Link>
        </div>
      )}
    </header>
  )
}
