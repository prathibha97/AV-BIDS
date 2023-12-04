import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
  } | null>(null);

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

      // Set file info to state
      setFileInfo({
        name: file.name,
        size: file.size,
      });
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="font-semibold text-center mb-2">
          Drag & drop files or
          <span className="font-normal underline ml-2">Browse</span>
        </p>
        <div className="text-[#676767] text-center">
          Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
        </div>
      </div>

      {/* Display file info on the webpage */}
      {fileInfo && (
        <div className="text-center mt-4">
          <p>File Name: {fileInfo.name}</p>
          <p>File Size: {fileInfo.size} bytes</p>
        </div>
      )}
    </div>
  );
}

export default MyDropzone;
