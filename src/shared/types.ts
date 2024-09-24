import { noteContent, noteInfo } from './models'

export type GetNotes = () => Promise<noteInfo[]>
export type ReadNote = (title: noteInfo['title']) => Promise<noteContent>
export type WriteNote = (title: noteInfo['title'], content: noteContent) => Promise<void>
