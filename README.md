# 원티드 프리온보딩 프론트엔드 코스 선발 과제

> [결과물 바로가기](https://kec0130.github.io/wanted_pre_onboarding/)

## 0. 핵심 Point

- 정확하고 명시적인 코드 구현을 위해 React와 TypeScript를 함께 사용했고, ESLint와 Prettier를 사용하여 Airbnb Style Guide를 적용했다.
- 주어진 예시를 하드 코딩으로 구현하지 않고, 컴포넌트를 추상화여 필요한 데이터를 Props로 전달 받는 방식으로 구현하기 위해 노력했다.
- 기존의 순수 CSS를 Sass 모듈로 바꾸고 코드를 전체적으로 리팩터링 하였다. _(2021.05.08 수정)_

## 1. Toggle

### 리팩터링 전

```js
<Toggle defaultOption="Overview" anotherOption="Details" />
```

- 토글은 양자택일이므로 두 가지 옵션을 Props로 받고, 컴포넌트의 어느 부분을 눌러도 스위치가 좌우로 왔다갔다 할 수 있도록 구현했다.

### 리팩터링 후

```js
<Toggle options={['Overview', 'Details']} />
```

- 토글을 탭처럼 여러 개의 메뉴 중 하나를 선택하는 방식으로 확장하여 사용할 수도 있다는 점을 고려했다. 스타일만 토글 형태를 유지하고, 기능은 탭과 동일하게 사용할 수 있도록 배열을 Props로 받아 메뉴를 동적으로 생성할 수 있도록 구현했다.


## 2. Tab

```js
<Tab tabs={["Windows", "Mac", "Linux"]} />
```

- 탭에 들어갈 메뉴 배열을 Props로 받아 여러 개의 탭을 동적으로 생성할 수 있도록 설계했다.
- `translateX(${currentIndex * 100}%)`을 사용하여 탭을 전환할 때마다 하단 바가 이동하는 슬라이드 애니메이션 효과를 구현했다.


## 3. Slider

### 리팩터링 전

```js
<Slider labelStep={25} />
```

- 슬라이더 라벨의 간격을 커스텀으로 설정할 수 있도록 `labelStep`을 Props로 설정했다. `labelStep`에 따라 라벨의 개수와 수치를 자동으로 계산해서 생성하게 만들었다.
- progress bar는 현재값을 기준으로 배경색에 `linear-grandient`를 주어 구현했다. 슬라이더나 하단 라벨을 누르면 현재값을 업데이트하고, 현재값 이하인 구간은 배경색이 채워지도록 했다.
- 라벨은 여러 개가 필요하므로 하위 컴포넌트로 분리했고, `labelStep`에 따라 개수와 수치를 계산하여 렌더링했다. 라벨 위 동그라미도 라벨 개수만큼 생성하고, `translateY()`와 `z-index`를 설정하여 슬라이더 아래에 겹치게 놓았다.

### 리팩터링 후

```js
<Slider min={1} max={100} step={1} unit='%' labels={[1, 25, 50, 75, 100]} />
```

- 슬라이더의 확장성을 고려하여 min, max, step, 단위 등을 Props로 받아 재사용 가능한 컴포넌트로 만들었다. 라벨이 0부터 시작하지 않을 수도 있으므로, 기존의 `labelStep`을 없애고 `labels`를 배열로 받았다.


## 4. Input

- 예시로 주어진 email과 password 인풋은 구조는 비슷하지만 세부적인 기능은 달라서 Props나 하위 컴포넌트 없이 명시적으로 구현했다.
- 정규표현식을 사용하여 이메일 형식을 검증하는 기능을 구현했다. `onChange` 이벤트 발생 중에는 우측 체크 아이콘으로, `onBlur` 이벤트가 발생했을 때는 에러 메시지로 검증 결과를 표시했다. 직접 사용해봤을 때 체크 표시나 에러 메시지가 보이는 타이밍이 어색하지 않도록 신경 썼다.
- input의 type을 password와 text로 토글하여 비밀번호를 확인할 수 있도록 구현했다.


## 5. Dropdown

```js
<Dropdown category="Country" list={listOfCountries} />
```

- Props로 카테고리를 받아 "Select Country"라는 기본값이 보이도록 하고, 데이터 목록을 받아 드롭다운 내부에 렌더링했다.
- 데이터 목록에 `toLowerCase()`를 적용한 채 필터링하여 대소문자 구분 없이 검색되도록 했고, 검색 결과가 없을 때 "No result"라는 메시지가 표시되도록 구현했다.
- 드롭다운 외부 영역을 누르면 닫히도록 `handleClickOutside` 함수를 구현하고, `useEffect`를 사용하여 eventListener를 붙였다 뗐다 할 수 있도록 수정했다.