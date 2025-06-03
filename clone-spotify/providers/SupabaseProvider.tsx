"use client";

import { Database } from "@/database.types";
import {  createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { create } from "domain";
import { Session } from "inspector/promises";
import { useState } from "react";

const supabaseClient = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});


interface SupabaseProviderProps {
    children: React.ReactNode;
}
const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ 
    children 
}) => {
    const [supabaseClient] = useState(() =>
        createClientComponentClient<Database>()
    );
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )


}
export default SupabaseProvider;
