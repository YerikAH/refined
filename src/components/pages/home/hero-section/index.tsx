import { Button } from "../../../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <div className="container mx-auto flex flex-col h-full px-4 md:px-6">
        {/* Primera parte: texto y botones */}
        <div className="flex-1 flex flex-col justify-center pt-16 pb-8">
          <div className="max-w-3xl lg:max-w-[1200px]">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
              <div>
                <span>Creamos </span>
                <span className="text-gray-400">productos disruptivos </span>
                <span>y </span>
                <span className="text-gray-400">altamente innovadores</span>
              </div>
              <div className="mt-2">
                experiencial, navegando con nuestros socios hacia
              </div>
              <div className="mt-2">La era de la digitalización.</div>
            </h1>

            <div className="flex flex-wrap gap-4 mt-10">
              <Button className="rounded-full bg-white text-black hover:bg-gray-200 px-6 py-2 h-auto font-bold leading-tight md:text-base">
                Nuestros servicios
              </Button>
              <Button
                variant="outline"
                className="rounded-full bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800 px-6 py-2 h-auto font-bold leading-tight md:text-base"
              >
                Mirar video
              </Button>
            </div>
          </div>
        </div>

        {/* segunda parte: imagen */}
        <div className="w-full relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="https://wallpapers.com/images/hd/vertical-monitor-desktop-computer-99khwb885woqm6ii.jpg"
                alt="Workspace con monitores mostrando diseños"
                fill
                className="object-cover object-center brightness-30"
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
