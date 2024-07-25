const proverbs = [
    {
        proverb : "미꾸라짓국 먹고 용트림한다.",
        meaning : "시시한 일을 해 놓고 큰일을 한 것처럼 으스대는 것",
    },
    {
        proverb : "공자 앞에서 문자 쓴다.",
        meaning : "지식이 부족한 사람이 가소롭게도 자기보다 유식한 사람 앞에서 아는 체함",
    },
    {
        proverb : "마른나무를 태우면 생나무도 탄다.",
        meaning : "안되는 일도 대세를 타면 잘될 수 있음",
    },
    {
        proverb : "고쟁이를 열두 벌 입어도 보일 것은 다 보인다.",
        meaning : "아무리 여러 번 감싸도 정작 가릴 것은 못 가렸다",
    },
    {
        proverb : "바늘구멍으로 하늘 보기.",
        meaning : "전체를 포괄적으로 보지 못하는 매우 좁은 소견이나 관찰을 비꼬는 말",
    },
    {
        proverb : "일각이 삼추 같다.",
        meaning : "기다리는 마음이 간절함",
    },
    {
        proverb : "드문드문 걸어도 황소걸음.",
        meaning : "속도는 느리나 오히려 믿음직스럽고 알차다",
    },
    {
        proverb : "바람은 불다 불다 그친다.",
        meaning : "성이 나서 펄펄 뛰어도 가만두면 제풀에 사그라져 조용해지는 경우",
    },
    {
        proverb : "쥐구멍에 홍살문 세우겠다.",
        meaning : "가당치 아니한 일을 주책없이 함",
    },
    {
        proverb : "조개껍데기는 녹슬지 않는다.",
        meaning : "천성이 착하고 어진 사람은 다른 사람의 나쁜 습관에 물들지 않음",
    },
]

const proverb = document.querySelector("#proverb span:first-child");
const meaning = document.querySelector("#proverb span:last-child");

const todaysProverb = proverbs[Math.floor(Math.random() * proverbs.length)];

proverb.innerText = todaysProverb.proverb;
meaning.innerText = todaysProverb.meaning;