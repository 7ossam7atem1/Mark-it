import { Content, Dragtopbar, RootLayout, Sidebar } from './components'

const App = () => {
  return (
    <>
      <Dragtopbar />
      <RootLayout>
        <Sidebar className="p-2 ">sideBar</Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
