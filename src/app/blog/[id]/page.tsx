'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Article = {
  title: string;
  content: string;
  fileUrl?: string;
  author: string;
};

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, 'articles', id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setArticle(docSnap.data() as Article);
    };
    fetchArticle();
  }, [id]);

  if (!article) return <p>Chargement...</p>;

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto' }}>
      <h1>{article.title}</h1>
      <p style={{ whiteSpace: 'pre-wrap' }}>{article.content}</p>

      {article.fileUrl && (
        <div style={{ marginTop: '1rem' }}>
          <p>📎 Fichier joint :</p>
          {article.fileUrl.endsWith('.pdf') ? (
            <iframe src={article.fileUrl} width="100%" height="400px" />
          ) : (
            <Image
              src={article.fileUrl}
              alt="Pièce jointe"
              width={600}
              height={400}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
          <p>
            <a href={article.fileUrl} target="_blank" rel="noopener noreferrer">
              🔗 Ouvrir dans un nouvel onglet
            </a>
          </p>
        </div>
      )}
    </div>
  );
}