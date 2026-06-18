구성 설명

이번 압축 파일에는 실제 디자인 이미지에서 잘라낸 에셋이 포함되어 있습니다.

폴더 구조
- index.html : 실행 파일
- css/style.css : 디자인 수정
- js/app.js : JSON 데이터를 카드로 불러오는 파일
- data/products.json : 제품 및 렌탈 항목 수정/추가
- data/projects.json : 주요 구축 사례 수정/추가
- assets/ui/logo.png : CI
- assets/ui/hero.jpg : 메인 배경 이미지
- assets/products/ : 제품 이미지
- assets/projects/ : 구축 사례 이미지
- reference/design_mockup.png : 기준 디자인 시안

주의
index.html 더블클릭 시 브라우저 보안 때문에 JSON 카드가 안 보일 수 있습니다.
그 경우 CMD에서 아래처럼 실행하세요.

cd 압축해제한폴더경로
python -m http.server 8000

그 다음 브라우저에서:
http://localhost:8000


고객사 로고 수정/추가
- data/clients.json 파일을 수정합니다.
- 로고 이미지는 assets/clients 폴더에 넣습니다.
- image 값을 assets/clients/파일명.png 형식으로 변경합니다.
- 고객사 로고 영역은 PC/모바일 모두 좌우 스크롤됩니다.

문의하기 버튼
- 현재 mailto 방식입니다.
- 버튼 클릭 시 기본 메일 프로그램이 열리고 sales@iremediatec.co.kr 로 문의 메일을 작성합니다.
- 호스팅 업체에 그대로 전달해도 동작합니다.


v2 수정 사항
- 푸터 로고의 흰색 반전 필터 제거
- 상단/하단 로고를 동일한 CI 파일로 통일
- 제품 및 렌탈 / 주요 구축 사례 카드가 PC 화면에서 약 5개 보이도록 카드 폭 조정
