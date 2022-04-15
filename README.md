# Avocado React Tutorial

2022 SW상상기업 Team Avocado를 위한 React 연습용 프로젝트

- Project 및 Readme 작성자 :  [Gabriel Ju Hyun Yoon, 윤주현](https://github.com/gabrielyoon7)

## 사용 가능한 명령어

프로젝트에서 사용이 가능한 대표적인 명령어는 다음과 같습니다.

모든 명령어는 Terminal에서 사용이 가능합니다.

> Terminal의 기본 조작 방법은 리눅스의 Terminal과 유사합니다.

    1. 터미널 접근
        cd (경로)
    2. 터미널 뒤로가기
        cd ..
    3. 터미널에서 실행 상태를 종료
        Ctrl + C
    4. 터미널 내용 복사하기
        마우스로 드래그 한 다음 Ctrl + C
    5. 복사한 텍스트를 터미널에 붙여넣기
        마우스 우클릭


### `npm start`
> **Note: 아래 `install 명령어`를 먼저 실행할 필요가 있을 수도 있습니다.**

이 프로그램을 실행하게 합니다.
실행에 성공하면 기본 브라우저로 [http://localhost:3000](http://localhost:3000)이 자동으로 열립니다.

이 프로젝트를 수정하고 저장하면 자동으로 리로딩이 됩니다.
오류가 발생하면 터미널 콘솔창에 찍힙니다. (터미널에 찍히지 않는 경우에는 웹 브라우저에서 확인)

    부가 옵션으로 cache를 초기화 하면서 실행하는 방법이 있습니다.
    npm start --reset-cache
    분명 코드가 잘 들어갔고, 아무리 생각해도 문제가 없음에도 불구하고 오류가 발생하면 위 명령어로 실행하는 방법이 있습니다.


### `npm install`

> **Note: 패키지 변화가 없으면 매번 작업을 할 필요가 없습니다.**

package.json에 있는 npm 설치 이력을 토대로 본인 컴퓨터에 패키지를 자동으로 설치합니다.
이 작업은 평소에 할 필요가 없지만, 누군가가 새 패키지를 설치하는 경우 다른사람들이 모두 해줘야 합니다.

    부가 옵션으로 과거 버전의 패키지를 설치하는 방법이 있습니다.
    npm install --legacy-peer-deps
    패키지 설치 시 더이상 과거 버전을 지원하지 않는다거나 권장하지 않는다고 설치를 거부하는 경우 레거시 버전을 설치하는 방법입니다.

    만약 위 명령어로도 설치가 불가능하면
    npm install --force
    강제로 설치하는 명령어도 있습니다.


## 프로젝트 구조

이 프로젝트에서 사용하는 구조는 다음과 같습니다.

이 구조는 표준 방식이 아니며, 이 튜토리얼 작성자인 [윤주현](https://github.com/gabrielyoon7)의 마음대로 구조를 나눈 것입니다.

    src
     |-components
     |-pages
     |-views

- components

재사용이 가능한 형태의 요소를 모아두는 폴더. view에서 자주 사용하는 공통 요소들을 모아놓는다.
- pages

router로부터 받은 parameter에 따라서 page 구성을 지원하는 폴더. 여기에서 어떤 view를 삽입할지 결정해줌 (구조 재사용을 지원)

- views

pages에 삽입할 view를 모아놓는 폴더


## 더 알아보기

이 프로젝트는 초기에는 되도록이면 백엔드 없이 실습을 진행하고자 합니다. 

>데이터가 필요한 경우 파일 내에 JSON을 하드코딩으로 생성해서 적용하면 됩니다.

이 프로젝트에는 여러 가지 패키지(라이브러리)가 추가로 적용된 상태입니다.

여기에서 실습 하는 내용 중 외부 라이브러리를 끌어다 쓴 내용 중 핵심으로 생각되는 것을 아래에 추가로 소개하겠습니다.

리액트를 공식 문서를 통해 배우려면 다음 문서에서 확인하세요. [React documentation](https://reactjs.org/).

### `React Router`

URL 관리에 관한 기능

    공식 문서: [https://reactrouter.com/docs/en/v6](https://reactrouter.com/docs/en/v6)

### `React-Bootstrap`

기존에 사용하던 CSS Bootstrap의 React 버전

    공식 문서: [https://react-bootstrap.github.io/getting-started/introduction](https://react-bootstrap.github.io/getting-started/introduction)

