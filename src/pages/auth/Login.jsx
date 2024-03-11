import { useEffect, useState } from "react"
import { useRef } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button";
import { ImFacebook2 } from "react-icons/im";
import { Navigate, useLocation, Link } from 'react-router-dom';
import { login } from "../../firebase";
import { Formik, Form } from "formik";
import { LoginSchema } from "../../validation";
import Separator from "../../components/Separator";
import { useSelector } from "react-redux";


function Login() {

    const user = useSelector(state => state.auth.user)
    const location = useLocation()
    const ref = useRef()


    useEffect(() => {
        let images = ref.current.querySelectorAll('img'),
            total = images.length,
            current = 0
        const imageSlider = () => {
            images[(current > 0 ? current : total) - 1].classList.add('opacity-0')
            images[current].classList.remove('opacity-0')
            current = current === total - 1 ? 0 : current + 1
        }
        imageSlider()
        let interval = setInterval(imageSlider, 2500)
        return () => {
            clearInterval(interval)
        }
    }, [ref])


    const images = [
        '../src/images/screenshot1.png',
        '../src/images/screenshot2.png',
        '../src/images/screenshot3.png',
        '../src/images/screenshot4.png',
    ]

    if (user) {
        return <Navigate to={location.state?.return_url || '/'} replace={true} />
    }


    const handleSubmit = async (values, actions) => {
        await login(values.username, values.password)
    }

    return (
        <div className='h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center'>
            <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[-46px_0]">
                <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
                    {images.map((image, key) => (
                        <img key={key} className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear" src={image}></img>
                    ))}
                </div>
            </div>

            <div className="w-[350px] grid gap-y-3">
                <div className="bg-white border p-[40px] pt-10 pb-6">
                    <a href="#" className="flex justify-center mb-8">
                        <img className="h-[51px]" src="../src/images/instagram-login.png"></img>
                    </a>
                    <Formik
                        validationSchema={LoginSchema}
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, isValid, dirty, values }) => (
                            <Form className="grid gap-y-1.5">
                                <Input name="username" label="Telefon numarası, kullanıcı adı veya e-posta" />
                                <Input type="password" name="password" label="Şifre" />
                                <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>Giriş Yap</Button>
                                <Separator />
                                <a href="#" className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook mb-2">
                                    <ImFacebook2 size={20} />
                                    Facebook ile Giriş Yap
                                </a>
                                <a href="#" className="flex items-center text-xs justify-center text-link ">
                                    Şifreni mi unuttun ?
                                </a>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="bg-white border p-4 text-sm text-center">
                    Hesabın yok mu? <Link to="/auth/Register" className="font-semibold text-brand">Kaydol</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;