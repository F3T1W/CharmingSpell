import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const VerifySection = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const token = searchParams.get('token');

                if (!token) {
                    setMessage('Токен не найден.');
                    return;
                }

                const response = await fetch(`/api/test/verify?token=${token}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Неверный или истекший токен.');
                }

                const data = await response.json();
                setMessage(data.message || 'Аккаунт успешно подтвержден!');
                setTimeout(() => navigate('/'), 3000);
            } catch (error) {
                setMessage(error.message || 'Произошла ошибка при верификации.');
            }
        };

        verifyToken();
    }, [searchParams, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Подтверждение аккаунта</h1>
            <p className="text-gray-700">{message}</p>
        </div>
    );
};

export default VerifySection;