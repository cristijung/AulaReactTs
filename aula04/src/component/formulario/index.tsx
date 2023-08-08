import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  idade: number;
  password: string;
}

function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const onSubmit = (data: FormData) => {
    setSubmittedData(data);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input {...register('name', { required: true })} />
          {errors.name && <p>Name is required</p>}
        </div>
        <div>
        <div>
          <label>Idade</label>
          <input {...register('idade', { required: true })} />
          {errors.idade && <p>Idade is required</p>}
        </div>
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <p>Valid email is required</p>}
        </div>
        <div>
          <label>Password</label>
          <input {...register('password', { required: true, minLength: 6 })} />
          {errors.password && <p>Password must be at least 6 characters</p>}
        </div>
        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          {/* You might not want to display the password like this in a real application */}
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default Formulario;
