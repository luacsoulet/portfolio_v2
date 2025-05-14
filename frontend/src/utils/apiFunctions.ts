import { ApiError } from '@/types/errorTypes';

const handleApiError = (response: Response): never => {
    const error = new Error() as ApiError;
    error.status = response.status;

    switch (response.status) {
        case 401:
            error.statusText = 'Invalid credentials';
            break;
        case 500:
            error.statusText = 'Server error';
            break;
        default:
            error.statusText = 'An error occurred';
    }

    throw error;
};

export const login = async (email: string, password: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            return handleApiError(response);
        }

        return response.json();
    } catch (error) {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            const apiError = new Error() as ApiError;
            apiError.status = 0;
            apiError.statusText = 'Impossible de se connecter au serveur';
            throw apiError;
        }
        throw error;
    }
};