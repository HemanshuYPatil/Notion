import { create } from "zustand";

type ProfileStore = {
  isOpen: boolean;
  openProfile: () => void;
  closeProfile: () => void;
};

export  const useProfileStore = create<ProfileStore>((set) => ({
  isOpen: false,
  openProfile: () => {
    set({ isOpen: true });
  },
  closeProfile: () => {
    set({ isOpen: false });
  },
}));
