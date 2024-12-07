"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RegistrationSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container relative mx-auto px-4"
      >
        <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Ready to Join WINGS '25?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Register now to participate in the biggest technical festival of
              the year. Early bird registrations get special benefits!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl bg-blue-500 px-8 py-4 font-medium text-white hover:bg-blue-600"
                >
                  Register Now
                </motion.button>
              </Link>
              <Link href="/schedule">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-white/10 px-8 py-4 font-medium text-white hover:bg-white/5"
                >
                  View Schedule
                </motion.button>
              </Link>
            </div>{" "}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
