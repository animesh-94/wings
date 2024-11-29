import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";
import Image from "next/image";
import { toPng } from "html-to-image";
import { Download, ArrowLeft } from "lucide-react";

interface VisitorCardProps {
  visitor: {
    id: string;
    name: string;
    email: string;
    college: string;
  };
  onDownload: () => void;
  onBack: () => void;
}

export function VisitorCard({ visitor, onDownload, onBack }: VisitorCardProps) {
  const handleDownload = async () => {
    const card = document.getElementById("visitor-card");
    if (card) {
      try {
        const dataUrl = await toPng(card, { quality: 1.0 });
        const link = document.createElement("a");
        link.download = `visitor-pass-${visitor.id}.png`;
        link.href = dataUrl;
        link.click();
        // Call onDownload after successful download
        onDownload();
      } catch (error) {
        console.error("Error downloading card:", error);
      }
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onBack}
        className="flex items-center gap-2 my-2 text-white/60 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to registration
      </motion.button>

      <div
        id="visitor-card"
        className="relative overflow-hidden rounded-2xl border border-white bg-gradient-to-br from-blue-900 via-black to-purple-900 p-8 backdrop-blur-lg"
      >
        {/* Background Effect */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent_85%)]" />

        {/* Logo and Event Name */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-white/60">VISITOR PASS</h3>
            <h4 className="hero-heading !text-3xl text-white">
              Wings<span className="text-blue-500">25</span>
            </h4>
          </div>
          <Image
            src="/logo-blue-transparent.png"
            width={100}
            height={50}
            alt="LOGO"
          />
        </div>

        {/* Main Content */}
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white">{visitor.name}</h2>
              <p className="text-sm text-white/60">{visitor.college}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-white/80">{visitor.email}</p>
              <p className="text-xs text-white/40">ID: {visitor.id}</p>
            </div>
          </div>

          {/* QR Code */}
          <div className="rounded-xl bg-white p-2">
            <QRCodeSVG
              value={visitor.id}
              size={100}
              level="H"
              className="h-24 w-24"
            />
          </div>
        </div>

        {/* Bottom Design */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="text-xs text-white/40">Valid for all days</div>
          <div className="text-xs font-medium text-white/60">
            January 21-23, 2024
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Download Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleDownload}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40"
      >
        <Download className="h-5 w-5" />
        Download Pass
      </motion.button>
    </div>
  );
}
