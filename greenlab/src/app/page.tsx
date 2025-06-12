'use client';

import { useState } from 'react';
import styles from './Signup.module.css';
import Image from 'next/image';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      {/* Formes décoratives */}
      <Image src="/shapes/blue-square.svg" alt="" width={30} height={30} className={styles.blueSquare} />
      <Image src="/shapes/green-triangle.svg" alt="" width={60} height={60} className={styles.greenTriangle} />
      <Image src="/shapes/orange-dot.svg" alt="" width={15} height={15} className={styles.orangeDot} />
      <Image src="/shapes/yellow-square.svg" alt="" width={35} height={35} className={styles.yellowSquare} />
      <Image src="/shapes/red-circle.svg" alt="" width={40} height={40} className={styles.redCircle} />
      {/* Contenu principal */}
      <div className={styles.content}>
      <Image
          src="/logo-drole2lab.svg"
          alt="Logo"
          width={120}
          height={120}
          className={styles.logo}
        />
        <h1 className={styles.title}>
        Bricolo, Recyclo, Rigolo
        </h1>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>M&apos;inscrire</button>
        </form>
      </div>
    </div>
  );
}
