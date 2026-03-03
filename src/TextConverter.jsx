import { useState } from "react"

const TextConverter = () => {
  const [text, setText] = useState('')
  const [applyedCss, setApplyedCss] = useState(null)
  const [textColor, setTextColor] = useState('')
  

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleRemoveExtraSpace() {
    const value = text
    const arr = value.replace(/\s+/g, ' ').trim()   /*rejex- means so many sapce and 'less space'*/
    setText(arr)
  }

  function handleCopyText() {
    navigator.clipboard.writeText(text);
  }

  function setBold() {
    setApplyedCss('font-bold');
  }
  function setItalic() {
    setApplyedCss('italic');
  }
  function setUnderline() {
    setApplyedCss('underline');
  }
   function clearText() {
    setText("");
  }

 

  return (
    <>
      <footer>
        <h1 className="bg-yellow-400 text-4xl text-black text-center font-extrabold" >Text Converter</h1>
      </footer>
  
      <div className="w-full  bg-mist-300 ">&nbsp;</div>
      <div className="w-full h-screen p-4 bg-mist-300 flex justify-center">
        <div className="max-w-[1024px] w-full">
          <div className="max-w-sm w-full size-64">
            <textarea value={text} onChange={handleChange} className="border bg-white py-2 px-3 sm:py-3 sm:px-4 block w-270 h-60 bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb" rows="3" placeholder="TYPE HERE..."></textarea>
          </div>
          <div>
            <button type="button" onClick={() => setText(text.toUpperCase())} className="cursor-pointer py-2 px-2  inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none bg-teal-400" >
              Uppercase
            </button>
            &nbsp;
            <button type="button" onClick={() => setText(text.toLowerCase())} className="cursor-pointer py-2 px-2  inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none bg-teal-400" >
              Lowercase
            </button>
            &nbsp;
            <button type="button" onClick={handleRemoveExtraSpace} className="cursor-pointer py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none bg-teal-400" >
              Remove extra space
            </button>
            &nbsp;
            <button type="button" onClick={handleCopyText}  className="cursor-pointer py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none bg-teal-400" >
              Copy text
            </button>
             &nbsp;
            <button onClick={clearText} className="cursor-pointer py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none bg-teal-400">
              Clear All
              </button>

            <div className="mt-6 bg-white h-50 w-270 p-5 rounded-2xl border-2 border-amber-700 ">
              <p className={` font-sans text-2xl ${applyedCss}`}>{text}</p>
              <p>{text.length}</p>
            </div>
            
              <button onClick={setBold} className="cursor-pointer border-2 w-fit px-2 py-1 mt-2 rounded bg-lime-300 text-black text-2xl font-extrabold">Bold</button>
              &nbsp;
              <button onClick={setItalic} className="curson-pointer border-2 w-fit px-2 py-1 mt-2 rounded bg-lime-300 text-black text-2xl italic ">Italic</button>
              &nbsp;
              <button onClick={setUnderline}  className="curson-pointer border-2 w-fit px-2 py-1 mt-2 rounded bg-lime-300 text-black text-2xl underline ">Underline</button>
            
          </div>

        </div>
      </div>

    </>
  )
}

export default TextConverter