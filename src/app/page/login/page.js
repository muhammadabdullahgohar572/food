"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);



  const login = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        const response = await fetch("https://foodbackhand.vercel.app/login", { // Use login route here
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (data === "user not found") {
          alert("User not found")
        } else {
          console.log("Login success");
          alert("Login success")
          localStorage.setItem("user", JSON.stringify(data));
          setUser(data);
          
          // Assuming 'data' contains user info that can be passed for further processing
          if (data && data.name && data.password) {
            const Decode = await fetch(`https://foodbackhand.vercel.app/decodeHandler/${data.id}`);
            const Decordsok = await Decode.json();

            if (Decordsok) {
              console.log(Decordsok);
              setUser(Decordsok); // Ensure you are updating the correct state here
            }
          }
          router.push("/"); // Redirect to dashboard or homepage
        }
      } else {
        alert("Please fill in correct details");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex mt-[10%] min-h-screen items-center justify-center bg-yellow-50">
      <div className="bg-red-500 p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6">Login</h1>
        <form onSubmit={login}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-red-500 font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-white">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
