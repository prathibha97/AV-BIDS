import { Control, Controller } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichTextEditor.css';
import { FC } from 'react';

interface RichTextEditorProps {
  control: Control;
  handleInputChange:any;
}
const RichTextEditor: FC<RichTextEditorProps> = ({ control,handleInputChange }) => {
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
    <Controller
      name='description'
      control={control}
      defaultValue=''
      render={({ field }) => (
        <div className='custom-quill-container'>
          <ReactQuill
            theme='snow'
            value={field.value}
            onChange={(content) => {
              field.onChange(content);
              handleInputChange('description', content); // Add this line
            }}
            modules={modules}
            className='custom-quill-editor'
            style={{ height: '200px' }}
          />
        </div>
      )}
    />
  );
};

export default RichTextEditor;
