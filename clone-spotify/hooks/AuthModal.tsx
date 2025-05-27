"use client";
import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useAuthModal from "@/hooks/useAuthModal";

export default function AuthModal() {
  const { isOpen, onClose } = useAuthModal();
  const supabase = useSupabaseClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) alert(error.message);
    else onClose();
  };

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) alert(error.message);
    else alert("Check your email to confirm sign up!");
  };

  const handleGithub = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({ provider: "github" });
    setLoading(false);
    if (error) alert(error.message);
  };

  const handleMagicLink = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    setLoading(false);
    if (error) alert(error.message);
    else alert("Check your email for the magic link!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-neutral-900 rounded-lg p-8 w-full max-w-md shadow-lg relative">
        <button className="absolute top-4 right-4 text-neutral-400" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-2 text-white">Welcome back</h2>
        <p className="mb-6 text-neutral-400">Login to your account.</p>
        <button
          onClick={handleGithub}
          className="w-full flex items-center justify-center gap-2 bg-neutral-800 text-white py-2 rounded mb-4 border border-neutral-700 hover:bg-neutral-700 transition"
          disabled={loading}
        >
          <svg width="20" height="20" fill="currentColor" className="mr-2"><path d="M10 .3a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 4.8c.85.004 1.7.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0010 .3"></path></svg>
          Sign in with Github
        </button>
        <div className="border-b border-neutral-700 my-4"></div>
        <label className="block text-neutral-400 mb-1">Email address</label>
        <input
          className="w-full mb-3 px-3 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none"
          placeholder="Your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        <label className="block text-neutral-400 mb-1">Your Password</label>
        <input
          className="w-full mb-4 px-3 py-2 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none"
          placeholder="Your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <button
          onClick={handleSignIn}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition mb-2"
          disabled={loading}
        >
          Sign in
        </button>
        <div className="flex flex-col gap-2 mt-2">
          <button onClick={handleMagicLink} className="text-sm text-neutral-400 hover:underline">Send a magic link email</button>
          <button className="text-sm text-neutral-400 hover:underline">Forgot your password?</button>
          <button onClick={handleSignUp} className="text-sm text-neutral-400 hover:underline">Don't have an account? Sign up</button>
        </div>
      </div>
    </div>
  );
}