import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="flex min-h-screen flex-col">
        <header className="w-full border-b border-slate-200">
          <div className="flex w-full items-center justify-between px-6 py-5 md:px-10">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600/10 ring-1 ring-blue-700/15">
                <div className="h-4 w-4 rounded bg-blue-700" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight text-blue-800">Gestión de candidatos</p>
                <p className="text-xs text-slate-500">Usuarios · Ofertas · Postulantes</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-blue-800 hover:bg-slate-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Registro
              </Link>
            </div>
          </div>
        </header>

        <main className="flex w-full flex-1 items-center px-6 py-12 md:px-10">
          <section className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight text-blue-900 md:text-6xl">
                Selección simple, control total.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                Organiza usuarios, publica ofertas y da seguimiento a postulantes desde un panel claro y consistente.
              </p>

              <div className="mt-8 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-blue-800">
                  Usuarios
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-blue-800">
                  Ofertas
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-blue-800">
                  Postulantes
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">Módulos</p>
                  <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-800">
                    Panel
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-xs text-slate-500">Usuarios</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">Roles y accesos</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-xs text-slate-500">Ofertas</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">Vacantes y estados</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-xs text-slate-500">Postulantes</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">Seguimiento por etapa</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-slate-200">
          <div className="flex w-full items-center justify-between px-6 py-6 text-xs text-slate-500 md:px-10">
            <p>Gestión de candidatos</p>
            <p>Usuarios · Ofertas · Postulantes</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
