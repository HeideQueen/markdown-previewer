const initialState = `
  # Welcome to my markdown previewer

  ---
  
  ## You can write your markdown here and it will show in the preview area

  ### Here are some examples:

  [This is a link](https://www.google.com)

  \` const example = 'this is inline code' \`

  \`\`\`javascript
    const myFunc = () => {
      return 'this is a code block'
    }
  \`\`\`

  * List item 1
  * List item 2
  * List item 3
  
  > this is a blockquote
  > isn't this cool?

  ![this is a small image](https://www.fintechfutures.com/files/2019/07/small-world.jpg)

  __this is bolded text__
`;

export default initialState;
