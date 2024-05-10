import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-gray-600 max-w-md w-full p-10 rounded-md" >

      {
            signinErrors.map((error, i)=> (
                <div className="bg-red-600 p-2 text-white text-center my-2 rounded-md" key={i}>
                    {error}
                </div>
            ))
        }

        <h1 className="text-2xl font-bold">Iniciar Sesion</h1>

        <form onSubmit={onSubmit}>
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />

          {errors.email && <p className="text-red-500">Email is required</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />

          {errors.email && <p className="text-red-500">Password is required</p>}

          <button type="submit" className="bg-zinc-400 rounded-md px-2 py-2 hover:bg-blue-600">Iniciar sesión</button>
        </form>

        <p className="flex gap-x-2 justify-between py-2">
          No tienes una cuenta aun ? <Link to="/register" className="text-sky-500 " >Sign up</Link>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
