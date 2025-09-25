import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      report: {},
      setReport: (newReport) => set(() => ({ report: newReport })),
    }),
    {
      name: 'report-storage', // key in localStorage
    }
  )
);