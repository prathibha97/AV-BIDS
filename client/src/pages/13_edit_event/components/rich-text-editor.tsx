import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichTextEditor.css';
const RichTextEditor = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      [{ script: 'sub' }, { script: 'super' }],
      ['clean'], // remove formatting button
    ],
  };
  return (
    <div>
      <div className='custom-quill-container'>
        <ReactQuill
          theme='snow'
          value={value}
          onChange={setValue}
          modules={modules}
          className='custom-quill-editor'
          style={{ height: '200px' }}
        />
      </div>
      {/* preview */}
      {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
    </div>
  );
};

export default RichTextEditor;
