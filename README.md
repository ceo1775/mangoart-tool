# MangoArt Tool

Google Vision API + GPT-4 기반의 멀티채널 콘텐츠 자동 생성 데모입니다.

## 주요 기능
- 이미지 업로드 후 Google Vision API로 라벨/OCR 분석
- 분석 결과를 바탕으로 GPT-4가 아래 콘텐츠를 자동 생성
  - Instagram 캡션
  - 블로그 제목/본문
  - YouTube Shorts 대본/설명/후킹 카피
- 생성 결과를 카드 형태로 확인/복사/JSON 다운로드
- 로컬 저장소(LocalStorage)에 저장 후 재활용

## 실행 방법
1. `index.html`을 브라우저로 열기
2. 이미지 업로드
3. OpenAI API Key, Google Vision API Key 입력
4. `AI 분석` → `콘텐츠 생성`

## 참고
- 현재 구조는 클라이언트 데모입니다. 운영 환경에서는 API 키 보호를 위해 반드시 백엔드 프록시를 사용하세요.
