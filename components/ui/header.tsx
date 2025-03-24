import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3 rounded-2xl bg-white px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
            {/* Navigation Links */}
            <nav className="flex flex-1 justify-center space-x-8">
              <Link href="/sobre" className="text-black hover:text-gray-300">
                Sobre
              </Link>
              <Link href="/projetos" className="text-black hover:text-gray-300">
                Nossos Projetos
              </Link>
              <Link href="/contato" className="text-black hover:text-gray-300">
                Fale Conosco
              </Link>
            </nav>
          </div>



          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              {/* Quero Doar Button */}
              <Link
                href="/doar"
                className="bg-orange-500 text-white rounded-lg px-7 py-3 shadow hover:bg-orange-600"
              >
                Quero Doar
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
}


/*
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full bg-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">

          <div className="flex items-center">
            <Logo />
          </div>


          <nav className="flex flex-1 justify-center space-x-8">
            <Link href="/sobre" className="text-white hover:text-gray-300">
              Sobre
            </Link>
            <Link href="/projetos" className="text-white hover:text-gray-300">
              Nossos Projetos
            </Link>
            <Link href="/contato" className="text-white hover:text-gray-300">
              Fale Conosco
            </Link>
          </nav>

          <div className="flex items-center space-x-4">

            <Link
              href="/doar"
              className="bg-orange-500 text-white rounded-lg px-4 py-2 shadow hover:bg-orange-600"
            >
              Quero Doar
            </Link>


            <button className="text-white hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

*/