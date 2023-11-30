import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p className="font-semibold text-center mb-2">
        Drag & drop files or
        <span className="font-normal underline ml-2">Browse</span>
      </p>
      <div className="text-[#676767] text-center">
        Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
      </div>
    </div>
  );
}

export default MyDropzone;
