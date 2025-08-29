import { atom } from 'recoil'

// TODO reorganize folders and files structure for all filters related code

type FiltersState = { [key: string]: { [key: string]: string } }

const filersState = atom<FiltersState>({
  key: 'filersState',
  default: {},
})

export default filersState