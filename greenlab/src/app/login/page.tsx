"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: unknown) {
  if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erreur inconnue.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEEE4] relative flex items-center justify-center px-4">
      {/* Formes géométriques */}
      <Image src="/shapes/Polygon2.svg" alt="" width={60} height={60} className="absolute top-8 left-8" />
      <Image src="/shapes/rect01.svg" alt="" width={50} height={50} className="absolute top-10 right-20" />
      <Image src="/shapes/Star2.svg" alt="" width={40} height={40} className="absolute bottom-10 left-16" />

      {/* Contenu central */}
      <div className="bg-white shadow-md rounded-xl w-full max-w-sm px-6 py-8 text-center">
        <Image src="/logo-drole2lab.svg" alt="Logo" width={120} height={60} className="mx-auto mb-4" />
        <h1 className="text-lg font-semibold mb-6 text-[#262626]">Bienvenue</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 text-left text-black">
          <div>
            <label className="text-sm font-medium text-gray-700">Adresse e-mail</label>
            <input
              type="email"
              className="mt-1 w-full border rounded-full px-4 py-2 text-sm bg-[#FAFAFA]"
              placeholder="drole2labo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              className="mt-1 w-full border rounded-full px-4 py-2 text-sm bg-[#FAFAFA]"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button type="submit" className="mt-2 bg-[#A3ADF9] text-white font-semibold py-2 rounded-full hover:bg-[#8e9bf5] shadow-md">
            Se connecter
          </button>

          <p className="text-xs text-gray-600 text-center underline cursor-pointer">mot de passe oublié ?</p>
        </form>

        <div className="my-4 border-t border-gray-200"></div>

        <p className="text-sm text-black">
          Pas encore de compte ?{" "}
          <a href="/signup" className="text-[#7B73FF] font-semibold underline ">
            Je m&apos;enregistre !
          </a>
        </p>
      </div>
    </div>
  );
}
