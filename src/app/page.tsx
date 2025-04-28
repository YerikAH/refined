import Header from "../components/pages/shared/header";
import Hero from "../components/pages/home/hero-section";
import Footer from "../components/pages/shared/footer";
import Portfolio from "../components/pages/home/portfolio-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </main>
  );
}
