import { useMemo, useState } from 'react';

const initialForm = {
  item: '',
  industry: '',
  customerProblem: '',
  productionDetail: '',
  highlightPoint: '',
  region: ''
};

function buildContent(form) {
  const data = {
    item: form.item || '맞춤 제작물',
    industry: form.industry || '일반 업종',
    customerProblem: form.customerProblem || '고객 유입이 정체된 상황',
    productionDetail: form.productionDetail || '브랜드 맞춤형 디자인 제작',
    highlightPoint: form.highlightPoint || '전환을 만드는 핵심 포인트 반영',
    region: form.region || '우리 지역'
  };

  const blogTitles = [
    `[${data.region}] ${data.industry} 사장님이 ${data.item} 제작 전 꼭 알아야 할 3가지`,
    `${data.customerProblem} 해결! ${data.item}로 매출 연결하는 실전 전략`,
    `${data.region} ${data.industry} 성공사례: ${data.productionDetail}로 만든 변화`
  ];

  const blogBody = `안녕하세요, 망고아트입니다.\n\n${data.region}에서 ${data.industry}를 운영하는 분들이 가장 많이 겪는 고민은 바로 “${data.customerProblem}”입니다.\n\n이번 프로젝트에서는 ${data.item} 제작 시 단순히 보기 좋은 결과물이 아니라, 실제 문의와 방문으로 이어지도록 ${data.productionDetail}에 집중했습니다.\n\n특히 핵심은 ${data.highlightPoint}입니다. 이 포인트를 중심으로 디자인과 문구, 전달 방식을 정리하면 고객이 바로 이해하고 행동하기 쉬워집니다.\n\n망고아트는 업종과 지역 특성에 맞춘 기획으로, 제작 이후에도 활용 가능한 콘텐츠 포맷까지 함께 제공합니다.\n\n${data.industry} 마케팅이 막막하다면, 망고아트와 함께 “보이는 콘텐츠”를 “성과 나는 콘텐츠”로 바꿔보세요.`;

  const instagramPost = `📍${data.region} ${data.industry} 사장님 주목!\n\n"${data.customerProblem}" 때문에 고민 중이신가요?\n\n망고아트는 ${data.item} 제작 시\n✅ ${data.productionDetail}\n✅ ${data.highlightPoint}\n를 중심으로 결과물을 만듭니다.\n\n눈길만 끄는 콘텐츠가 아니라,\n문의/예약/방문으로 연결되는 콘텐츠가 필요하다면\n지금 바로 상담하세요 🙌\n\n#${data.region.replace(/\s+/g, '')} #${data.industry.replace(/\s+/g, '')} #망고아트 #마케팅콘텐츠 #디자인제작`;

  const reelsScript = `오프닝: "${data.customerProblem}, 아직도 반복되고 있나요?"\n\n장면1: ${data.region} ${data.industry} 현장 컷\n나레이션: "고객은 많은데 전환이 안 된다면 콘텐츠 구조부터 바꿔야 합니다."\n\n장면2: ${data.item} 제작 과정\n나레이션: "이번 작업은 ${data.productionDetail}에 집중했습니다."\n\n장면3: 핵심 포인트 강조 자막\n나레이션: "성과 차이를 만드는 핵심은 ${data.highlightPoint}!"\n\n클로징: "우리 매장에 맞는 콘텐츠가 필요하다면 망고아트로 문의하세요."`;

  const shortsTitles = [
    `${data.customerProblem} 해결하는 ${data.item} 제작법`,
    `${data.region} ${data.industry} 사장님이 바로 쓰는 마케팅 팁`,
    `문의율 올리는 ${data.highlightPoint} 적용법`,
    `${data.item} 하나로 고객 반응 바꾸는 방법`,
    `망고아트 실제 제작: ${data.productionDetail}`
  ];

  const youtubeDescription = `${data.region} ${data.industry} 현장에서 바로 적용 가능한 마케팅 콘텐츠 제작 사례를 소개합니다.\n\n이번 영상에서는 ${data.customerProblem}를 해결하기 위해 ${data.item} 제작 시 어떤 전략을 사용했는지 설명합니다.\n핵심은 ${data.highlightPoint}이며, 실제 제작 내용은 ${data.productionDetail}입니다.\n\n상담 문의: 카카오톡 채널 '망고아트'\n\n#망고아트 #${data.industry.replace(/\s+/g, '')} #${data.region.replace(/\s+/g, '')} #마케팅콘텐츠 #쇼츠마케팅`;

  const kakaoMessage = `안녕하세요, 망고아트입니다 😊\n\n${data.region} ${data.industry} 관련 ${data.item} 제작 문의 남겨주셔서 감사합니다.\n현재 가장 고민하시는 "${data.customerProblem}" 해결을 위해\n${data.productionDetail} 중심으로 제안드릴 수 있어요.\n\n특히 ${data.highlightPoint}를 반영해\n실제 반응이 나오는 콘텐츠로 도와드리겠습니다.\n편하신 시간대 알려주시면 빠르게 상담 도와드릴게요!`;

  return {
    blogTitles,
    blogBody,
    instagramPost,
    reelsScript,
    shortsTitles,
    youtubeDescription,
    kakaoMessage
  };
}

function OutputCard({ title, value }) {
  const text = Array.isArray(value) ? value.join('\n') : value;

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert(`${title} 복사 완료`);
  };

  return (
    <section className="card">
      <div className="cardHeader">
        <h3>{title}</h3>
        <button onClick={copy}>복사</button>
      </div>
      {Array.isArray(value) ? (
        <ol>
          {value.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : (
        <pre>{value}</pre>
      )}
    </section>
  );
}

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(initialForm);
  const [isAdmin, setIsAdmin] = useState(false);

  const content = useMemo(() => buildContent(submitted), [submitted]);

  const onChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <main className="wrap">
      <header>
        <h1>망고아트 마케팅 콘텐츠 자동 생성기</h1>
        <p>입력값 기반 템플릿으로 콘텐츠를 빠르게 생성하는 내부 툴</p>
      </header>

      <div className="adminToggle">
        <label>
          <input type="checkbox" checked={isAdmin} onChange={() => setIsAdmin((v) => !v)} /> 관리자 화면
        </label>
      </div>

      {isAdmin && (
        <section className="adminPanel card">
          <h3>관리자 화면</h3>
          <p>현재는 템플릿 기반 모드입니다. 추후 API 연동 영역(모델 선택, 프롬프트 버전)을 여기에 확장하세요.</p>
        </section>
      )}

      <form className="card formGrid" onSubmit={onSubmit}>
        <label>제작 품목<input value={form.item} onChange={onChange('item')} /></label>
        <label>업종<input value={form.industry} onChange={onChange('industry')} /></label>
        <label>고객 문제<input value={form.customerProblem} onChange={onChange('customerProblem')} /></label>
        <label>제작 내용<input value={form.productionDetail} onChange={onChange('productionDetail')} /></label>
        <label>강조 포인트<input value={form.highlightPoint} onChange={onChange('highlightPoint')} /></label>
        <label>지역<input value={form.region} onChange={onChange('region')} /></label>
        <button className="generateBtn" type="submit">콘텐츠 생성</button>
      </form>

      <section className="results">
        <OutputCard title="블로그 제목 3개" value={content.blogTitles} />
        <OutputCard title="블로그 본문" value={content.blogBody} />
        <OutputCard title="인스타 게시글" value={content.instagramPost} />
        <OutputCard title="릴스 대본" value={content.reelsScript} />
        <OutputCard title="유튜브 쇼츠 제목 5개" value={content.shortsTitles} />
        <OutputCard title="유튜브 설명 + 해시태그" value={content.youtubeDescription} />
        <OutputCard title="카카오 상담 문구" value={content.kakaoMessage} />
      </section>
    </main>
  );
}
