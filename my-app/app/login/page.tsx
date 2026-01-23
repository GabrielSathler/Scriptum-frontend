"use client";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { sendLogin } from "./actions/login";


const loginSchema = z.object({
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});
export default function loginForm() {

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            senha: "",
        },
    });
    const onSubmit = async (data: any) => {
        try {
            await sendLogin(data);
            form.reset();
        } catch (err) {
            console.error('Erro ao enviar formulário:', err);
        }
    }

    return (
        <div>
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="h-full w-full bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-80" />
            </div>
            <div className="min-h-screen flex ">


                <div className="hidden md:block md:w-1/2 relative">
                    <div className="absolute inset-0">
                        <Image src="/caneta.jpg" alt="Background image" fill className="" />
                    </div>
                </div>

                {/* Right: form column */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                    <div className="w-full max-w-2xl p-8">
                        <div className="bg-white rounded-lg p-7 shadow-sm border border-black relative z-30">
                            <h1 className="text-4xl font-semibold m-0 mb-4">Scriptum</h1>

                            <hr className="border-t border-black my-3" />

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <p className="mt-0 mb-4 text-gray-700">Acesse sua conta aqui!</p>
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

                                    <Button type="submit" className="w-full min-h-10 mt-4 cursor-pointer text-white py-3 rounded-md text-base">Continuar com Scriptum</Button>

                                    <div className="mt-3 bg-gray-100 p-3 rounded-md text-sm">
                                        Não consegue iniciar sessão? <span className="text-blue-600">Entre em contato com nosso suporte.</span> ou <span className="text-blue-600">redefina sua senha</span>.
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}