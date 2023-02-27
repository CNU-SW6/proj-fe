import React, { useRef, useState, useEffect } from 'react';

const CameraTest = () => {
  const [file, setFile] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  useEffect(() => {
    if (file !== '') {
      // 처음 파일 등록하지 않았을 때를 방지
      setPreview(<img className="img_preview" src={previewURL} alt="미리보기" />);
    }
    return () => {};
  }, [previewURL]);

  const handleFileOnChange = (event) => {
    // 파일 불러오기
    event.preventDefault();
    const reader = new FileReader();

    reader.onloadend = (e) => {
      setFile(e.target.files[0]);
      setPreviewURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleFileButtonClick = (e) => {
    // 버튼 대신 클릭하기
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };
  return (
    <>
      <div className="priveiw-rapping">{preview}</div>
      <aside className="side">
        <input ref={fileRef} hidden id="file" type="file" onChange={handleFileOnChange} />
        <header className="side-header">
          <p>Title text</p>
        </header>
        <div style={{ padding: 10 }}>
          <button type="button" onClick={handleFileButtonClick}>
            UPLOAD
          </button>
        </div>
      </aside>
    </>
  );
};
export default CameraTest;
