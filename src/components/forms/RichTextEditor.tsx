import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["code", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  console.log(value);

  return (
    <div className="w-full ">
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default RichTextEditor;
