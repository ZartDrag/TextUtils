import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextArea(props) {
  const [text, setText] = useState("Enter Text Here");
  const [wordCount, setWordCount] = useState(text.split(" ").length);

  const changeHandler = (event) => {
    setText(event.target.value);
    let words = [];
    text.split(" ").forEach((word) => {
      if (word !== "") words.push(word);
    });
    setWordCount(words.length);
  };

  const upClickHander = () => {
    setText(text.toUpperCase());
    props.fireAlert("success", "Text converted to Upper Case");
  };

  const lowClickHander = () => {
    setText(text.toLowerCase());
    props.fireAlert("success", "Text converted to Lower Case");
  };

  const capitalizedClickHander = () => {
    let newText = "";
    text.split(" ").forEach((word) => {
      if (word.length !== 0)
        newText +=
          word[0].toUpperCase() + word.substring(1).toLowerCase() + " ";
    });
    console.log(newText);
    setText(newText);
    props.fireAlert("success", "Text converted to Capitalized Case");
  };

  const clearClickHander = () => {
    setText("");
    props.fireAlert("success", "Text Cleared");
  };

  const loremClickHandler = () => {
    setText(
      text +
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde mollitia repudiandae ullam soluta ad perspiciatis adipisci placeat veritatis necessitatibus sunt quas, porro eius reiciendis animi quae eligendi? Ratione eos, hic iusto enim debitis natus magni ipsam laudantium vel nam tenetur repellat rerum tempora similique. "
    );
    props.fireAlert("success", "Sample Text Added");
  };

  const sentenceClickHandler = () => {
    let newText = "";
    let symbol = "";

    for (let i = text.length - 1; i >= 0; i--) {
      if (text[i] === "." || text[i] === "!" || text[i] === "?") {
        symbol = text[i];
        break;
      }
    }

    text
      .toLowerCase()
      .split(". ")
      .forEach((sentence) => {
        let blank = true;
        for (let i = 0; i < sentence.length; i++) {
          if (sentence[i] !== " ") {
            blank = false;
            break;
          }
        }

        if (!blank)
          newText +=
            " " + sentence[0].toUpperCase() + sentence.substring(1) + ".";
      });

    let newerText = "";

    newText.split("? ").forEach((sentence) => {
      let blank = true;

      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
          blank = false;
          break;
        }
      }
      if (!blank)
        newerText +=
          " " + sentence[0].toUpperCase() + sentence.substring(1) + "?";
    });

    newerText = newerText.substring(0, newerText.length - 2) + symbol;

    setText(newerText.trim());
    props.fireAlert("success", "Text converted to Sentence Case");
  };
  return (
    <>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={changeHandler}
            data-bs-theme={props.mode}
          ></textarea>
        </div>

        <button className="btn btn-primary m-3" onClick={upClickHander}>
          Upper Case
        </button>

        <button className="btn btn-primary m-3" onClick={lowClickHander}>
          Lower Case
        </button>

        <button
          className="btn btn-primary m-3"
          onClick={capitalizedClickHander}
        >
          Capitalized Case
        </button>

        <button className="btn btn-primary m-3" onClick={sentenceClickHandler}>
          Sentence Case
        </button>

        <button className="btn btn-primary m-3" onClick={loremClickHandler}>
          Sample Text
        </button>

        <button className="btn btn-primary m-3" onClick={clearClickHander}>
          Clear
        </button>
      </div>

      <div
        className={`container text-${
          props.mode === "dark" ? "light" : "dark"
        } my-3`}
      >
        <h2>Your text Summary</h2>
        <p>
          Your text has {wordCount} {wordCount === 1 ? "word" : "words"} and{" "}
          {text.length} characters.
        </p>
        <p>Would take {0.008 * wordCount} minutes to read. </p>
        <h3>Text Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter something in the textbox above."}
        </p>
      </div>
    </>
  );
}

TextArea.propTypes = {
  heading: PropTypes.string,
};

TextArea.defaultProps = {
  heading: "Default Heading",
};
