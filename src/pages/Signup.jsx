import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import Button from "../components/Shared/Button"

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const handleSignUp = async() => {
      try {
            const options = {
                firstname: formData.firstname,
                lastname: formData.lastname,
                dateOfBirth: formData.dateOfBirth,
                email: formData.email,
                password: formData.password,
              }
            await axios.post(
              "http://localhost:3000/sign-up",
              options
            );
            navigate('/dashboard')
      } catch (error) {
        console.error(error)
      }
    }


  return (
    <main className="min-h-screen w-full flex justify-between">
      <section className="size-full bg-white flex items-center justify-center">
        <form className="flex flex-col max-w-[450px] w-full min-h-screen py-10 items-center gap-6" onSubmit={(e)=> e.preventDefault()}>
          <header className="font-bold tracking-wide text-4xl underline pl-4">
            Sign Up
          </header>
          <div className="flex flex-col p-4 gap-y-5 md:gap-y-8 w-full">
            <div className="flex gap-x-4 flex-grow">
              <section className="flex flex-col gap-y-2 max-w-80 flex-grow">
                <label className="text-md w-full tracking-wide">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="p-2 w-full max-h-10 flex-grow border rounded-md outline-none focus:border-azure-radiance-600"
                  value={formData.firstname}
                  required={true}
                  onChange={handleChange}
                  name="firstname"
                />
              </section>
              <section className="flex flex-col gap-y-2 max-w-80 flex-grow ">
                <label className="text-md w-full tracking-wide">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="p-2 w-full max-h-10 flex-grow border rounded-md outline-none focus:border-azure-radiance-600"
                  value={formData.lastname}
                  required={true}
                  onChange={handleChange}
                  name="lastname"
                />
              </section>
            </div>
            <div>
              <section className="flex flex-col gap-y-2 max-w-48 flex-grow">
                <label className="text-md w-full tracking-wide">
                  Date Of Birth
                </label>
                <input
                  type="text"
                  placeholder="YYYY-MM-DD"
                  className="p-2 w-full max-h-10 flex-grow border rounded-md outline-none focus:border-azure-radiance-600"
                  value={formData.dateOfBirth}
                  required={true}
                  onChange={handleChange}
                  name="dateOfBirth"
                />
              </section>
            </div>
            <div>
              <section className="flex flex-col gap-y-2 flex-grow">
                <label className="text-md w-full tracking-wide">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 w-full max-h-10 flex-grow border rounded-md outline-none focus:border-azure-radiance-600"
                  value={formData.email}
                  required={true}
                  onChange={handleChange}
                  name="email"
                />
              </section>
            </div>
            <div>
              <section className="flex flex-col gap-y-2 flex-grow">
                <label className="text-md w-full tracking-wide">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="p-2 w-full max-h-10 flex-grow border rounded-md outline-none focus:border-azure-radiance-600"
                  value={formData.password}
                  required={true}
                  onChange={handleChange}
                  name="password"
                />
              </section>
            </div>
            <Button title={"Sign Up"} onClick={handleSignUp}/>
            <p className="text-center tracking-wider">
              Have an account ?{" "}
              <Link to={"/sign-in"} className="text-azure-radiance-400">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </section>
      <section className="bg-azure-radiance-50 h-screen w-full hidden lg:flex flex-col items-center justify-center gap-y-12 sticky top-0">
        <p className="text-5xl font-bold tracking-wider text-azure-radiance-400">
          Hakuri
        </p>
        <p className="text-azure-radiance-500 text-2xl font-light">
          Discover proper management
        </p>
      </section>
    </main>
  );
}
