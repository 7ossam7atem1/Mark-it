import { contextBridge } from 'electron'

if (process.contextIsolated) {
  throw new Error(`contextIsolation must be enabled in the BrowserWindow`)
}
try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  })
  alert('Preload script executed!') 
  console.log('Preload script executed. Locale:', navigator.language)
} catch (error) {
  console.error(error)
}
