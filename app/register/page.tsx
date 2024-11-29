import Hero from "@/components/hero-component";
import RegistrationTabs from "@/components/registration-tabs";

export default function Register() {
  return (
    <main className="min-h-screen bg-black">
      <Hero
        preTitle="Experience the thrill"
        title="Join the"
        titleAccent=" Fun"
        subtitle="Join us at Wings'25 - Register as a visitor, participant, or book your accommodation"
        enableParallax={true}
        enableGlowingOrbs={false}
        enableFloatingElements={true}
        enableGrid={false}
        enableScrollIndicator={true}
      />
      <RegistrationTabs />
    </main>
  );
}
