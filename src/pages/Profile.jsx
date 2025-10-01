import { motion } from "framer-motion";
import { User, Mail, Briefcase, Star } from "lucide-react";

export default function Profile() {
  const user = {
    name: "Akbar Developer",
    email: "akbar@example.com",
    role: "Frontend Developer",
    rating: 4.9,
    bio: "🚀 React va TailwindCSS bo‘yicha 3 yillik tajribaga ega dasturchi. Kreativ UI va samarali kod yozishga qiziqaman.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-lg border border-white/20"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center text-center">
          <motion.img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-white shadow-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          <h1 className="text-2xl font-bold text-white mt-4 drop-shadow-md">
            {user.name}
          </h1>
          <p className="text-white/80">{user.role}</p>
        </div>

        {/* Info */}
        <div className="mt-8 space-y-4 text-white">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5" />
            <span>{user.role}</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-yellow-300" />
            <span>{user.rating} ⭐ Freelancer reytingi</span>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-6 text-sm text-white/90 leading-relaxed">{user.bio}</p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #9333ea" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg transition"
        >
          ✏️ Profilni Tahrirlash
        </motion.button>
      </motion.div>
    </div>
  );
}
