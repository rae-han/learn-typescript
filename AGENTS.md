# Repository Guidelines / 저장소 가이드라인

## Project Structure & Module Organization / 프로젝트 구조 및 모듈 구성

- Root directory holds numbered Markdown chapters `1.md`–`6.md` with refined study notes, while `1.origin.md`–`6.origin.md` store raw extracts for cross-checking. — 루트에는 정리 노트와 원문이 각각 번호로 짝지어 있으니 비교가 쉽습니다.
- Add new material by pairing files (e.g., `7.origin.md`, `7.md`) so polished content maps directly to its source. — 새 장을 만들 때도 동일한 번호 체계를 유지해요.
- Keep large assets outside the repo and reference them from the relevant chapter instead of checking them in. — 용량 큰 자료는 저장소 밖에 두고 장에서 링크로 안내하세요.

## Build, Test, and Development Commands / 빌드·테스트·개발 명령

- `npx markdownlint "**/*.md"` runs Markdown lint rules to catch formatting issues early. — 마크다운 기본 규칙 위반을 조기에 발견합니다.
- `rg <keyword>` searches across chapters faster than `grep`, matching the existing workflow. — `rg` 명령으로 원하는 구절을 빠르게 찾을 수 있습니다.
- Use your editor’s Markdown preview or `code --preview` to review layout before committing. — 커밋 전 미리 보기를 통해 레이아웃을 확인하세요.

## Coding Style & Naming Conventions / 코딩 스타일과 명명 규칙

- Maintain the chapter voice and keep bilingual context consistent; add English clarifications only when they add insight. — 장의 문체를 유지하고 필요한 경우에만 영어 설명을 덧붙이세요.
- Use ATX headings in order (`#`, `##`, `###`) and avoid skipping levels; this mirrors the book’s hierarchy. — 제목 단계는 순차적으로 사용해 책 구조와 맞추세요.
- Wrap inline code, filenames, and commands in backticks, and use fenced code blocks like `ts` for TypeScript samples. — 인라인 코드는 백틱으로, 코드 예제는 펜스 블록으로 감싸세요.
- Aim for ≤100 characters per line but avoid breaking Korean sentences awkwardly. — 줄 길이는 100자를 넘기지 않는 것을 목표로 하되, 한국어 문장은 부자연스럽게 끊지 마세요.

## Testing Guidelines / 테스트 지침

- Proofread key paragraphs and use a spell-checker to ensure translations stay faithful. — 주요 문단을 교정하고 맞춤법 검사를 통해 번역 정확도를 유지하세요.
- Run `npx markdownlint "**/*.md"` before each commit and note any intentional rule overrides in the commit body. — 커밋 전마다 린트를 실행하고, 규칙 예외는 커밋 본문에 기록하세요.
- Validate complex TypeScript snippets with `ts-node scratch.ts` and mention confirmed outputs inline or in footnotes. — 복잡한 예제는 `ts-node`로 실행해 결과를 문서에 명시하세요.

## Commit & Pull Request Guidelines / 커밋 및 PR 가이드라인

- Write imperative commit subjects capped at 72 characters (e.g., “Add watcher proxy walkthrough”). — 명령형으로 72자 이내로 요약하세요.
- Reference affected chapters and tooling in the commit body to aid reviewers. — 수정한 장과 사용한 도구를 커밋 본문에 언급해 리뷰를 돕습니다.
- Pull requests should summarize changes, list touched files, and flag sections needing review attention (translations, code correctness). — PR에는 변경 사항 요약, 수정 파일 목록, 검토가 필요한 부분을 명시하세요.
- Attach screenshots only when formatting changed materially; otherwise link to specific diffs. — 서식이 크게 달라졌을 때만 스크린샷을 첨부하고, 그 외에는 Diff를 링크하세요.

- 반말은 하지 않고 존대를 한다.
