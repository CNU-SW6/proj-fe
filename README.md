# proj-fe
CNU SWAcademy 6조 frontend 레포입니다.

## 프로젝트 생성
git clone 복사한 주소

## 프로젝트 실행
`cd frontend`  
`npm start`  
`localhost:3000 접속`  

## version
`node -v`   
![image](https://user-images.githubusercontent.com/77222481/212007635-124c483e-1fdc-4883-ae81-80513b700a31.png)  
  
`npm -v`   
![image2](https://user-images.githubusercontent.com/77222481/212007154-31a15266-fc1b-45fd-93d3-d7f78fb168a2.png)

## 개발 시 주의사항
개인 이름으로 브랜치 생성하여 작업하기  
ex) `git checkout -b 이름`  
  

## 컴포넌트 구조
![image](https://user-images.githubusercontent.com/77222481/212018747-e5c67e30-beaa-4363-b2f0-8ddcb141129d.png)  
> **src**
>> **components** (Header, Footer, Nav 등)  
>> **assets** (프로젝트에서 사용할 이미지, 비디오, json 파일 등 미디어 파일 저장)  
>> **pages** (페이지 단위 컴포넌트로 구성)  
>> **styles** (css 파일)  
>> **utils** (상수나 공통 함수, 유틸리티를 담는 폴더)  

### eslint
airbnb style 적용

### storybook
[storybook](https://storybook.js.org/)

#### storybook 실행
`npm run storybook`  
`localhost:6006 접속`    

### 컴포넌트 설명  
- Button  
  - storybook default button  
- Header  
![image](https://user-images.githubusercontent.com/77222481/213339879-f009906e-e5c5-450f-bc0d-b37941bf209b.png)  
- MainSection  
![image](https://user-images.githubusercontent.com/77222481/213340305-0724e65a-f48f-4765-b44d-9119b419ed6e.png)  
- Sections
  - 모자, 상의, 하의, 신발 section 전체

### 페이지 설명
- LoadingPage
  - 앱 실행 시 가장 먼저 나타나는 화면, 3초 뒤 다른 화면으로 이동 예정
- LoginPage
  - 로그인 페이지
- SignupPage
  - 회원가입 페이지
- MainPage
  - 홈 페이지 
- ColorSelectPage
  - 색상 선택 페이지
- SearchPage
  - 색상을 통한 검색 결과가 나타나는 페이지
- SharePage 
  - 공유 페이지  
- MyPage  
  - 마이페이지  
  
