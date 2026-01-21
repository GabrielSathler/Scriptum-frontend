import { FormControl, FormField, FormItem, FormLabel, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
        },
    });



    return (
        <Form {...form}>
            <form>
                <div>
                    <div>
                        <h1>Cadastrar em Scriptum</h1>
                        <span></span>
                    </div>
                    <p>Crie sua conta e comece a usar o Scriptum hoje mesmo!</p>
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email </FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Digite seu email" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}