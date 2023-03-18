import { useState } from "react"
import LazyImage from "./components/LazyImage"
import type { MouseEvent } from "react"

const random = (num: number):number => {
  return Math.floor(Math.random() * num) + 1
}


function App():JSX.Element {
  const [foxes, setFoxes] = useState<string[]> ([])

  const addNewFox = (event: MouseEvent<HTMLButtonElement>):void => {
    event.preventDefault()

    const newImage: string = `https://randomfox.ca/images/${random(123)}.jpg`
    setFoxes([
      ...foxes,
      newImage
    ])
  }

  return (
    <main className="App flex w-full justify-center items-center p-4 flex-col">
      <div className="flex max-w-xl justify-center items-center flex-col text-center">
        <p className="text-lg leading-8 font-semibold text-indigo-600 pt-6">¡Crea una galería de zorros!</p>
        <h1 className="text-3xl font-bold text-gray-800 mt-1">Random Fox</h1>
        <p className="text-lg text-gray-600 pt-6 pb-10">Este sitio web ofrece una galería de imágenes de zorritos que se muestran de manera aleatoria en pantalla. Las imágenes solo se cargarán cuando se visualicen en pantalla.</p>
        <button onClick={addNewFox} className="rounded px-5 py-2.5 mb-12 overflow-hidden group bg-indigo-600 relative hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-600 transition-all ease-out duration-300 font-semibold">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Añadir zorro 🦊</span>
        </button>
      </div>

      {
        foxes.length === 0
          ? <p className="text-lg leading-8 font-semibold text-gray-800">Aquí apareceran tus zorritos<span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-bold">...</span></p>
          : <div className="gap-4 lg:columns-3 2xl:columns-4 columns-2 p-4">
            {
              foxes.map((fox, index) => (
                <div key={index} className="my-4 p-4 bg-white hover:bg-gray-50 shadow rounded-lg border border-gray-300">
                  <LazyImage src={fox} alt="zorro" className="h-auto max-w-full rounded-md shadow-sm bg-gray-300 border border-gray-300" />
                </div>
              ))
            }
            </div>
      }

    </main>
  )
}

export default App
