import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Textwrapper,
  TextHeading,
  Text,
  TextareaBtn,
  Strong,
} from "./TextareaElements";
import AlertContext from "../../context/AlertContext";

const Textarea = () => {
  const [txt, setTxt] = useState("");
  const { showAlert } = useContext(AlertContext);
  const textArea = useRef();
  const textVal = textArea.current === undefined ? "" : textArea.current.value;

  const textArr = textVal.split(/\s+/);
  if (textArr[textArr.length - 1] === "") {
    textArr.pop();
  }

  function funcUpper() {
    const newTxt = txt.toUpperCase();
    setTxt(newTxt);

    showAlert("Converted to upper case");
    setTimeout(() => {
      showAlert(null);
    }, 1500);
  }

  function funcLower() {
    const newTxt = txt.toLowerCase();
    setTxt(newTxt);

    showAlert("Converted to lower case");
    setTimeout(() => {
      showAlert(null);
    }, 1500);
  }

  function funcClear() {
    setTxt("");

    showAlert("Cleared Text-area");
    setTimeout(() => {
      showAlert(null);
    }, 1500);
  }

  function funcCopy() {
    navigator.clipboard.writeText(textArea.current.value);
    showAlert("Copied to clip board");
    setTimeout(() => {
      showAlert(null);
    }, 1500);
  }

  function funcRemoveExtraSpace() {
    const newTxt = textArea.current.value.split(/\s+/);
    setTxt(newTxt.join(" "));

    showAlert("Removed Extra spaces");
    setTimeout(() => {
      showAlert(null);
    }, 1500);
  }

  useEffect(() => {
    textArea.current.focus();
  }, []);

  return (
    <>
      <Textwrapper padBottom="0px">
        <TextHeading>Enter the text to analyze below</TextHeading>
        <Text
          ref={textArea}
          placeholder="Enter text here"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        <TextareaBtn
          as="button"
          onClick={funcUpper}
          disabled={txt.length === 0}
        >
          UPPERCASE
        </TextareaBtn>

        <TextareaBtn
          as="button"
          onClick={funcLower}
          disabled={txt.length === 0}
        >
          lowercase
        </TextareaBtn>

        <TextareaBtn
          as="button"
          onClick={funcClear}
          disabled={txt.length === 0}
        >
          Clear
        </TextareaBtn>

        <TextareaBtn as="button" onClick={funcCopy} disabled={txt.length === 0}>
          Copy
        </TextareaBtn>

        <TextareaBtn
          as="button"
          onClick={funcRemoveExtraSpace}
          disabled={txt.length === 0}
        >
          Space
        </TextareaBtn>
      </Textwrapper>

      <Textwrapper padBottom="0px">
        <TextHeading padBottom="70px">Your text summary</TextHeading>
        <p>
          <Strong>{textArr.length} words </Strong>and
          <Strong> {txt.length} characters</Strong>
        </p>
        <p>
          <Strong>{Math.round(textArr.length * 0.8) / 100} Minutes </Strong>
          read
        </p>
      </Textwrapper>

      <Textwrapper padBottom="70px">
        <TextHeading padBottom="70px">Preview</TextHeading>
        {txt.split(/\n/).map((element, index) => {
          return (
            <pre
              key={index}
              style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                marginBottom: "30px"
              }}
            >
              {txt.length > 0 ? element : "Nothing to preview"}
            </pre>
          );
        })}
      </Textwrapper>
    </>
  );
};

export default Textarea;
