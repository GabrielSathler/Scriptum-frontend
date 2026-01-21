"use client";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendForm } from "./actions/sendForm";

const formSchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});
export default function Cadastrar() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            email: "",
            senha: "",
        },
    });
    const onSubmit = async (data: any) => {
        try {
            await sendForm(data);
            form.reset();
        } catch (err) {
            console.error('Erro ao enviar formulário:', err);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fbf6ef]">
            <div className="w-[520px] max-w-[92%] bg-white rounded-lg p-7 shadow-sm border border-[#e6e2dc]">
                <h1 className="text-4xl font-semibold m-0 mb-4">Entrar em Scriptum</h1>

                <hr className="border-t border-gray-100 my-3" />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <p className="mt-0 mb-4 text-gray-700">Crie sua conta e comece a usar o Scriptum hoje mesmo!</p>

                        <FormField
                            control={form.control}
                            name="nome"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium">Nome</FormLabel>
                                    <FormControl>
                                        <Input className="mt-2 w-full" placeholder="Digite seu nome" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium mt-3">E-mail</FormLabel>
                                    <FormControl>
                                        <Input className="mt-2 w-full" type="email" placeholder="Digite seu endereço de e-mail" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="senha"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium mt-3">Senha</FormLabel>
                                    <FormControl>
                                        <Input className="mt-2 w-full" type="password" placeholder="Digite sua senha" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className="flex items-center justify-between mt-3">
                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" className="w-4 h-4 rounded" />
                                <span>Lembrar de mim</span>
                            </label>
                            <Link href="/redefinir-senha" className="text-blue-600 text-sm">Esqueceu a senha?</Link>
                        </div>

                        <Button type="submit" className="w-full min-h-[40px] mt-4 cursor-pointer text-white py-3 rounded-md text-base">Continuar com Scriptum</Button>

                        <div className="mt-3 bg-gray-100 p-3 rounded-md text-sm">
                            Não consegue iniciar sessão? <span className="text-blue-600">Entre em contato com nosso suporte.</span> ou <span className="text-blue-600">redefina sua senha</span>.
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}