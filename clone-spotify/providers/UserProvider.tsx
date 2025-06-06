"use  client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode;
};
const UserProviderProps: React.FC<UserProviderProps> = ({
     children
     }) => {
        return(
            <MyUserContextProvider>
                {children}
            </MyUserContextProvider>
        )
     };
     export default UserProviderProps;

