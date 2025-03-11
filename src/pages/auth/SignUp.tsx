import { message, Modal } from 'antd';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hook';
import { AuthType } from '../../interfaces/auth';
import { useSignUpMutation } from '../../services/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { colors } from '../../utils/color';
type Props = {}

const schema = yup.object({
    username: yup.string().required("Không được để trống"),
    email: yup.string().email("Vui lòng nhập đúng định dạng email").required("Không được để trống"),
    password: yup.string().required("Không được để trống").min(5, "Nhập ít nhất 5 ký tự"),
    confirmpassword: yup
        .string()
        .required("Không được để trống")
        .oneOf([yup.ref("password")], "Mật khẩu không trùng khớp !"),
}).required();
const SignUp = (props: Props) => {
    const [signUp, result] = useSignUpMutation()
    const {
        register,
        resetField,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AuthType>({ resolver: yupResolver(schema) });
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<AuthType> = async (data: AuthType) => {
        try {
            let colorRandom = colors[Math.floor(Math.random() * colors.length)];
            const image = `https://ui-avatars.com/api/?uppercase=true&name=${data.username}&background=${colorRandom.color}&size=500`
            const payload = await signUp({
                username: data.username,
                email: data.email,
                password: data.password,
                role: "user",
                image: image
            })
            reset()
            message.success("Đăng ký thành công!")
            setTimeout(() => {
                navigate("/signin")
            }, 2000)

        } catch (error) {
            alert(error)
        }

    }
    return (
        <div>
            {/* login */}
            <div className="contain py-16">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <h2 className="text-2xl uppercase font-medium mb-1">Đăng ký tài khoản</h2>
                    <p className="text-gray-600 mb-6 text-sm">
                        Đăng ký tài khoản mới
                    </p>
                    <form action="#" method="post" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="name" className="text-gray-600 mb-2 block">Họ và tên</label>
                                <input type="text" {...register('username')} id="name" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="Hoang nam" />
                                <p className='text-red-500 text-sm'>{errors.username?.message}</p>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-gray-600 mb-2 block">Email</label>
                                <input type="email" {...register('email')} id="email" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="youremail.@domain.com" />
                                <p className='text-red-500 text-sm'>{errors.email?.message}</p>

                            </div>
                            <div>
                                <label htmlFor="password" className="text-gray-600 mb-2 block">Mật khẩu</label>
                                <input type="password" {...register('password')} id="password" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="*******" />
                                <p className='text-red-500 text-sm'>{errors.password?.message}</p>

                            </div>
                            <div>
                                <label htmlFor="confirm" className="text-gray-600 mb-2 block">Xác nhận mật khẩu</label>
                                <input type="password" {...register('confirmpassword')} id="confirm" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="*******" />
                                <p className='text-red-500 text-sm'>{errors.confirmpassword?.message}</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button type="submit" className="block w-full py-2 text-center text-black bg-primary border border-primary rounded hover:bg-transparent hover:bg-primary hover:text-primary transition uppercase font-roboto font-medium">Đăng ký</button>
                        </div>
                    </form>
                    {/* login with */}
                    {/* <div className="mt-6 flex justify-center relative">
                        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
                    </div>
                    <div className="mt-4 flex gap-4">
                        <a href="#" className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                        <a href="#" className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
                    </div> */}
                    {/* ./login with */}
                    <p className="mt-4 text-center text-gray-600">Đã có tài khoản? <a href="/signin" className="text-primary">Đăng nhập ngay</a></p>
                </div>
            </div>
            {/* ./login */}

        </div>
    )
}

export default SignUp
