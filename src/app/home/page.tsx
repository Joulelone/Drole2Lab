'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import styles from './Home.module.css';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        router.push('/');
      } else {
        setUser(firebaseUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Bienvenue sur Drôle2Lab 🎉</h1>
      {user && (
        <>
          <p className={styles.userInfo}>
            Connecté en tant que : <span>{user.displayName || user.email}</span>
          </p>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Se déconnecter
          </button>
          <button onClick={() => router.push('/home/blog')}
            className={styles.blogButton}
            >
            Aller au Blog
            </button>
        </>
      )}
    </main>
  );
}
