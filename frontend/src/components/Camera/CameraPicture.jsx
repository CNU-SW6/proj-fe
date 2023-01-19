import React from 'react';
import '../../styles/camera.css';

// eslint-disable-next-line arrow-body-style
const CameraPircture = () => {
  /* 
    function(){
        if (!('url' in window) && ('webkitURL' in window)) {
            window.URL = window.webkitURL;
        }
    
        $('#camera').change(function(e){
            $('#pic').attr('src', URL.createObjectURL(e.target.files[0]));
        });
    */
  return (
    <>
      <input type="file" id="camera" name="camera" capture="camera" accept="image/*" />
      <br />
      {/* <img id="pic" /> */}
    </>
  );
};

export default CameraPircture;
