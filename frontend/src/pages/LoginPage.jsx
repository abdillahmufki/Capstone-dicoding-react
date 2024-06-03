import React from 'react';
import FormLogin from '../components/FormLogin';

function LoginPage() {
    return (
        <body className="">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url('https://source.unsplash.com/K4mSJ7kc0As/600x800')" }}
                        ></div>
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h1 className="pt-4 text-2xl font-bold text-center mb-1">Menu Login</h1>
                            <p className="mb-4 text-sm text-center text-gray-500">Silahkan login untuk melanjutkan</p>
                            <FormLogin></FormLogin>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default LoginPage;