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
         acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
               // Do whatever you want with the file contents
               const binaryStr  = reader.result;
               console.log(binaryStr);
            };
            reader.readAsArrayBuffer(file);
         });
      },
      [setDocument]
   );
   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

   return (
      <React.Fragment>
         <div
            {...getRootProps()}
            style={isDragActive ? { ...dzStyles, ...dzActive } : { ...dzStyles }}
         >
            <input {...getInputProps()} />
            <span style={{ fontSize: 100 }} className='material-icons'>
               file_download
            </span>
            <p> Por Favor suba su documento </p>
         </div>
      </React.Fragment>
   );
}

export default DocumentWidgetDropzone;
