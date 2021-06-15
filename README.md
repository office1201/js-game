# 🌼프로젝트명: 미니 게임 및 3종

## 👏🏻 목적: 웹 프론트엔드 기초 다지기 8가지

- 브라우저 기본 Web APIs 이해 및 브라우저에서 웹 사이트를 로딩하는 순서
- DOM 이해 및 제어(+DOM 요소 제어 및 애니메이션 추가 시 성능 보장되는 방식으로 코드 구현(+성능 관련 유용한 사이트 하단 참조))
- 브라우저 웹 표기 방식
- 콘솔 창 활용 방법
- 리팩토링(변수/함수 네이밍, 클래스/모듈 구조 설계, 안정성, 번들러 패턴)
- 이벤트 루프
- 프로세스와 쓰레드의 차이
- 자료구조(스택과 큐, 힙이 브라우저 환경에서 쓰이는 과정)

## 🔨 기술 스택

- HTML5
- CSS3
- Banila JS(ECMA Script 6+)

## 🔨 구현 기능

- ## `HTML`
  - BEM을 활용한 선택자 부여
  - 윈도우 onLoad 보다 강력한 JS defer 옵션 부여
- ## `CSS`
  - gradient를 사용해 하이라이트 부여
  - hover 애니메이션 추가
- ## `Banila JS`
  - 브라우저 기본 Web APIs를 활용한 윈도우 사이즈를 표기 구현
  - 윈도우 스크롤 이벤트를 통한 위치 변경 및 옵션 활용
  - CSS Triger 활용 브라우저 좌표 이벤트 성능 개선 코드 리팩토링
  - getBoundingClientRect()를 활용한 윈도우 스크롤링 구현
  - 윈도우 API를 활용한 쇼핑몰 리스트 구현
  - 윈도우 API를 활용한 미니 게임 구현
  - 클래스 모듈화

</br>

## 🕹 1. 브라우저 좌표 이벤트

<img width="444" alt="스크린샷 2021-06-15 오후 1 47 18" src="https://user-images.githubusercontent.com/75716128/121994812-e8616f00-cde0-11eb-8878-06b6abab7d32.png">

### 📷 성능 개선 전

<img width="444" alt="스크린샷 2021-06-11 오후 4 24 26" src="https://user-images.githubusercontent.com/75716128/121995002-3d04ea00-cde1-11eb-885c-f84fb3431f13.png">

### 📸 성능 개선 후

<img width="444" alt="스크린샷 2021-06-11 오후 4 17 12" src="https://user-images.githubusercontent.com/75716128/121994718-c1a33880-cde0-11eb-9c72-25badcd76111.png">

</br>

## 🕹 2. 쇼핑몰 리스트

### 📸 간단 설명:

- 아이템 추가 및 삭제, 입력값 초기화, 추가 시 스크롤

<div style="display: flex">
<img width="200" height="300" alt="스크린샷 2021-06-15 오후 2 04 57" src="https://user-images.githubusercontent.com/75716128/121996051-ebf5f580-cde2-11eb-8c19-83f3929ef22d.png">
<img width="200" height="300" alt="스크린샷 2021-06-15 오후 2 08 58" src="https://user-images.githubusercontent.com/75716128/121996290-4a22d880-cde3-11eb-8114-c369db81cf69.png">
</div>

</br>

## 🕹 3. 채소을 잡아라

### 📸 간단 설명: 제한 시간 내에 채소를 잡는 게임 단, 벌레를 잡을 경우 실패

![Screenshot 2021-06-15 at 14 21 13](https://user-images.githubusercontent.com/75716128/121997237-00d38880-cde5-11eb-884f-fe0f2dddd2ad.png)

## 📝 레퍼런스

- MDN ￨ Web APIs: https://developer.mozilla.org/en-US/docs/Web/API
- MDN ￨ Events: https://developer.mozilla.org/en-US/docs/Web/Events

- CSS Triger: http://csstriggers.com/
- CSS Gradient: https://cssgradient.io

- Color Combination: https://color.adobe.com/ko/create/color-wheel

## 🌄 출처 및 정보

- Dream Coding Academy: https://academy.dream-coding.com/
- Bloging: https://velog.io/@nakiaathome/js-programming

## 🎨 스크립트

- git clone https://github.com/office1201/Mini-Game.git
