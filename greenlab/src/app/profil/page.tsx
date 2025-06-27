'use client';

import { useState, useEffect } from 'react';
import { auth, db, storage } from '@/lib/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { User } from "firebase/auth"; // 🔽 à ajouter en haut

export default function ProfilePage() {
  
const [user, setUser] = useState<User | null>(null); // 🔄 ici
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/login');
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const generateSlug = (str: string) =>
    str
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !file || !user) return;

    setUploading(true);

    try {
      const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(storageRef);

      const slug = generateSlug(title);

      await addDoc(collection(db, 'articles'), {
        title,
        content,
        fileUrl,
        createdAt: serverTimestamp(),
        author: user.email,
        slug,
      });

      setTitle('');
      setContent('');
      setFile(null);
      alert('Article publié avec succès !');
    } catch (error) {
      console.error('Erreur lors de la publication :', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#ffeee6] flex flex-col items-center px-4 pt-10">
      <h1 className="text-3xl font-bold mb-6">Profil de {user?.email}</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-md w-full max-w-lg space-y-4">
        <div>
          <label className="block mb-1 font-medium">Titre de l’article</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Contenu</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image de l’article</label>
          <input
            type="file"
            accept="image/*"
            className="w-full"
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded font-semibold disabled:opacity-50"
          disabled={uploading}
        >
          {uploading ? 'Publication...' : 'Publier'}
        </button>
      </form>
    </main>
  );
}
