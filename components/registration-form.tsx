"use client";
import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { z } from "zod";
import { QRCodeSVG } from "qrcode.react";
import { visitorSchema } from "@/lib/validations";
import { Check, Download, ArrowRight, Loader2 } from "lucide-react";
import { VisitorCard } from "@/components/visitor-card";

type visitorSchema = z.infer<typeof visitorSchema>;

type ResponseDataSchema = {
  id: string;
  name: string;
  email: string;
  college: string;
};

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<visitorSchema>({
    name: "",
    email: "",
    phone: "",
    college: "",
  });
  const [responseData, setResponseData] = useState<ResponseDataSchema | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const validated = visitorSchema.parse(formData);
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const visitorData = await response.json();
        setResponseData(visitorData);
        setStep(2);
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep((current) => Math.max(1, current - 1));
  };

  return (
    <main className="min-h-screen bg-black">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, #4F46E5 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto min-h-screen px-4">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="registration"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex min-h-screen flex-col items-center justify-center"
            >
              <div className="w-full max-w-md">
                <h1 className="mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-4xl font-bold text-transparent">
                  Register Now
                </h1>
                <p className="mb-8 text-white/60">
                  Join us at the biggest tech fest of the year
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { label: "Full Name", key: "name" },
                    { label: "Email Address", key: "email", type: "email" },
                    { label: "Phone Number", key: "phone", type: "tel" },
                    { label: "College Name", key: "college" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-medium text-white/80">
                        {field.label}
                      </label>
                      <input
                        type={field.type || "text"}
                        value={formData[field.key as keyof visitorSchema]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.key]: e.target.value,
                          })
                        }
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-colors focus:border-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                  ))}

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center rounded-xl bg-blue-500 px-6 py-3 font-medium text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex min-h-screen w-full flex-col items-center justify-center px-4 sm:px-0"
            >
              {responseData && (
                <VisitorCard
                  visitor={{
                    id: responseData.id,
                    name: responseData.name,
                    email: responseData.email,
                    college: responseData.college,
                  }}
                  onDownload={() => setStep(3)}
                  onBack={() => handleBack()}
                />
              )}
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex min-h-screen flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20"
              >
                <Check className="h-10 w-10 text-blue-500" />
              </motion.div>
              <h2 className="mb-2 text-3xl font-bold text-white">
                You're All Set!
              </h2>
              <p className="mb-8 text-white/60">
                We can't wait to see you at the tech fest. Don't forget to bring
                your pass!
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setStep(1);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    college: "",
                  });
                }}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-white hover:bg-white/20"
              >
                Register Another Visitor
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full"
                animate={{
                  backgroundColor:
                    i <= step ? "rgb(59, 130, 246)" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForm;
