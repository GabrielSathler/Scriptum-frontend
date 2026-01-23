"use server"

export const sendLogin = async (data: any) => {
    try {
        const response = await fetch(`${process.env.BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            console.log('Erro ao enviar formulário');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        throw error;
    }
}