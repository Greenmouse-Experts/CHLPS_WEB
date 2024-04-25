import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Props{
    user: userProps;
    saveUser: (data: userProps) => void;
    clearUser: () => void;
}
interface userProps{
    name: string;
    email: string;
    token: string;
    image: string;
    address: string;
    phone: string;
    id: string;
    account: string;
    joined: string;
    un_id: string
}
const userInitState = {
    name: '',
    email: '',
    token: '',
    image: '',
    address: '',
    account: '',
    phone: '',
    id: '',
    joined: '',
    un_id: '',
}
const useAuthStore = create<Props>()(
  persist(
    (set) => ({
      user: userInitState,
      saveUser: (data:userProps) =>
        set(() => ({
          user: data,
        })),
      clearUser: () =>
        set(() => ({
          user: userInitState,
        })),
    }),
    {
      name: "chlps_user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
