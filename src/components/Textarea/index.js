import React, { useState } from 'react'
import { Textwrapper, TextHeading, Text, TextareaBtn, Strong } from './TextareaElements'



const Textarea = () => {
    const [txt, setTxt] = useState("");

    function funcUpper() {
        const newTxt = txt.toUpperCase();
        setTxt(newTxt);
    }

    function funcLower() {
        const newTxt = txt.toLowerCase();
        setTxt(newTxt);
    }

    return (
      <>
          <Textwrapper marginBottom = "0px">
              <TextHeading>Enter the text to analyze below</TextHeading>
              <Text 
                placeholder='Enter text here' 
                value={txt} 
                onChange={e => setTxt(e.target.value)} 
                />
            <TextareaBtn onClick={funcUpper}>
                  UPPERCASE
            </TextareaBtn>

            <TextareaBtn onClick={funcLower}>
                  lowercase
            </TextareaBtn>
          </Textwrapper>

          <Textwrapper marginBottom="0px">
              <TextHeading marginBottom = "70px">Your text summary</TextHeading>
              <p><Strong>{txt.split(/\s+/).length - 1} words</Strong> and <Strong>{txt.length} characters</Strong></p>
              <p><Strong>{Math.round((txt.split(/\s+/).length - 1)*0.8)/100} Minutes</Strong> read</p>
          </Textwrapper>

          <Textwrapper marginBottom="70px">
              <TextHeading marginBottom = "70px">Preview</TextHeading>
                {
                    txt.split(/\n/).map((element, index) => {
                        return(
                            <>
                                <p key={index}>{element}</p>
                                <br />
                            </>
                        )
                    })
                }
          </Textwrapper>

      </>
    )
}

export default Textarea
