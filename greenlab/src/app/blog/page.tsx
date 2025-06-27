'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'

type Article = {
  id: string
  title: string
  content: string
  fileUrl: string
  slug: string
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'))
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Article[]
      setArticles(data)
    }

    fetchArticles()
  }, [])

  return (
    <div className="min-h-screen bg-[#FFF2E9] font-montserrat px-4 lg:px-24 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-10 text-[#2D2D2D]">
        Nos dernières actualités :
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map(article => (
          <Link href={`/blog/${article.slug}`} key={article.id}>
            <div className="bg-[#FDF6ED] rounded-lg shadow border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
              {article.fileUrl ? (
                <Image
                  src={article.fileUrl}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  Image manquante
                </div>
              )}
              <div className="p-3 text-[#2D2D2D]">
                <h2 className="font-semibold">{article.title}</h2>
                <p className="text-sm">
                  {article.content.substring(0, 50)}...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
