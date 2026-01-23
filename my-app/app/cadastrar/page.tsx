"use client";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, Form, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendForm } from "./actions/sendForm";
import { useState } from "react";

const formSchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmarSenha: z.string().min(6, "Confirmação de senha deve ter pelo menos 6 caracteres"),
}).refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
});

export default function Cadastrar() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            email: "",
            senha: "",
            confirmarSenha: "",
        },
    });


    const onSubmit = async (data: any) => {
        setIsLoading(true);

        try {
            await sendForm(data);
            form.reset();
        } catch (err) {
            console.error('Erro ao enviar formulário:', err);
        } finally {
            setIsLoading(false);
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-whit">
            
            <div className="absolute inset-2 pointer-events-none -z-1">
                <div className="h-full w-full bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-80" />
            </div>

            <div className="w-130 max-w-[92%] bg-white rounded-lg p-7 shadow-sm border-black border-2">
                <h1 className="text-4xl font-semibold m-0 mb-4">Cadastrar em Scriptum</h1>

                <hr className="border-t border-black my-3 " />

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
                                        <Input className="w-full" placeholder="Digite seu nome" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium mt-4">E-mail</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" type="email" placeholder="Digite seu endereço de e-mail" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="senha"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium mt-4">Senha</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" type="password" placeholder="Digite sua senha" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmarSenha"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium mt-4">Confirmar senha</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" type="password" placeholder="Confirme sua senha" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center gap-2 text-sm">
                                <input type="checkbox" className="w-4 h-4 rounded" />
                                <span>Lembrar de mim</span>
                            </label>
                            <Link href="/redefinir-senha" className="text-blue-600 text-sm">Esqueceu a senha?</Link>
                        </div>

                        <Button type="submit" disabled={isLoading} className="w-full min-h-10 mt-4 cursor-pointer text-white py-3 rounded-md text-base">
                            {isLoading ? (
                                <>
                                    <Spinner className="mr-2" />
                                    Enviando...
                                </>
                            ) : (
                                "Continuar com Scriptum"
                            )}
                        </Button>

                        <div className="mt-3 bg-gray-100 p-3 rounded-md text-sm">
                            Não consegue iniciar sessão? <span className="text-blue-600">Entre em contato com nosso suporte.</span> ou <span className="text-blue-600">redefina sua senha</span>.
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}