'use client';

import { useState } from 'react';
import styles from './Signup.module.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      {/* Formes décoratives */}
      <img src="/shapes/blue-square.svg" alt="" className={styles.blueSquare} />
      <img src="/shapes/green-triangle.svg" alt="" className={styles.greenTriangle} />
      <img src="/shapes/orange-dot.svg" alt="" className={styles.orangeDot} />
      <img src="/shapes/yellow-square.svg" alt="" className={styles.yellowSquare} />
      <img src="/shapes/red-circle.svg" alt="" className={styles.redCircle} />
      {/* Contenu principal */}
      <div className={styles.content}>
      <img
        src="/logo-drole2lab.svg"
        alt="Logo Drole2Lab"
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
          <button type="submit" className={styles.button}>M'inscrire</button>
        </form>
      </div>
    </div>
  );
}
