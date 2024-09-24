import { appDirectoryName, fileEncoding } from '@shared/constants'
import { noteInfo } from '@shared/models'
import { GetNotes, ReadNote } from '@shared/types'
import { ensureDir, readdir, readFile, stat } from 'fs-extra'
import { homedir } from 'os'
export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()
  await ensureDir(rootDir)
  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })
  const notes = notesFileNames.filter((filename) => filename.endsWith('.md'))
  return Promise.all(notes.map(getNoteInfoFromFileName))
}

const getNoteInfoFromFileName = async (filename: string): Promise<noteInfo> => {
  const fileStats = await stat(`${getRootDir()}/${filename}`)
  return {
    title: filename.replace(/\.md$/, ''),
    lastEditedtime: fileStats.mtimeMs
  }
}

export const readNote: ReadNote = async (filename) => {
  const rootDir = getRootDir()

  const filePath = filename.endsWith('.md') ? filename : `${filename}.md`

  return readFile(`${rootDir}/${filePath}`, { encoding: fileEncoding })
}
