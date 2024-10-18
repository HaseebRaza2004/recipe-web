import { useState } from "react";


export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="container mx-auto">
            <div className="border flex justify-center items-center p-6 mt-20">
                <div className="">
                    <img
                        className="w-fuil h-96"
                        src="./public/pic2.jfif"
                        alt="" />
                </div>
                <div className="">
                    <div className="flex justify-center   ">

                        <h1>Want to join our family</h1>
                        <form action="">
                            <input className="border py-2 px-1" type="text" />
                            <input className="border py-2 px-1" type="email" />
                            <input className="border py-2 px-1" type="password" />
                            <input className="border py-2 px-1" type="password" />
                        </form>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};