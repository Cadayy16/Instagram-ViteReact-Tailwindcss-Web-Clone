import { useEffect, useState } from "react"
import { useRef } from "react"
import Input from "./components/Input"
import { ImFacebook2 } from "react-icons/im";

function App() {

  const ref = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const enable = username && password

  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
      total = images.length,
      current = 0
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add('opacity-0')
      } else {
        images[total - 1].classList.add('opacity-0')
      }
      images[current].classList.remove('opacity-0')
      if (current === total - 1) {
        current = 0
      } else {
        current += 1
      }
    }
    imageSlider()
    let interval = setInterval(imageSlider, 2500)
    return () => {
      clearInterval(interval)
    }
  }, [ref])

  return (
    <div className='h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center'>
      <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[-46px_0]">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear" src="src/images/screenshot1.png"></img>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear" src="src/images/screenshot2.png"></img>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear" src="src/images/screenshot3.png"></img>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear" src="src/images/screenshot4.png"></img>
        </div>
      </div>

      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white border p-[40px] pt-10 pb-6">
          <a href="#" className="flex justify-center mb-8">
            <img className="h-[51px]" src="src/images/instagram-login.png"></img>
          </a>
          <form className="grid gap-y-1.5">
            <Input type="text" value={username} label="Telefon numarası, kullanıcı adı veya e-posta" onChange={e => setUsername(e.target.value)} />
            <Input type="password" value={password} label="Şifre" onChange={e => setPassword(e.target.value)} />
            <button disabled={!enable} type="submit" className="h-[30px] mt-1 text-sm bg-brand font-medium text-white rounded disabled:opacity-50">Giriş Yap</button>
            <div className="flex items-center my-3 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-[13px] text-gray-500 font-semibold">YA DA</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <a href="#" className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook mb-2">
              <ImFacebook2 size={20} />
              Facebook ile Giriş Yap
            </a>
            <a href="#" className="flex items-center text-xs justify-center text-link ">
              Şifreni mi unuttun ?
            </a>
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          Hesabın yok mu? <a href="#" className="font-semibold text-brand">Kaydol</a>
        </div>
      </div>
    </div>
  )
}

export default App
