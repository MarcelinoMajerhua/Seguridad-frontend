import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
   setDocument: (document: any) => void;
}

function DocumentWidgetDropzone({ setDocument }: Props) {
   const dzStyles = {
      border: 'dashed 3px #eee',
      borderColor: 'red',
      borderRadius: '5px',
      paddingTop: '30px',
      textAlign: 'center' as 'center',
      height: 200,
   };
   const dzActive = { borderColor: 'green' };
   const onDrop = useCallback(
      (acceptedFiles) => {
         setDocument(
            acceptedFiles.map((file: any) =>
               Object.assign(file, {
                  preview: URL.createObjectURL(file),
               })
            )
         );
      },
      [setDocument]
   );
   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: 'application/pdf',
   });

   return (
      <React.Fragment>
         <div
            {...getRootProps()}
            style={isDragActive ? { ...dzStyles, ...dzActive } : { ...dzStyles }}
         >
            <input accept='application/pdf' {...getInputProps()} />
            <span style={{ fontSize: 100 }} className='material-icons'>
               file_download
            </span>
            <p> Por Favor suba su documento </p>
         </div>
      </React.Fragment>
   );
}

export default DocumentWidgetDropzone;
