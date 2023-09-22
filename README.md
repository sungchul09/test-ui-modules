## 사용 기술

- 언어: javascript, typescript
- 프레임워크: Vue3, Nuxt3
- 라이브러리: Scss, typescript, eslint, pinia

## assets 설정

- 자주 사용하는 color, font-size, variable css 변수 및 scss 믹스인 변수를 설정하였습니다. (관련 PR: https://github.com/sungchul09/test-ui-modules/pull/2)
- Nanum Barun Gothic 폰트를 추가하였습니다. (관련 PR: https://github.com/sungchul09/test-ui-modules/pull/3)
- 설정들은 아이디디어스 닷컴페이지를 참고하였습니다.

## eslint 설정

- vue-eslint-parser, @typescript-eslint/parser를 사용합니다.
- typescript, prettier 플러그인을 사용합니다.
- prettier rules 설정 및 vue template component naming 규칙을 PascalCase로 사용합니다.
- 관련 PR: https://github.com/sungchul09/test-ui-modules/pull/2

## typescript, pinia 사용

- 컴포넌트별 Props에 대한 인터페이스를 정의하였습니다.
- types 폴더 하위에 enum 상수 및 CardData 인터페이스를 정의하였습니다.
- pinia를 사용하여 카드 데이터를 관리합니다.
- 관련 PR: https://github.com/sungchul09/test-ui-modules/pull/8

## card 컴포넌트

https://github.com/sungchul09/test-ui-modules/assets/24908843/71f8fd18-18f9-4dce-8b1b-a272dde54554

- props
    - cardLayout를 통한 vertical, horizon 레이아웃을 설정합니다.
    - theme를 통해 카드의 review 노출 정보를 구성합니다.
- 컴포넌트 구조
    - Organisms: TheCard
    - Molecules: CardInfo, CardReview, CardThumbnail
    - Atoms: RatingCircles
- 리터럴 변수는 variable 파일에 등록하여 사용 (ex. 이미지 url)
- 관련 PR: https://github.com/sungchul09/test-ui-modules/pull/9

## input 컴포넌트

https://github.com/sungchul09/test-ui-modules/assets/24908843/aeb812b5-1c0f-4030-8bbb-d308ca5a5796

- focus와 blur 이벤트를 중심으로 기능을 구현하였습니다.
- readonly, disabled, maxlength, placeholder 상태를 props로 전달받아 컴포넌트 구현하였습니다.
- 관련 PR: https://github.com/sungchul09/test-ui-modules/pull/10

## 로컬 실행 방법

```tsx
$ pnpm i
$ pnpm run dev
```
* url: http://localhost:3000/
