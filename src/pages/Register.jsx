import { motion } from "framer-motion";

export default function Register() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient" />

      {/* 🔥 Floating Circles */}
      <div className="absolute top-16 right-16 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-400/30 rounded-full blur-3xl animate-bounce" />

      {/* 🔥 Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-full max-w-md border border-white/20"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          ✨ Ro‘yxatdan o‘tish
        </h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Ism"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="password"
            placeholder="Parol"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #8b5cf6" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg transition"
          >
            Ro‘yxatdan o‘tish
          </motion.button>
        </form>

        <p className="text-center text-sm text-white/80 mt-6">
          Hisobingiz bormi?{" "}
          <a href="/login" className="underline hover:text-white">
            Kirish
          </a>
        </p>
      </motion.div>
    </div>
  );
}
