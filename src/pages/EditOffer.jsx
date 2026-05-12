import { Link } from "react-router-dom";

function EditOffer() {
  return (
    <section className="mt-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Editar oferta</p>
            <p className="mt-1 text-sm text-slate-600">
              Ajusta la información de la vacante (sin fecha de creación).
            </p>
          </div>
          <Link
            to="../offers/"
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            Volver a ofertas
          </Link>
        </div>

        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">ID</label>
            <input
              type="text"
              placeholder="1"
              disabled
              className="cursor-not-allowed rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 opacity-70 outline-none"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Estado</label>
            <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2">
              <option value="open">open</option>
              <option value="closed">closed</option>
              <option value="paused">paused</option>
            </select>
          </div>

          <div className="grid gap-2 md:col-span-2">
            <label className="text-xs font-medium text-slate-600">Título</label>
            <input
              type="text"
              placeholder="Backend Developer (Node.js)"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Empresa</label>
            <input
              type="text"
              placeholder="AndesFintech"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Ubicación</label>
            <input
              type="text"
              placeholder="Bogotá, CO"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Modalidad</label>
            <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2">
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Senioridad</label>
            <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2">
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">
              Salario mínimo
            </label>
            <input
              type="number"
              placeholder="5500"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">
              Salario máximo
            </label>
            <input
              type="number"
              placeholder="7500"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Moneda</label>
            <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2">
              <option value="USD">USD</option>
              <option value="COP">COP</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">
              Recruiter ID
            </label>
            <input
              type="number"
              placeholder="2"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2 md:col-span-2">
            <label className="text-xs font-medium text-slate-600">
              Tech stack
            </label>
            <input
              type="text"
              placeholder="Node.js, TypeScript, PostgreSQL, Docker"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 pt-2 md:col-span-2">
            <Link
              to="../offers/"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-blue-800 hover:bg-slate-50"
            >
              Cancelar
            </Link>
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditOffer;
