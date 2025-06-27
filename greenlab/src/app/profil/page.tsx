'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'
import Image from 'next/image'
import Header from '@/components/Header'

export default function ProfilPage() {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<{ firstName: string; lastName: string; adresse: string } | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser)

        const docRef = doc(db, 'users', currentUser.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data()
          setUserData({
            firstName: data.firstName,
            lastName: data.lastName,
            adresse: data.adresse || '',
          })
        }
      } else {
        setUser(null)
        setUserData(null)
      }
    })

    return () => unsubscribe()
  }, [])

  if (!user || !userData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFEEE4] text-[#2D2D2D] font-montserrat">
        <Header />
        <p className="text-lg font-semibold mt-12">Chargement du profil...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFEEE4] font-montserrat">
      {/* ✅ Header global */}
      <Header />

      {/* ✅ Contenu du profil */}
      <main className="px-6 py-16">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-[#2D2D2D]">Mon Profil</h1>
            <Image src="/logo-drole2lab.svg" alt="Logo" width={100} height={40} />
          </div>
          <div className="text-[#2D2D2D] space-y-4">
            <p><span className="font-semibold">Nom :</span> {userData.lastName}</p>
            <p><span className="font-semibold">Prénom :</span> {userData.firstName}</p>
            <p><span className="font-semibold">Adresse e-mail :</span> {user.email}</p>
            <p><span className="font-semibold">Adresse postale :</span> {userData.adresse}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
