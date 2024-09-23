import { noteInfo } from "./models";

export type GetNotes = ()=> Promise<noteInfo[]>