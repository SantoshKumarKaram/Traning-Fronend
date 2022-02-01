import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class App extends Component {
    render() {
        return (
            <div className="App">
                
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default App;
















// import React, { Component } from 'react';
// import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import Context from '@ckeditor/ckeditor5-core/src/context';

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <CKEditorContext context={ Context }>
//                     <h2>Using the CKeditor 5 context feature in React</h2>
//                     <CKEditor
//                         editor={ ClassicEditor }
//                         config={ {
//                             plugins: [ Paragraph, Bold, Italic, Essentials ],
//                             toolbar: [ 'bold', 'italic' ]
//                         } }
//                         data="<p>Hello from the first editor working with the context!</p>"
//                         onReady={ editor => {
//                             // You can store the "editor" and use when it is needed.
//                             console.log( 'Editor1 is ready to use!', editor );
//                         } }
//                     />

//                     <CKEditor
//                         editor={ ClassicEditor }
//                         config={ {
//                             plugins: [ Paragraph, Bold, Italic, Essentials ],
//                             toolbar: [ 'bold', 'italic' ]
//                         } }
//                         data="<p>Hello from the first editor working with the context!</p>"
//                         onReady={ editor => {
//                             // You can store the "editor" and use when it is needed.
//                             console.log( 'Editor1 is ready to use!', editor );
//                         } }
//                     />
//                 </CKEditorContext>
//             </div>
//         );
//     }
// }

// export default App;
