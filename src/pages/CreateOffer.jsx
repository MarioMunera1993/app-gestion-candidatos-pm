import { Link } from "react-router-dom";

function CreateOffer() {
  return (
    <section className="mt-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Crear oferta</p>
            <p className="mt-1 text-sm text-slate-600">
              Completa la información básica de la vacante.
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
              name="id"
              placeholder="1"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Estado</label>
            <select
              name="status"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            >
              <option value="open">open</option>
              <option value="closed">closed</option>
              <option value="paused">paused</option>
            </select>
          </div>

          <div className="grid gap-2 md:col-span-2">
            <label className="text-xs font-medium text-slate-600">Título</label>
            <input
              type="text"
              name="title"
              placeholder="Backend Developer (Node.js)"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Empresa</label>
            <input
              type="text"
              name="company"
              placeholder="AndesFintech"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Ubicación</label>
            <input
              type="text"
              name="location"
              placeholder="Bogotá, CO"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Modalidad</label>
            <select
              name="modality"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            >
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Senioridad</label>
            <select
              name="seniority"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            >
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
              name="salaryMin"
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
              name="salaryMax"
              placeholder="7500"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Moneda</label>
            <select
              name="currency"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            >
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
              name="recruiterId"
              placeholder="2"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2 md:col-span-2">
            <label className="text-xs font-medium text-slate-600">
              Tech stack
            </label>
            <div className="grid gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 md:grid-cols-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="Node.js" className="h-4 w-4" />
                Node.js
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="TypeScript" className="h-4 w-4" />
                TypeScript
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="JavaScript" className="h-4 w-4" />
                JavaScript
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="PostgreSQL" className="h-4 w-4" />
                PostgreSQL
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="MySQL" className="h-4 w-4" />
                MySQL
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="MongoDB" className="h-4 w-4" />
                MongoDB
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="Redis" className="h-4 w-4" />
                Redis
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="Docker" className="h-4 w-4" />
                Docker
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="Kubernetes" className="h-4 w-4" />
                Kubernetes
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="techStack" value="AWS" className="h-4 w-4" />
                AWS
              </label>
            </div>
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
              Crear oferta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateOffer;
