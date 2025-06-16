'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { FirebaseError } from 'firebase/app';
import Image from 'next/image';
import styles from './Signup.module.css';

export default function SignupPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Connexion réussie !");
        router.push('/home'); // ✅ redirection après connexion
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        setMessage("Inscription réussie !");
        router.push('/home'); // ✅ redirection après inscription
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        setMessage(error.message);
      } else {
        setMessage("Une erreur inconnue est survenue.");
      }
    }    
  };

  return (
    <div className={styles.container}>
      {/* Formes décoratives SVG */}
      <Image src="/shapes/red-circle.svg" alt="" width={40} height={40} className={`${styles.redCircle} ${styles.wiggle}`} />
      <Image src="/shapes/yellow-square.svg" alt="" width={35} height={35} className={`${styles.yellowSquare} ${styles.wiggle}`} />
      <Image src="/shapes/blue-square.svg" alt="" width={30} height={30} className={`${styles.blueSquare} ${styles.wiggle}`} />
      <Image src="/shapes/green-triangle.svg" alt="" width={60} height={60} className={`${styles.greenTriangle} ${styles.wiggle}`} />
      <Image src="/shapes/orange-dot.svg" alt="" width={15} height={15} className={`${styles.orangeDot} ${styles.wiggle}`} />

      <div className={styles.content}>
        {/* Logo au-dessus du titre */}
        <Image
          src="/logo-drole2lab.svg"
          alt="Logo Drole2Lab"
          width={120}
          height={120}
          className={styles.logo}
        />
        <h1 className={styles.title}>Bricolo, Recyclo, Rigolo</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Nom"
              value={name}
              onChange={e => setName(e.target.value)}
              className={styles.input}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            {isLogin ? "Se connecter" : "M'inscrire"}
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className={styles.toggle}
          >
            {isLogin ? "Créer un compte" : "Déjà inscrit ? Se connecter"}
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
