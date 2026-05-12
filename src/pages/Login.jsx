import { useState, useEffect } from "react"
import { end_points } from "../services/api"
import { redirectAlert } from "../helpers/alerts"
import { saveLocalStorage } from "../helpers/local-storage"
import { Link } from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [users, setUsers] = useState([])

  function getUsers() {
    fetch(end_points.users)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getUsers()
  }, [])

  function findUser() {
    let auth = users.find((item) => user == item.username && password == item.password)
    return auth
  }

  function signIn(e) {
    e.preventDefault()
    if (user === "" || password === "") return redirectAlert("Campos Vacíos", "El campo usuario y/o contraseña está vacío", "/login", "warning")
    if (findUser()) {
      saveLocalStorage("user", findUser())
      redirectAlert("Bienvenido al aistema", "Será redireccionado al dashboard", "/dashboard", "success")
      return
    }
    if (findUser() == undefined) return redirectAlert("Error de credenciales", "Usuario y/o conttaseña incorrecto", "/login", "error")
  }

  return (
    <div className="form-login-container">
      <div
        class="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden"
      >
        <div class="flex flex-col justify-center items-center space-y-2">
          <h2 class="text-2xl font-medium text-slate-700">Login</h2>
          <p class="text-slate-500">Enter details below.</p>
        </div>
        <form class="w-full mt-4 space-y-3">
          <div>
            <input
              class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="Username"
              id="username"
              name="username"
              type="text"
              onChange={(e) => { setUser(e.target.value) }}
            />
          </div>
          <div>
            <input
              class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={function (e) { setPassword(e.target.value) }}
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                class="mr-2 w-4 h-4"
                id="remember"
                name="remember"
                type="checkbox"
                onChange={() => setRemember(!remember)}
              />
              <span class="text-slate-500">Remember me </span>
            </div>
            <span className="text-slate-400">Forgot Password</span>
          </div>
          <button
            class="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
            id="login"
            name="login"
            type="submit"
            onClick={(e) => signIn(e)}
          >
            login
          </button>
          <p class="flex justify-center space-x-1">
            <span class="text-slate-700"> Have an account? </span>
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

    </div>
  )
}

export default Login
