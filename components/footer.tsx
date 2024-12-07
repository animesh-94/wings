"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black">
      {/* Footer Content */}
      <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <h3 className="font-zentry text-2xl font-bold text-white">
                WINGS <span className="text-blue-500">'25</span>
              </h3>
              <p className="mt-4 text-white/60">
                WINGS '25 is the annual technical festival of Government
                Engineering College Aurangabad, Chh. Sambhajinagar, bringing
                together the brightest minds and innovative ideas under one
                roof.
              </p>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-2">
              <h4 className="mb-4 font-medium text-white">Contact Us</h4>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Technical Secretary */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h5 className="font-medium text-white">
                    Technical Secretary
                  </h5>
                  <div className="mt-2 space-y-2">
                    <p className="text-white/80">Anuj Adhav</p>
                    <a
                      href="tel:+919765988071"
                      className="flex items-center gap-2 text-white/60 hover:text-white"
                    >
                      <Phone size={14} />
                      +91 9765988071
                    </a>
                    <a
                      href="mailto:adhavanuj03@gmail.com"
                      className="flex items-center gap-2 text-white/60 hover:text-white"
                    >
                      <Mail size={14} />
                      adhavanuj03@gmail.com
                    </a>
                  </div>
                </div>

                {/* Technical Lead */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h5 className="font-medium text-white">Technical Lead</h5>
                  <div className="mt-2 space-y-2">
                    <p className="text-white/80">Akash Sawade</p>
                    <a
                      href="tel:+918767354612"
                      className="flex items-center gap-2 text-white/60 hover:text-white"
                    >
                      <Phone size={14} />
                      +91 8767354612
                    </a>
                    <a
                      href="mailto:akashsawade15@gmail.com"
                      className="flex items-center gap-2 text-white/60 hover:text-white"
                    >
                      <Mail size={14} />
                      akashsawade15@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links and Social */}
            <div>
              <div className="mb-8">
                <h4 className="mb-4 font-medium text-white">Quick Links</h4>
                <ul className="space-y-2">
                  {["Events", "Gallery", "Team", "Register"].map((link) => (
                    <li key={link}>
                      <a
                        href={`/${link.toLowerCase()}`}
                        className="text-white/60 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-medium text-white">Follow Us</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://instagram.com/geccs_wings"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-full border border-white/10 p-2 text-white/60 transition-colors hover:border-white/30 hover:text-white"
                  >
                    <Instagram size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 text-center text-sm text-white/40">
            <p>© 2025 WINGS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
