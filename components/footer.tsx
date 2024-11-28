"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useRef } from "react";

export default function Footer() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <footer className="relative bg-black">
      {/* Footer Content */}
      <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Logo and Description */}
            <div className="md:col-span-2">
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

            {/* Quick Links */}
            <div>
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

            {/* Social Links */}
            <div>
              <h4 className="mb-4 font-medium text-white">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: "#" },
                  { icon: Linkedin, link: "#" },
                  { icon: Instagram, link: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-full border border-white/10 p-2 text-white/60 transition-colors hover:border-white/30 hover:text-white"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 text-center text-sm text-white/40">
            <p>© 2024 WINGS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
