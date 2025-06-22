'use client';

import { useEffect, useState } from 'react';
import { auth, db, storage } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore';
import { User } from 'firebase/auth';
import styles from './Blog.module.css';

type Article = {
  id: string;
  title: string;
  content: string;
  fileUrl?: string;
  author: string;
};

export default function BlogPage() {
  const [user, setUser] = useState<User | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((firebaseUser) => {
      if (!firebaseUser) router.push('/');
      else setUser(firebaseUser);
    });
    return () => unsub();
  }, [router]);

  useEffect(() => {
    const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Article[];
      setArticles(data);
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let fileUrl: string | null = null;

      if (file) {
        const uniqueName = `${Date.now()}-${file.name}`;
        const fileRef = ref(storage, `blog-files/${uniqueName}`);
        await uploadBytes(fileRef, file);
        fileUrl = await getDownloadURL(fileRef);
      }

      await addDoc(collection(db, 'articles'), {
        title,
        content,
        fileUrl,
        author: user?.displayName || user?.email || 'Anonyme',
        createdAt: serverTimestamp(),
      });

      setTitle('');
      setContent('');
      setFile(null);
      setMessage('✅ Article publié !');
    } catch {
      setMessage("❌ Erreur lors de l'ajout.");
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.push('/home')}>
        ← Retour à l’accueil
      </button>

      <h1>Blog – Ajouter un article</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
          required
        />
        <textarea
          placeholder="Contenu"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={6}
          style={{ width: '100%', padding: 8 }}
          required
        />
        <input
          type="file"
          onChange={e => setFile(e.target.files?.[0] || null)}
          style={{ marginTop: 8 }}
        />
        <button type="submit" style={{ marginTop: 8, padding: '0.5rem 1rem' }}>
          Publier
        </button>
        {message && <p>{message}</p>}
      </form>

      <h2>Articles publiés</h2>
      {articles.map((article) => (
        <div
          key={article.id}
          onClick={() => router.push(`/blog/${article.id}`)}
          style={{
            marginBottom: 16,
            padding: 12,
            border: '1px solid #ccc',
            borderRadius: 8,
            cursor: 'pointer',
            backgroundColor: '#f9f9f9'
          }}
        >
          <h3>{article.title}</h3>
          <p style={{ color: '#555' }}>
            {article.content.length > 200 ? article.content.slice(0, 200) + '...' : article.content}
          </p>
          <p style={{ fontSize: '0.9rem', color: '#888' }}>Par {article.author}</p>
        </div>
      ))}
    </div>
  );
}
