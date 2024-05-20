import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Shared/Button";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const navigate  = useNavigate()
    const handleSignIn = async() => {
        try {
            const body = {
                email: formData.email,
                password: formData.password
            }
            const res = await axios.post("http://localhost:3000/sign-in", body)
            if(res.status !== 200){
              throw new Error
            }
            const { authToken } = res.data
            localStorage.setItem("authToken", authToken);
            navigate('/dashboard')
        } catch (error) {
            console.error("Error", error)
        }
    }
  return (
    <main className="w-full min-h-screen flex">
      <section className="size-full flex items-center justify-center task">
        <form
          className="flex flex-col gap-y-2 md:gap-y-4 max-w-[450px] w-full min-h-screen py-10 items-center justify-center px-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <header className="font-bold tracking-wide text-4xl underline pl-4">
            Sign In
          </header>
          <div className="flex flex-col gap-y-5 md:gap-y-8 w-full">
            <div className="flex flex-col gap-y-2 w-full flex-grow h-24 self-center">
              <label className="w-full text-md tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-grow max-h-10 border p-2 rounded-md outline-none focus:border-azure-radiance-600"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full flex-grow h-24">
              <label className="w-full text-md tracking-wide">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="flex-grow max-h-10 border p-2 rounded-md outline-none focus:border-azure-radiance-600"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>

          <Button title={"Sign In"} onClick={handleSignIn} />
          <p className="text-center tracking-wider">
            Don&apos;t have an account ?{" "}
            <Link to={"/sign-up"} className="text-azure-radiance-400">
              Sign Up
            </Link>
          </p>
        </form>
      </section>
      <section className="w-full h-screen bg-azure-radiance-50 hidden lg:flex sticky top-0"></section>
    </main>
  );
}
