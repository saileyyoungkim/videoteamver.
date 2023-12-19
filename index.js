// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 21, "message": "Happy Amber Day!" },
  { "number": 22, "message": "콩나물 해장국,계란장조림,팥죽,치킨텐더샐러드,부추겉절이,마늘쫑지" },
  { "number": 23, "message": "부장님은 뻑뻑 담배도 뻑뻑 부장왕은 뻐킹" },
  { "number": 24, "message": "내일 무슨날이었지? 아 까먹었다" },
  { "number": 25, "message": "내게 25일은 없다고..." },
  { "number": 26, "message": "12월의 특별한 순간, 행복이 퍼져나가길." },
  { "number": 27, "message": "디기디기딩 국장님 파티하신다는데요!!!!!" },
  { "number": 28, "message": "동태탕은 양푼이 감자탕은 일미집 여탕은 BBJ" },
  { "number": 29, "message": "우리 영상팀 식구들을 만날 수 있어서" },
  { "number": 30, "message": "레껄한 한 해였다." },
  { "number": 1, "message": "스껄한 2024 되세요" },
  { "number": 2, "message": "예은언니 잘가요" },
  { "number": 3, "message": "김수영 탄신일" },
  { "number": 4, "message": "Keep In Mind. AL-PPA-NO" },
  { "number": 5, "message": "5늘의 5뎅타임은?" },
  { "number": 6, "message": "D-7, 칠공이백가져와라" },
  { "number": 7, "message": "빵빠라빵빵 삥뽕삥" },
  { "number": 8, "message": "오늘은 Dice가 업로드 됐을까" },
  { "number": 9, "message": "너무 화나지 않는 화요일이면 좋겠어" },
  { "number": 10, "message": "게임 시작했다 게임 끝났다" },
  { "number": 11, "message": "흠좀무한 하루 되세요~" },
  { "number": 12, "message": "다경빌까지 오십보" },
  { "number": 13, "message": "당신은 늘 멋진 사람입니다." },
  { "number": 14, "message": "다경빌을 무찌르자!" }

];


// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    const imageUrl = `image/card-${index + 1}.png`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    const doorDiv = document.querySelector(`.day-${index + 1}`)
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector('p')
    const text = modalMessageList[index]['message']

    // showModal 함수를 호출하여 모달을 표시합니다.
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});

// 목표 날짜 설정 (예시: 2023년 1월 1일)
const targetDate = new Date("2024-01-13");

function updateCountdown() {
  // 현재 한국 시간을 얻어오기
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));


  // 남은 시간 계산
  const timeRemaining = targetDate - now;

  // 시간, 분, 초 계산
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // 결과를 HTML에 업데이트
  const countdownElement = document.getElementById('countdown');
  countdownElement.style.color = '#FF9EA9'
  countdownElement.innerHTML = `
      <span>D-${days} ${hours}시간${minutes}분${seconds}초</span>`;
}
// 페이지 로드 시에도 업데이트 수행
updateCountdown();

// 1초마다 업데이트
setInterval(updateCountdown, 1000);