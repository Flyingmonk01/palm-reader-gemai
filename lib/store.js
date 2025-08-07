import { create } from 'zustand';

// interface ReportStore {
//   report: Record<any, any>;
//   setReport: (newReport: Record<any, any>) => void;
// }

export const useStore = create((set) => ({
  report: {},
  setReport: (newReport) => set(() => ({ report: newReport })),
}));


