import Link from "next/link";

const data = [
  { id: "produtos", label: "Produtos", href: "/produtos" },
  { id: "quem-somos", label: "Quem Somos", href: "/quem-somos" },
  { id: "solucoes", label: "Soluções", href: "/solucoes" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <nav className="hidden md:flex gap-6 items-center text-center">
            <div className="flex items-center gap-6 py-8">
              <Link href="/" className="text-lg font-bold text-slate-900">
                <span className="">Scriptum</span>
              </Link>

              {data.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="relative flex text-md font-medium text-slate-700 hover:text-slate-900 group"
                >
                  <span>
                    {item.label}
                    <span className="block absolute left-0 h-0.5 w-0 bg-slate-900 transition-all group-hover:w-full duration-200" />
                  </span>

                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-50">
            </button>

            <Link href="/login" className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200 rounded-full">
              Entrar
            </Link>

            <Link href="/cadastro" className="hidden sm:inline-flex items-center px-3 py-1.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800">
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

/*
  Estilização: uso de Tailwind para aparência moderna inspirada no Medium.
  - Fundo translúcido com `backdrop-blur`
  - Links com underline animado ao hover
  - Botões em estilo pill à direita
*/