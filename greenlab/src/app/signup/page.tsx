"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      // Enregistrer les infos supplémentaires dans Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        firstName: form.prenom,
        lastName: form.nom,
        address: form.adresse,
      });

      router.push("/accueil");
    } catch (err: unknown) {
  if (err instanceof Error) {
    console.error("Erreur lors de l'inscription :", err.message);
  } else {
    console.error("Une erreur inconnue est survenue.");
  }
}
  };

  return (
    <div className="min-h-screen bg-[#FFEEE4] relative flex items-center justify-center px-4">
      {/* Formes décoratives */}
      <Image src="/shapes/Polygon2.svg" alt="" width={60} height={60} className="absolute top-8 left-8" />
      <Image src="/shapes/rect01.svg" alt="" width={50} height={50} className="absolute top-10 right-20" />
      <Image src="/shapes/Star2.svg" alt="" width={40} height={40} className="absolute bottom-10 left-16" />

      <div className="bg-white shadow-md rounded-xl w-full max-w-sm px-6 py-8 text-center">
        <Image src="/logo-drole2lab.svg" alt="Logo" width={120} height={60} className="mx-auto mb-4" />
        <h1 className="text-lg font-semibold mb-6 text-[#262626] ">Bienvenue</h1>

        <h2 className="text-sm font-semibold mb-2 text-black">Étape {step}</h2>
        <div className="w-full h-1 bg-gray-200 mb-4">
          <div className={`h-1 bg-[#A3ADF9]`} style={{ width: step === 1 ? "50%" : "100%" }}></div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left text-black">
          {step === 1 ? (
            <>
              <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} required className="w-full border rounded-full px-4 py-2 text-sm bg-[#FAFAFA]" />
              <input name="prenom" placeholder="Prénom" value={form.prenom} onChange={handleChange} required className="w-full border rounded-full px-4 py-2 text-sm bg-[#FAFAFA]" />
              <input name="adresse" placeholder="Adresse postale" value={form.adresse} onChange={handleChange} required className="w-full border rounded-full px-4 py-2 text-sm bg-[#FAFAFA]" />
              <button type="button" onClick={() => setStep(2)} className="bg-[#A3ADF9] text-white font-semibold py-2 rounded-full hover:bg-[#8e9bf5] shadow-md">
                Suivant
              </button>
            </>
          ) : (
            <>
              <input name="email" type="email" placeholder="Adresse e-mail" value={form.email} onChange={handleChange} required className="w-full border rounded-full px-4 py-2 text-sm bg-[#FAFAFA]" />
              <input name="password" type="password" placeholder="Mot de passe" value={form.password} onChange={handleChange} required className="w-full border rounded-full px-4 py-2 text-sm bg-[#FAFAFA]" />
              <input name="confirm" type="password" placeholder="Confirmer le mot de passe" value={form.confirm} onChange={handleChange} required className="w-full border rounded-full px-4 py-2 text-sm bg-[#FAFAFA]" />
              <button type="submit" className="bg-[#A3ADF9] text-white font-semibold py-2 rounded-full hover:bg-[#8e9bf5] shadow-md">
                S’inscrire
              </button>
              <button type="button" onClick={() => setStep(1)} className="text-[#8e9bf5] font-semibold underline text-sm">
                Retour
              </button>
            </>
          )}
          <p className="text-sm">
            Vous avez déjà un compte ?{" "}
            <a href="/login" className="text-[#7B73FF] font-semibold underline">
              Je me connecte !
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
