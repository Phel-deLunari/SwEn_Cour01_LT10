"use client";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { use } from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const{session} = useSessionContext();
  return (
    <Modal
        title="welcome back"
        description="Login to your account"
        isOpen
        onChange={() => {}}
            >
              <Auth
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#22c55e",
                            },
                        },
                    },
                }}
              />
    </Modal>
  );
}

export default AuthModal;