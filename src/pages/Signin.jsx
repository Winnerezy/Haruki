import { ThemeContext } from "../components/ThemeContext";
import { useContext } from "react";
import { darkMode, lightMode } from "../utils/Styles";
import Button from "../components/Shared/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { theme } = useContext(ThemeContext);
  const token = localStorage.getItem("authToken");
  //const [token, setToken] = useToken(authToken)
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null)
  console.log(data)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //setting the information using the element name attributes and their values
  };
  
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const options = {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-Type": "application/json",
          "authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ ...formData }),
      };
      const res = await fetch("http://localhost:3000/sign-in", options);
      if (!res.ok) {
        throw new Error("Error found");
      }
      const ans = await res.json();
      setData(ans)
      localStorage.setItem('authToken', ans.authToken)
      //const token = localStorage.getItem('authToken')
     // setToken(token)
      navigate("/home");
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen w-full">
      <section className="flex h-full w-full justify-between flex-row items-center">
        <section className="hidden xl:flex absolute top-4 right-4"></section>
        <section className="h-full bg-primary2 xl:w-1/2 w-full flex items-center justify-center">
          <section className="flex flex-col items-center justify-center space-y-8 w-full max-w-[450px] px-4">
            <div className="flex flex-col space-y-4 self-start">
              <p className="text-4xl font-bold tracking-tight">Sign In</p>
              <p className="font-light tracking-tight ">
                Please enter your details below
              </p>
            </div>
            <div className="row w-full">
              <div className="form-item flex-grow">
                <label htmlFor="email" className="text-black text-[15px]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="rounded-md outline-none p-2 text-black placeholder:text-gray-600 border border-gray-300 flex-grow"
                  onChange={handleChange}
                  value={formData.email}
                  required={true}
                />
              </div>
            </div>
            <div className="row w-full">
              <div className="form-item flex-grow">
                <label htmlFor="password" className="text-black text-[15px]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter a secure password"
                  className="rounded-md outline-none p-2 text-black placeholder:text-gray-600 border border-gray-300 flex-grow"
                  onChange={handleChange}
                  value={formData.password}
                  required={true}
                />
                <p className="text-red-500">{ data && data }</p>
              </div>
            </div>
            <Button
              title={"Sign In"}
              onClick={handleSignIn}
              disabled={isLoading}
              isLoading={isLoading}
            />
            <p className="text-gray-700 tracking-tighter">
              Don&apos;t have an account ?
              <Link
                to={"/sign-up"}
                className="text-white hover:text-opacity-60 ml-1"
              >
                Sign Up
              </Link>
            </p>
          </section>
        </section>
        <section
          className={`h-full w-1/2 ${
            theme ? lightMode : darkMode
          } hidden xl:flex flex-col items-center justify-center gap-y-16`}
        >
          <p className="text-5xl font-bold tracking-light bg-gradient-to-r from-pink-300 to-red-200 bg-clip-text text-transparent">
            Sakura
          </p>
          <p className="text-3xl font-bold tracking-light font-serif bg-gradient-to-r from-pink-300 to-red-200 bg-clip-text text-transparent">
            DISCOVER NEW EXPERIENCES
          </p>
        </section>
      </section>
    </main>
  );
}
