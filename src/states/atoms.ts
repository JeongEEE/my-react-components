import { atom } from 'recoil'
import {ModalProps} from '../types';
// import { recoilPersist } from 'recoil-persist'
//
// const { persistAtom } = recoilPersist()

export const modalStackState = atom<ModalProps[]>({
  key: 'modalStackState',
  default: [],
})

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
