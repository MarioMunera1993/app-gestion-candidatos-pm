import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-login-container">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold tracking-tight text-blue-900">
              Registro
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Crea una cuenta para acceder al tablero.
            </p>
          </div>
          <Link to="/" className="text-sm font-medium text-blue-700 hover:underline">
            Inicio
          </Link>
        </div>

        <form className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Jaime Zapata"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Usuario</label>
            <input
              type="text"
              placeholder="jaimezapata"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Correo</label>
            <input
              type="email"
              placeholder="correo@dominio.com"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Rol</label>
            <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2">
              <option value="admin">admin</option>
              <option value="recruiter">recruiter</option>
              <option value="viewer">viewer</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">
              Confirmar contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-blue-700/20 focus:ring-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm text-slate-600">
              Acepto términos y condiciones
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
            <p className="text-sm text-slate-600">
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="font-medium text-blue-700 hover:underline">
                Ir a login
              </Link>
            </p>
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
