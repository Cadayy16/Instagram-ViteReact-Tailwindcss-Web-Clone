import Input from "../../components/Input"
import Button from "../../components/Button";
import { ImFacebook2 } from "react-icons/im";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { register } from "../../firebase";
import { Formik, Form } from "formik";
import { RegisterSchema } from "../../validation";
import Separator from "../../components/Separator";


function Register() {

    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async (values, actions) => {
        const response = await register(values)
        if (response) {
            navigate(location.state?.return_url || '/', {
                replace: true
            })
        }
    }

    return (

        <div className="w-[350px] grid gap-y-3">
            <div className="bg-white border p-[40px] pt-10 pb-6">
                <div href="#" className="flex justify-center mb-4">
                    <img className="h-[51px]" src="../src/images/instagram-login.png"></img>
                </div>
                <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-5">
                    Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
                </p>
                <Button type="">
                    <ImFacebook2 size={20} />
                    Facebook ile Giriş Yap
                </Button>
                <Separator />
                <Formik
                    validationSchema={RegisterSchema}
                    initialValues={{
                        email: '',
                        full_name: '',
                        username: '',
                        password: ''
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, isValid, dirty, values }) => (
                        <Form className="grid gap-y-1.5">
                            <Input name="email" label="Cep Telefonu Numarası veya E-posta" />
                            <Input name="full_name" label="Adı Soyadı" />
                            <Input name="username" label="Kullanıcı Adı" />
                            <Input type="password" name="password" label="Şifre" />
                            <Button type="submit" disabled={!isValid || !dirty || isSubmitting}>Kayıt Ol</Button>
                            <Separator />
                            <a href="#" className="flex items-center text-xs justify-center text-link ">
                                Şifreni mi unuttun ?
                            </a>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="bg-white border p-4 text-sm text-center">
                Hesabın var mı? <Link to="/auth/Login" className="font-semibold text-brand">Giriş Yap</Link>
            </div>
        </div>
    )
}

export default Register;