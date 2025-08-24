
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Landing() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await fetch('/api/checkout_sessions', { method: 'POST' });
    const data = await res.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans flex flex-col justify-center items-center">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent text-center">
        Запусти онлайн-бизнес за 24 часа
      </motion.h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-10 text-center max-w-2xl">
        Готовые автоворонки + AI-шаблоны + мини-курс = твоя система заработка, которая работает бесконечно.
      </p>
      <Button onClick={handleCheckout} size="lg" className="rounded-2xl px-12 py-6 text-xl shadow-2xl">
        Купить сейчас — 3 990 ₽
      </Button>
    </div>
  );
}
