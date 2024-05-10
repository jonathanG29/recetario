import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAutheticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAutheticated) navigate("/login");
  }, [isAutheticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
<div className="bg-gray-600 max-w-md w-full p-10 rounded-md">
        {
            registerErrors.map((error, i)=> (
                <div className="bg-red-500 p-2 text-white" key={i}>
                    {error}
                </div>
            ))
        }

        <h1>Registrarse</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Username"
        />

        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}

        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />

        {errors.email && (
          <p className="text-red-500">Email is required</p>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
        />

        {errors.email && (
          <p className="text-red-500">Password is required</p>
        )}

        <button type="submit" className="bg-zinc-400 rounded-md px-2 py-2 hover:bg-blue-600">Register</button>
      </form>

      <p className="flex gap-x-2 justify-between py-2">
          Ya tienes una cuenta? <Link to="/login" className="text-sky-500 " >Sign in</Link>
        </p>

    </div>

    </div>
    
  );
}

export default RegisterPage;
