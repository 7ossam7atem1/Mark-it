import { noteInfo } from '@/shared/models'
import { notesMock } from '@/store/mocks'
import { atom } from 'jotai'

export const notesAtom = atom<noteInfo[]>(notesMock)
export const selectedNoteIndexAtom = atom<number | null>(null)
export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteIndexAtom)

  if (selectedNoteIndex == null) return null

  const selectedNote = notes[selectedNoteIndex]
  return {
    ...selectedNote,
    content: `Hello from note${selectedNoteIndex}`
  }
})
