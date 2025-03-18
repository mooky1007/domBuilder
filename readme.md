# VanillaDOM Builder 패키지 배포 가이드

## ✅ 1. GitHub 저장소 생성

-   GitHub에서 새로운 레포지토리 생성
-   이름: `vanilladom-builder`
-   description: `A lightweight, declarative DOM builder for vanilla JavaScript.`
-   README & .gitignore 포함 생성 (Node.js 옵션 선택)

## ✅ 2. 로컬 환경 준비

```bash
git clone https://github.com/YourUsername/vanilladom-builder.git
cd vanilladom-builder
```

## ✅ 3. 파일 복사 및 초기 세팅

-   `dom-builder.js`, `package.json`, `README.md` 복사 또는 작성
-   `git add . && git commit -m "Initial commit" && git push`

## ✅ 4. npm 초기 설정

```bash
npm login
```

-   이메일, 비밀번호, OTP 입력 후 로그인 완료

## ✅ 5. package.json 최종 점검

-   `name` : 고유 이름 (`vanilladom-builder` 추천)
-   `version` : 1.0.0
-   `main` & `module` : `dom-builder.js`
-   `repository.url` : 본인 깃허브 URL 등록

## ✅ 6. npm publish

```bash
npm publish --access public
```

> _주의: 처음 배포 시에는 `--access public` 꼭 붙여야 공개 패키지로 등록됨._

## ✅ 7. CDN 사용 경로

```html
<script src="https://cdn.jsdelivr.net/npm/vanilladom-builder@latest/dom-builder.js"></script>
```

## ✅ 8. 버전 업데이트 방법

```bash
# package.json 수정 (version 예: 1.0.1로 올리기)
npm version patch   # 또는 minor / major
npm publish
```

---
