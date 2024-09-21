import {
  codeBlockPlugin,
  headingsPlugin,
  imagePlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import 'prismjs/themes/prism.css';

export const MarkdownEditor = () => {
  return (
    <MDXEditor
      markdown={`# Hello from MDX editor

        ## Image Example
        ![Alt text](https://via.placeholder.com/150)
        
        ## Link Example
        [MDX Editor Documentation](https://mdxeditor.com)
        
        ## Code Block Example
        \`\`\`js
        const greeting = 'Hello, world!';
        console.log(greeting);
        \`\`\`
        `}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
        codeBlockPlugin(),
        linkPlugin(),
        imagePlugin()
      ]}
      contentEditableClassName="outline-none  min-h-screen max-w-none text-lg- px-8 py-5 caret-yellow-500 prose prose-invert  prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    ></MDXEditor>
  )
}
