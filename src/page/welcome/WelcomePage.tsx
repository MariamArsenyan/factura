import { Link } from "react-router-dom"


export const WelcomePage = () => {
  return (
    <div className="h-screen  flex justify-center items-center">
    <div className="relative w-4/12 bg-white flex items-center justify-center flex-col  rounded-lg p-4 text-[0.8125rem]/5 shadow-xl shadow-black/5 ring-2 ring-indigo-600 overflow-hidden gap-4">
        <h1 className="text-4xl font-semibold text-center relative z-10">
            ¡Bienvenido!
        </h1>
        <h2 className="text-center text-gray-500">
        Solicita tu presupuesto en unos simples pasos y obtén una propuesta <br />
        para destacar en el mundo digital
        </h2>
        <button className="button h-10 w-4/12  px-2  m-3 border border-grey rounded-full bg-indigo-600 text-white text-base" >
            <Link to='/home'>Solicita tu presupuesto</Link>
        </button>
    </div>
    </div>
  )
}


