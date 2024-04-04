import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CustomEditor = ({ handleChange, description }) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        name="description"
        onChange={(event, editor) => {
          const data = editor.getData();
          handleChange(data);
        }}
      />
    </div>
  );
};

export default CustomEditor;
