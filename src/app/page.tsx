"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <div>
        <Link href="https://exams.wsyelhi.com/register">asd</Link>
        <motion.div
          className="w-10 h-10 bg-blue-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
