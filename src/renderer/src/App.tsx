import {
  ActionButtonRow,
  Content,
  Dragtopbar,
  FloatingNotetTitle,
  MarkdownEditor,
  NotePrevList,
  RootLayout,
  Sidebar
} from '@/components'

const App = () => {
  return (
    <>
      <Dragtopbar />
      <RootLayout>
        <Sidebar className="p-2 ">
          <ActionButtonRow className="flex justify-between mt-1 " />
          <NotePrevList className="mt-3 space-y-1 " />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNotetTitle className="pt-2 " />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
