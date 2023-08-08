import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    password: string;
}

const SimpleForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, password } = formData; //desestruturação
        console.log('Dados submetidos: ', { name, email, password });
    };

    return (
        <>
            <h2>Formulário simplinho</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input 
                        type='text' 
                        name='name' 
                        value={formData.name} 
                        onChange={handleChange}
                    />                
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type='email' 
                        name='email' 
                        value={formData.email} 
                        onChange={handleChange}
                    />                
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type='password' 
                        name='password' 
                        value={formData.password} 
                        onChange={handleChange}
                    />                
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
};

export default SimpleForm;