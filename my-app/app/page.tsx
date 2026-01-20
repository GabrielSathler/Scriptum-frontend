import { Button } from "@/components/ui/button";
import { Navbar } from "./components/navbar/navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black pt-16">
      
      <div className="mx-auto block w-full text-center">
        <h1 className="text-5xl font-bold">
          Bem vindo ao Scriptum!
        </h1>
        <p className="text-xl text-gray-500 mt-2">
          Onde pessoas colocam seus artigos online!
        </p>
        <Button variant={"outline"} className="cursor-pointer p-6 text-md mt-2 outline-1 border-black shadow-md">
          Ir para o Dashboard
        </Button>
      </div>
    </div>
    </div>
  );
}
