"use server"

export const sendForm = async (data: any) => {
    try {
        const response = await fetch(`${process.env.BASE_URL}/createUser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar formulário');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        throw error;
    }
}