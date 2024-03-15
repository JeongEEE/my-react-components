import { atom } from 'recoil'
// import { recoilPersist } from 'recoil-persist'
//
// const { persistAtom } = recoilPersist()

export interface ToastMessage {
  id: number;
  message: string;
  duration: number;
}

export const toastState = atom<ToastMessage[]>({
  key: 'toastState',
  default: [],
});

// ########################################## sample
// export const sample = atom({
//   key: 'sample',
//   default: '',
// })
//
// export const sampleSelector = selector({
//   key: 'sampleSelector',
//   default: '',
//   get: ({ get }) => get(sample) + '+plus',
//   set: ({ set }, newValue) => set(sample, newValue),
// })
