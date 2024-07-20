import { z } from 'zod';

export interface UseUserReturn<T = any> {
    userData: T | null;
    createUser: (userData: UserSchema) => Promise<void>;
    updateUser: (userId: string, userData: Partial<UserSchema>) => Promise<void>;
    getUserById: (userId: string) => Promise<void>;
    getUserByEmail: (userEmail: string) => Promise<void>;
    deleteUser: (userId: string) => Promise<void>;
    loading: boolean;
    error: string | null;
    resetError: () => void;
}

export const userSchema = z.object({
    name: z
        .string({ message: 'O nome não pode ser vazio' })
        .regex(/^[a-zA-Z\u00C0-\u017F\s]+$/, { message: 'O nome deve conter apenas letras' }),
    phone: z
        .string()
        .regex(/^\+?[0-9]+$/, {
            message: 'O número de telefone deve conter apenas números',
        })
        .optional()
        .or(z.literal('')),
    email: z
        .string({ message: 'O email não pode ser vazio' })
        .email({ message: 'Endereço de email inválido' }),
    password: z
        .string({ message: 'A senha não pode ser vazia' })
        .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }),
    address: z
        .string()
        .optional(),
    is_admin: z
        .boolean()
        .default(false),
});

export type UserSchema = z.infer<typeof userSchema>;

export const UpdateUser = userSchema.partial();