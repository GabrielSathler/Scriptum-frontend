"use client"

import { Button } from "@/components/ui/button";
import { Navbar } from "./components/navbar/navbar";
import Image from "next/image";
import Typewriter from "typewriter-effect";



export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <Navbar />

      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-80" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center font-sans dark:bg-black pt-16">
        <div className="mx-auto block w-full text-left transform -translate-y-12 max-w-7xl px-8">
          <h1 className="text-7xl font-bold leading-tight">
            <Typewriter
              options={{
                delay: 70,
                cursor: "|",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Scriptum, Ideas")
                  .pauseFor(500)
                  .typeString("<br />& Articles")
                  .start();
              }}
            />
          </h1>
          <p className="text-xl text-gray-500 mt-2">
            Onde pessoas colocam seus artigos online!
          </p>
          <Button variant={"outline"} className="cursor-pointer p-6 text-md mt-2 outline-1 border-black shadow-md">
            Ir para o Dashboard
          </Button>
        </div>
      </div>
      <Image
        src="/imagem_writer.webp"
        alt="Background image"
        width={500}
        height={500}
        className="hidden md:block absolute left-355 top-45 z-0 pointer-events-none opacity-90"
      />
    </div>
  );
}

