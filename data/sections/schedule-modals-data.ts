import type { ModalData } from '../types';

export const scheduleModalsData: ModalData[] = [

  // ─── Day 1 & 9: Rome Tourist Spot Modals ───
  {
    type: "tourist-spot",
    id: "rome",
    title: "[관광정보] 로마 (ROME)",
    images: [
      "/sectrion6/day1/Rome/rome_1.webp",
      "/sectrion6/day1/Rome/rome_2.webp",
      "/sectrion6/day1/Rome/rome_3.webp",
    ],
    descriptions: [
      "영원한 도시, 로마.",
      "약 2,500년이 넘는 역사를 간직한 이탈리아의 수도 로마는 서양 문명의 요람이자 가톨릭 세계의 중심지입니다. 고대 로마 제국의 영광이 도시 곳곳에 살아 숨 쉬며 매년 수천만 명의 여행자를 불러들입니다.",
      "콜로세움, 포로 로마노, 판테온 같은 고대 유적부터 트레비 분수, 스페인 광장 같은 낭만적인 명소, 그리고 독립 국가 바티칸까지 품고 있어 며칠을 걸어도 새로운 발견이 끊이지 않는 도시입니다.",
      "6월의 로마는 평균 26~28°C의 맑고 화창한 날씨로, 야외 유적 관광을 즐기기에 최적의 시기입니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 이탈리아 로마" },
      { label: "인구", value: "약 290만 명" },
      { label: "주요 관광지", value: "콜로세움, 트레비 분수, 스페인 광장, 포로 로마노, 바티칸" },
      { label: "기후", value: "6월 평균 26~28°C (맑고 건조한 지중해성 기후)" },
    ],
    googleMapQuery: "Rome,Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190897.4!2d12.4829!3d41.8933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Italy!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "colosseum",
    title: "고대 로마의 상징, 콜로세움 (COLOSSEUM)",
    images: [
      "/sectrion6/day9/Colosseum/colosseum_1.webp",
      "/sectrion6/day9/Colosseum/colosseum_2.webp",
      "/sectrion6/day9/Colosseum/colosseum_3.webp",
    ],
    descriptions: [
      "서기 70~80년에 완공된 고대 로마 최대의 원형 경기장으로, 최대 8만 명을 수용하던 웅장한 건물입니다.",
      "높이 48m, 둘레 527m에 달하는 이 건축물은 약 2,000년의 세월을 견뎌온 유네스코 세계문화유산입니다. 검투사 경기와 맹수 사냥의 무대였던 이 경기장은 당시 황제가 시민들에게 오락을 제공하는 정치적 공간이기도 했습니다.",
      "전 세계 건축 역사의 걸작으로 손꼽히는 콜로세움은 로마의 4층 아치 구조를 완벽하게 구현하였으며, 인근 포로 로마노와 통합 입장권으로 함께 관람할 수 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Piazza del Colosseo, 1, 00184 Roma (로마 중심부)" },
      { label: "입장료", value: "콜로세움+포로로마노+팔라티노 통합권 €18 (사전 예약 권장)" },
      { label: "오픈시간", value: "매일 09:00 ~ 19:00 (하절기 기준, 마지막 입장 1시간 전)" },
    ],
    googleMapQuery: "Colosseum,Rome,Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.5!2d12.49221!3d41.89021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b283413fa7%3A0xe6c39c2be8d60b0!2sColosseum!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "trevifountain",
    title: "동전을 던지면 소원이 이루어지는, 트레비 분수 (TREVI FOUNTAIN)",
    images: [
      "/sectrion6/day9/Trevi-Fountain/trevi_1.webp",
      "/sectrion6/day9/Trevi-Fountain/trevi_2.webp",
      "/sectrion6/day9/Trevi-Fountain/trevi_3.webp",
    ],
    descriptions: [
      "1762년 완성된 높이 26m, 너비 49m의 로마에서 가장 크고 세계에서 가장 유명한 바로크 양식 분수입니다.",
      "교황 클레멘스 13세의 명을 받아 니콜라 살비가 완성한 이 분수의 중앙에는 바다의 신 넵투누스가 승리의 전차를 이끄는 웅장한 조각이 자리하고 있습니다. 왼쪽 어깨 너머로 동전을 던지면 다시 로마를 찾게 된다는 전설이 전해집니다.",
      "영화 '로마의 휴일(1953)'과 '달콤한 인생(1960)' 등 수많은 명작 영화의 무대가 된 곳으로, 로마 방문자라면 반드시 들르는 필수 코스입니다. 매년 약 100만 유로의 동전이 수거되어 자선 단체에 기부됩니다.",
    ],
    infoTable: [
      { label: "위치", value: "Piazza di Trevi, 00187 Roma (로마 트레비 광장)" },
      { label: "입장료", value: "분수대 주변 접근: 무료 / 분수대 안쪽 근접 구역: €2 (혼잡 방지)" },
      { label: "오픈시간", value: "상시 개방 (24시간)" },
    ],
    googleMapQuery: "Trevi+Fountain+Rome+Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0!2d12.48327!3d41.90097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6045dc9c5eef%3A0x19cde0895c0bbfa7!2sTrevi%20Fountain!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "spanishsteps",
    title: "로마의 휴일 배경, 스페인 광장 (SPANISH STEPS)",
    images: [
      "/sectrion6/day9/Spanish-Steps/spanish_1.webp",
      "/sectrion6/day9/Spanish-Steps/spanish_2.webp",
      "/sectrion6/day9/Spanish-Steps/spanish_3.webp",
    ],
    descriptions: [
      "1723~1725년에 건설된 총 135개의 계단으로 이루어진 로마의 대표적인 만남의 장소입니다.",
      "계단 아래에는 피에트로 베르니니가 제작한 '바르카차 분수(1627)'가 자리 잡고 있으며, 계단 위에서는 로마 시내 전경이 한눈에 내려다보입니다. 계단 꼭대기에는 1816년 건립된 삼위일체 성당(Trinità dei Monti)이 위치해 있습니다.",
      "영화 '로마의 휴일(1953)'에서 오드리 헵번이 계단에 앉아 젤라토를 먹는 장면으로 세계적으로 유명해진 곳으로, 봄에는 계단이 형형색색의 꽃으로 장식되어 더욱 아름다운 풍경을 연출합니다.",
    ],
    infoTable: [
      { label: "위치", value: "Piazza di Spagna, 00187 Roma (로마 스페인 광장)" },
      { label: "입장료", value: "무료 (야외 광장 및 계단)" },
      { label: "오픈시간", value: "상시 개방 (24시간) / 계단에서의 음식 취식 금지" },
    ],
    googleMapQuery: "Spanish+Steps+Rome+Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6!2d12.48248!3d41.90584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60c13c4afdb3%3A0xe19b3f6d8e1fc38a!2sSpanish%20Steps!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "romanforum",
    title: "로마 제국의 심장, 포로 로마노 (ROMAN FORUM)",
    images: [
      "/sectrion6/day9/Roman-Forum/romanforum_1.webp",
      "/sectrion6/day9/Roman-Forum/romanforum_2.webp",
      "/sectrion6/day9/Roman-Forum/romanforum_3.webp",
    ],
    descriptions: [
      "기원전 7세기부터 고대 로마의 정치·종교·상업의 중심지 역할을 해온 광장 유적입니다.",
      "원로원 의사당(쿠리아), 카에사르 신전, 베스타 신전, 티투스 개선문 등 수십 개의 유적이 밀집해 '야외 박물관'이라 불립니다. 율리우스 카이사르가 화장된 장소도 이 안에 있으며, 서기 44년 그의 사망 이후 시민들이 꽃을 헌화하는 전통이 오늘날까지 이어집니다.",
      "콜로세움 통합 입장권으로 함께 관람할 수 있으며, 포로 로마노 위 팔라티노 언덕에서는 로마 시내와 포룸 전체를 내려다볼 수 있는 최고의 조망을 즐길 수 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Via Sacra, 00186 Roma (콜로세움 서쪽 인접)" },
      { label: "입장료", value: "콜로세움+포로로마노+팔라티노 통합권 €18 포함" },
      { label: "오픈시간", value: "매일 09:00 ~ 19:00 (하절기 기준)" },
    ],
    googleMapQuery: "Roman+Forum+Rome+Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.7!2d12.48541!3d41.89239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6045c4ca1ca9%3A0xbf1b67cf2b0fb97a!2sRoman%20Forum!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },

  // ─── Day 3: Palermo Tourist Spot Modals ───
  {
    type: "tourist-spot",
    id: "palermo",
    title: "[관광정보] 팔레르모 (PALERMO)",
    images: [
      "/sectrion6/day3/Palermo/palermo_1.webp",
      "/sectrion6/day3/Palermo/palermo_2.webp",
      "/sectrion6/day3/Palermo/palermo_3.webp",
    ],
    descriptions: [
      "지중해의 심장, 시칠리아섬의 주도 팔레르모.",
      "페니키아·로마·아랍·노르만·스페인 등 수천 년에 걸친 다양한 문명이 겹겹이 쌓인 도시입니다. 구시가지 전체가 유네스코 세계문화유산 '아랍-노르만 팔레르모'의 일부일 만큼 풍부한 역사 자산을 지니고 있습니다.",
      "골목마다 바로크 건축물과 활기 넘치는 전통 시장이 어우러져 있으며, 지중해 최고의 미식 도시 중 하나로 손꼽힙니다. 부카티니 알라 노르마, 아란치니, 스페도 팔레르미타노 등 시칠리아의 대표 음식을 맛볼 수 있습니다.",
      "6월의 팔레르모는 평균 기온 26°C 내외로 따뜻하고 화창하여 야외 관광에 최적입니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 이탈리아 시칠리아 팔레르모" },
      { label: "인구", value: "약 65만 명" },
      { label: "주요 관광지", value: "콰트로 칸티, 마시모 극장, 팔레르모 대성당, 발라로 시장" },
      { label: "기후", value: "6월 평균 26°C (맑고 건조한 지중해성 기후)" },
    ],
    googleMapQuery: "Palermo,Sicily,Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96700.3!2d13.2809!3d38.1157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef8f889b1b57%3A0x8337b47e5da95e73!2sPalermo%2C%20PA%2C%20Italy!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "quattrocanti",
    title: "팔레르모의 기하학적 중심, 콰트로 칸티 (QUATTRO CANTI)",
    images: [
      "/sectrion6/day3/Quattro-Canti/quattrocanti_1.webp",
      "/sectrion6/day3/Quattro-Canti/quattrocanti_2.webp",
      "/sectrion6/day3/Quattro-Canti/quattrocanti_3.webp",
    ],
    descriptions: [
      "1608년부터 1620년 사이 완성된 팔레르모 구시가지의 기하학적 중심부입니다.",
      "코르소 비토리오 에마누엘레와 비아 마케다가 교차하는 지점에 바로크 양식의 오목한 파사드 네 면이 완벽한 대칭을 이루고 있습니다. 각 파사드는 1층 계절의 분수, 2층 스페인 국왕 조각상, 3층 팔레르모의 네 수호 성녀 조각상이 층층이 배치된 3단 구성으로 '태양의 바로크 극장'이라 불립니다.",
      "광장 이름인 '콰트로 칸티(Quattro Canti)'는 이탈리아어로 '네 모퉁이'를 의미합니다. 팔레르모에서 가장 사진이 많이 찍히는 명소 중 하나로, 이 네 모퉁이를 기준으로 팔레르모의 역사 중심가가 형성되어 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Piazza Villena (Quattro Canti), 90133 Palermo (구시가지 중심)" },
      { label: "입장료", value: "무료 (야외 광장)" },
      { label: "오픈시간", value: "상시 개방" },
    ],
    googleMapQuery: "Quattro+Canti+Palermo+Sicily+Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d13.36209!3d38.11538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef8b05c7bda3%3A0x6c476a5fca3e5f40!2sQuattro%20Canti%2C%20Palermo!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "teatromassimo",
    title: "유럽 3대 오페라 극장, 마시모 극장 (TEATRO MASSIMO)",
    images: [
      "/sectrion6/day3/Teatro-Massimo/massimo_1.webp",
      "/sectrion6/day3/Teatro-Massimo/massimo_2.webp",
      "/sectrion6/day3/Teatro-Massimo/massimo_3.webp",
    ],
    descriptions: [
      "1897년 개관한 마시모 극장은 이탈리아 최대, 유럽 3위 규모의 오페라 하우스입니다.",
      "건축가 지오반니 바티스타 필리포 바실레가 설계한 이 신고전주의 건물은 약 30년에 걸쳐 완성되었습니다. 1,381석 규모의 대형 홀과 6개의 층으로 이루어진 발코니, 그리고 세계 정상급의 음향 시스템을 자랑합니다. 웅장한 도리아식 열주와 대계단이 팔레르모의 대표 랜드마크로 자리하고 있습니다.",
      "영화 '대부 3편(The Godfather Part III, 1990)'의 마지막 장면이 이 극장 계단에서 촬영되어 전 세계 영화 팬들의 성지가 되었습니다. 현재도 오페라 시즌 중에 공연이 활발히 이루어집니다.",
    ],
    infoTable: [
      { label: "위치", value: "Piazza Giuseppe Verdi, 90138 Palermo (시내 중심)" },
      { label: "입장료", value: "외부 관람: 무료 / 내부 가이드 투어: 성인 €8" },
      { label: "오픈시간", value: "화~일 09:30 ~ 17:30 (가이드 투어 기준, 월요일 휴관)" },
    ],
    googleMapQuery: "Teatro+Massimo+Palermo+Sicily+Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d13.35214!3d38.11985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef8a2c1e1b3b%3A0x8e3e4b2fc5e1a234!2sTeatr%20Massimo%2C%20Palermo!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "palermocathedral",
    title: "팔레르모의 역사가 담긴, 팔레르모 대성당 (PALERMO CATHEDRAL)",
    images: [
      "/sectrion6/day3/Palermo-Cathedral/cathedral_1.webp",
      "/sectrion6/day3/Palermo-Cathedral/cathedral_2.webp",
      "/sectrion6/day3/Palermo-Cathedral/cathedral_3.webp",
    ],
    descriptions: [
      "1185년 노르만 대주교 구알티에로 오파밀리오가 건립한 팔레르모 역사의 축소판입니다.",
      "노르만 고딕·아랍 이슬람·바로크·신고전주의 양식이 한 건물 안에 공존하는 세계적으로 유례없는 건축 박물관으로 평가받습니다. 원래 9세기에 이슬람 사원으로 사용되었다가 노르만 왕조가 성당으로 개조했으며, 이후 수백 년에 걸쳐 각 시대의 건축 양식이 더해졌습니다.",
      "내부에는 시칠리아 노르만 왕조의 군주들(루제로 2세, 황제 프리드리히 2세 등)의 왕실 묘소가 안치되어 있으며, 지붕 전망대에서 팔레르모 파노라마를 감상할 수 있습니다. 유네스코 세계문화유산 '아랍-노르만 팔레르모'에 포함됩니다.",
    ],
    infoTable: [
      { label: "위치", value: "Corso Vittorio Emanuele, 90134 Palermo (구시가지 서쪽)" },
      { label: "입장료", value: "본당: 무료 / 왕실 묘소·모뉴멘탈 구역: €13 (통합권)" },
      { label: "오픈시간", value: "월~토 09:30 ~ 17:00 / 일 09:00 ~ 13:00" },
    ],
    googleMapQuery: "Palermo+Cathedral+Sicily+Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d13.35268!3d38.11454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef8b3e3e3e3b%3A0x7e2e4b2fc5e1a123!2sPalermo+Cathedral!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },

  // ─── Day 5: Ibiza Tourist Spot Modals ───
  {
    type: "tourist-spot",
    id: "ibiza",
    title: "[관광정보] 이비자 (IBIZA)",
    images: [
      "/sectrion6/day5/Ibiza/ibiza_1.webp",
      "/sectrion6/day5/Ibiza/ibiza_2.webp",
      "/sectrion6/day5/Ibiza/ibiza_3.webp",
    ],
    descriptions: [
      "지중해의 보석, 스페인 이비자.",
      "발레아레스 제도에 속하는 이비자는 아름다운 지중해 해변과 눈부신 햇살을 자랑하는 섬입니다. 페니키아 시대까지 거슬러 올라가는 깊은 역사와 1999년 유네스코 세계복합유산으로 지정된 유서 깊은 구시가지가 숨어 있습니다.",
      "일반적으로 나이트클럽과 해변 파티의 도시로 알려져 있지만, 실제로는 청정한 해변, 중세 요새 도시, 전통 어촌 마을, 그리고 유기농 식품 문화 등 다채로운 매력을 지닌 섬입니다.",
      "6월에는 성수기의 혼잡함 없이 지중해의 온화한 기후와 아름다운 자연을 여유 있게 즐길 수 있습니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 스페인 발레아레스 제도 이비자" },
      { label: "인구", value: "약 5만 명 (관광 성수기 약 20만 명)" },
      { label: "주요 관광지", value: "다알트빌라 구시가지, 산타 마리아 대성당, 이비자 항구, 해변" },
      { label: "기후", value: "6월 평균 26°C (맑고 건조한 지중해성 기후)" },
    ],
    googleMapQuery: "Ibiza,Spain",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48840.0!2d1.4257!3d38.9067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1295a03e820db54f%3A0x75b93af81e01ef83!2sIbiza%2C%20Balearic%20Islands%2C%20Spain!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "ibizacathedral",
    title: "이비자 구시가지의 심장, 산타 마리아 대성당 (CATHEDRAL OF IBIZA)",
    images: [
      "/sectrion6/day5/Ibiza-Cathedral/cathedral_1.webp",
      "/sectrion6/day5/Ibiza-Cathedral/cathedral_2.webp",
      "/sectrion6/day5/Ibiza-Cathedral/cathedral_3.webp",
    ],
    descriptions: [
      "1235년 이비자 정복 직후 기존 이슬람 모스크 자리에 세워진 가톨릭 성당으로, 약 800년의 역사를 간직하고 있습니다.",
      "14세기에 카탈루냐 고딕 양식으로 재건축되었으며, 1817년 이비자 교구 주교좌 성당으로 격상되었습니다. 단순하고 견고한 고딕 탑과 18세기에 증축된 바로크 양식의 본당이 조화를 이루고 있습니다.",
      "다알트빌라 구시가지의 최고 지점에 자리하여 성당 앞 광장에서 이비자 항구와 지중해의 탁 트인 전망을 감상할 수 있습니다. 성당 내에는 종교 미술품을 소장한 박물관이 있어 이비자의 역사와 문화를 엿볼 수 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Plaça de la Catedral, s/n, 07800 Ibiza (다알트빌라 최정상)" },
      { label: "입장료", value: "성당 무료 / 박물관 €3 (별도)" },
      { label: "오픈시간", value: "월~토 09:30 ~ 13:30, 17:00 ~ 20:00 / 일 10:30 ~ 13:30" },
    ],
    googleMapQuery: "Cathedral+of+Ibiza+Spain",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d1.43927!3d38.90721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1295a02c7c7c7c7b%3A0x4c5d6e7f8a9b0c1d!2sCathedral%20of%20Ibiza!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "ibizadaltivila",
    title: "유네스코 세계유산, 이비자 성채 구시가지 (DALT VILA)",
    images: [
      "/sectrion6/day5/Ibiza-Dalt-Vila/daltivila_1.webp",
      "/sectrion6/day5/Ibiza-Dalt-Vila/daltivila_2.webp",
      "/sectrion6/day5/Ibiza-Dalt-Vila/daltivila_3.webp",
    ],
    descriptions: [
      "다알트빌라(Dalt Vila)는 이탈리아어로 '높은 마을'을 의미하며, 기원전 7세기 페니키아인들이 터를 잡은 이래 로마, 무어, 아라곤 등 여러 문명의 지배를 거치며 켜켜이 쌓인 역사의 흔적이 고스란히 남아 있습니다.",
      "16세기에 축조된 르네상스식 요새 성벽은 총 길이 약 2km에 달하며, 7개의 방어 탑과 2개의 성문(Portal de ses Taules, Portal Nou)이 잘 보존되어 있습니다. 1999년 자연 환경과 함께 유네스코 세계복합유산으로 등재되었습니다.",
      "좁고 구불구불한 돌길을 따라 오르면 하얀 벽의 집들과 아기자기한 카페, 갤러리가 방문객을 맞이하며, 성벽 위 전망대에서 이비자 항구와 지중해의 파노라마가 펼쳐집니다.",
    ],
    infoTable: [
      { label: "위치", value: "Dalt Vila, 07800 Eivissa (이비자 항구 바로 위)" },
      { label: "입장료", value: "무료 (성벽 내 구시가지 진입 기준)" },
      { label: "오픈시간", value: "상시 개방 (성문: 24시간)" },
    ],
    googleMapQuery: "Dalt+Vila+Ibiza+Spain",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d1.43773!3d38.90633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1295a02d0c8c8c8b%3A0x5d6e7f8a9b0c1d2e!2sDalt%20Vila%2C%20Ibiza!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },

  // ─── Day 6: Barcelona Tourist Spot Modals ───
  {
    type: "tourist-spot",
    id: "barcelona",
    title: "[관광정보] 바르셀로나 (BARCELONA)",
    images: [
      "/sectrion6/day6/Barcelona/barcelona_1.webp",
      "/sectrion6/day6/Barcelona/barcelona_2.webp",
      "/sectrion6/day6/Barcelona/barcelona_3.webp",
    ],
    descriptions: [
      "지중해가 품은 예술과 건축의 도시, 바르셀로나.",
      "스페인 카탈루냐 지방의 수도이자 유럽에서 가장 매력적인 도시 중 하나로, 천재 건축가 안토니 가우디의 독창적인 작품들이 도시 곳곳을 수놓고 있습니다. 고딕 지구의 중세 골목과 람블라스 거리의 활기, 지중해의 푸른 바다가 한 도시 안에서 공존합니다.",
      "사그라다 파밀리아, 구엘 공원, 까사 바트요, 까사 밀라 등 유네스코 세계문화유산으로 지정된 가우디의 건축물들은 바르셀로나를 세계 건축 여행의 성지로 만들고 있습니다.",
      "6월의 바르셀로나는 평균 기온 25°C 내외의 따뜻하고 화창한 날씨로, 야외 관광과 해변을 즐기기에 최적의 계절입니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 스페인 바르셀로나" },
      { label: "인구", value: "약 160만 명" },
      { label: "주요 관광지", value: "사그라다 파밀리아, 구엘 공원, 람블라스 거리, 까사 바트요" },
      { label: "기후", value: "6월 평균 25°C (맑고 건조, 지중해성 기후)" },
    ],
    googleMapQuery: "Barcelona,Spain",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96081.07594437966!2d2.077274!3d41.3947688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "parkguell",
    title: "가우디의 환상 정원, 구엘 공원 (PARK GÜELL)",
    images: [
      "/sectrion6/day6/Park-Guell/parkguell_1.webp",
      "/sectrion6/day6/Park-Guell/parkguell_2.webp",
      "/sectrion6/day6/Park-Guell/parkguell_3.webp",
    ],
    descriptions: [
      "안토니 가우디가 후원자 에우세비 구엘의 의뢰를 받아 1900년부터 1914년까지 조성한 자연과 건축의 완벽한 융합 공간입니다. 원래는 60개 주택 단지를 위한 계획 도시로 설계되었으나 상업적으로 실패하고 1926년 바르셀로나 시립 공원으로 탈바꿈했습니다.",
      "타일 조각(트렌카디스)으로 화려하게 장식된 구불구불한 벤치, 도마뱀 분수, 100개의 기둥 홀, 가우디가 직접 거주한 가우디 하우스 등 환상적인 볼거리가 가득합니다. 공원 정상의 전망대에서는 바르셀로나 전경과 지중해를 한눈에 담을 수 있습니다.",
      "1984년 유네스코 세계문화유산으로 지정되었으며, 바르셀로나에서 가장 인기 있는 관광지 중 하나로 사전 예약 없이는 입장이 어려울 수 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Carrer d'Olot, 7, 08024 Barcelona (그라시아 지구)" },
      { label: "입장료(유료 구역)", value: "성인 €18 / 7~12세·65세 이상 €13.50 / 7세 미만 무료" },
      { label: "오픈시간", value: "09:30 ~ 20:30 (3월 말~10월 말 / 사전 예약 필수)" },
    ],
    googleMapQuery: "Park+Guell+Barcelona+Spain",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d2.15275!3d41.41452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f8b5f67acb%3A0x5c8b4c0a3cbbf1a0!2sPark%20G%C3%BCell!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "sagradafamilia",
    title: "미완의 걸작, 사그라다 파밀리아 성가족 성당 (SAGRADA FAMÍLIA)",
    images: [
      "/sectrion6/day6/Sagrada-Familia/sagrada_1.webp",
      "/sectrion6/day6/Sagrada-Familia/sagrada_2.webp",
      "/sectrion6/day6/Sagrada-Familia/sagrada_3.webp",
    ],
    descriptions: [
      "1882년 착공 이후 140년이 넘도록 건설 중인 가우디 최대의 역작으로, 완공 시 높이 172.5m에 달하는 18개의 탑이 하늘을 향해 솟아오를 예정입니다. 가우디는 1926년 세상을 떠날 때까지 생애의 절반 이상을 이 성당에 바쳤으며, \"나의 고객은 서두르지 않는다\"는 말을 남겼습니다.",
      "탄생 파사드(Nativity Facade)의 섬세한 조각들과 수난 파사드(Passion Facade)의 기하학적 직선미가 극명한 대비를 이루며, 내부로 들어서면 숲속을 연상케 하는 나무 형태의 기둥들 사이로 스테인드글라스가 쏟아내는 빛의 향연이 펼쳐집니다.",
      "1984년 유네스코 세계문화유산으로 지정되었으며, 현재 2026년 완공을 목표로 공사가 진행 중입니다. 바르셀로나에서 가장 많은 방문객이 찾는 명소로 반드시 사전 예약이 필요합니다.",
    ],
    infoTable: [
      { label: "위치", value: "Carrer de Mallorca, 401, 08013 Barcelona (엑샴플레 지구)" },
      { label: "입장료", value: "성인 €26 (기본) / 탑 입장 포함 €36 / 가이드 투어 €40" },
      { label: "오픈시간", value: "월~토 09:00 ~ 20:00 / 일 10:30 ~ 20:00 (4~9월 기준)" },
    ],
    googleMapQuery: "Sagrada+Familia+Barcelona+Spain",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d2.17442!3d41.40363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a29c4c9e3b3d%3A0x3e6a3a7c5f1a5b2c!2sSagrada%20Fam%C3%ADlia!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "casabatllo",
    title: "용의 등뼈 건물, 까사 바트요 (CASA BATLLÓ)",
    images: [
      "/sectrion6/day6/Casa-Batllo/casabatllo_1.webp",
      "/sectrion6/day6/Casa-Batllo/casabatllo_2.webp",
      "/sectrion6/day6/Casa-Batllo/casabatllo_3.webp",
    ],
    descriptions: [
      "1904년부터 1906년 사이 가우디가 기존 건물을 리모델링하여 완성한 건축 예술의 결정체로, 파세이그 드 그라시아(Passeig de Gràcia) 대로에서 단연 눈길을 사로잡는 존재입니다. 물결치는 듯한 외벽, 부서진 타일 조각(트렌카디스)으로 뒤덮인 파란색·초록색 파사드, 그리고 용의 등뼈를 닮은 지붕이 특징입니다.",
      "용의 등뼈를 형상화한 지붕과 해골 모양의 발코니를 가진 이 건물은 카탈루냐의 수호성인 성 조르디(Sant Jordi)가 용을 물리치는 전설을 건축으로 표현했다고 알려져 있습니다.",
      "내부는 바다 속을 유영하는 듯한 곡선과 빛의 조화로 채워져 있으며, 옥상 테라스에서는 가우디의 섬세한 타일 예술과 바르셀로나의 파노라마 경관을 함께 즐길 수 있습니다. 2005년 유네스코 세계문화유산으로 지정되었습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Passeig de Gràcia, 43, 08007 Barcelona (엑샴플레 지구)" },
      { label: "입장료", value: "블루 €29 / 실버 €34 / 골드 €39 (외부 관람 무료)" },
      { label: "오픈시간", value: "매일 09:00 ~ 22:00 (마지막 입장 20:45)" },
    ],
    googleMapQuery: "Casa+Batllo+Barcelona+Spain",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d2.16505!3d41.39164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2e15ebef3b3%3A0x1f1a2b3c4d5e6f7a!2sCasa%20Batll%C3%B3!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "casamila",
    title: "채석장이라 불리는 가우디의 아파트, 까사 밀라 (CASA MILÀ - LA PEDRERA)",
    images: [
      "/sectrion6/day6/Casa-Mila/casamila_1.webp",
      "/sectrion6/day6/Casa-Mila/casamila_2.webp",
      "/sectrion6/day6/Casa-Mila/casamila_3.webp",
    ],
    descriptions: [
      "1906년부터 1912년 사이 가우디가 설계한 마지막 민간 건축물로, 파도치는 바위 산을 연상시키는 물결 모양의 석회암 외벽 때문에 바르셀로나 사람들로부터 '라 페드레라(La Pedrera, 채석장)'라는 별명을 얻었습니다.",
      "직선이 하나도 없는 유기적인 구조가 특징으로, 중정을 중심으로 배치된 거주 공간과 통풍을 고려한 내부 설계는 당시로서는 매우 혁신적이었습니다. 옥상 테라스에는 투구를 쓴 전사 혹은 성모 마리아를 연상케 하는 독창적인 굴뚝 조형물들이 즐비합니다.",
      "현재 일부 층은 가우디의 건축 세계를 소개하는 '에스파이 가우디(Espai Gaudí)' 박물관으로 운영되고 있으며, 2005년 유네스코 세계문화유산으로 지정되었습니다. 외부 관람은 무료이며 야경도 매우 아름답습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Passeig de Gràcia, 92, 08008 Barcelona (엑샴플레 지구)" },
      { label: "입장료", value: "성인 €24 (온라인) / €25 (현장) · 12세 미만 무료 (외부 관람 무료)" },
      { label: "오픈시간", value: "매일 09:00 ~ 20:30 (3월~11월 초 기준)" },
    ],
    googleMapQuery: "Casa+Mila+La+Pedrera+Barcelona+Spain",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d2.16164!3d41.39534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dc3b2e0b5f%3A0x2e7f1a0b3c4d5e6a!2sCasa%20Mil%C3%A0%20-%20La%20Pedrera!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },

  // ─── Day 7: Marseille Tourist Spot Modals ───
  {
    type: "tourist-spot",
    id: "marseille",
    title: "[관광정보] 마르세유 (MARSEILLE)",
    images: [
      "/sectrion6/day7/Marseille/marseille_1.webp",
      "/sectrion6/day7/Marseille/marseille_2.webp",
      "/sectrion6/day7/Marseille/marseille_3.webp",
    ],
    descriptions: [
      "프랑스 제2의 도시이자 지중해의 관문, 마르세유.",
      "기원전 600년경 고대 그리스인들이 '마살리아(Massalia)'라는 이름으로 건설한 마르세유는 프랑스에서 가장 오래된 도시 중 하나입니다. 지중해를 품에 안은 항구 도시로서 수천 년의 역사를 통해 유럽, 북아프리카, 중동을 잇는 교역과 문화 교류의 중심지 역할을 해왔습니다.",
      "프로방스 지방의 중심 도시인 마르세유는 세계적으로 유명한 부야베스(bouillabaisse) 생선 스튜의 고향이기도 합니다. 언덕 위에서 도시 전체를 내려다보는 노트르담 드 라 가르드 성당, 활기찬 구항구, 지중해 최대 규모를 자랑하는 마조르 대성당 등 다채로운 볼거리가 방문객을 맞이합니다.",
      "전형적인 지중해성 기후 덕분에 6월에는 맑고 쾌청한 날씨 속에 평균 22~27°C의 따뜻한 온도가 유지되어 관광하기에 최적의 시기입니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 프랑스 마르세유" },
      { label: "인구", value: "약 87만 명 (광역권 약 191만 명)" },
      { label: "주요 관광지", value: "노트르담 드 라 가르드 성당, 구항구, 마조르 대성당" },
      { label: "기후", value: "6월 평균 22~27°C (맑고 건조한 지중해성 기후)" },
    ],
    googleMapQuery: "Marseille,France",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185576.7936699!2d5.2295!3d43.2965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd979a70!2sMarseille%2C%20France!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "notredamedelagarde",
    title: "마르세유의 수호성당, 노트르담 드 라 가르드 (NOTRE-DAME DE LA GARDE)",
    images: [
      "/sectrion6/day7/Notre-Dame/notredame_1.webp",
      "/sectrion6/day7/Notre-Dame/notredame_2.webp",
      "/sectrion6/day7/Notre-Dame/notredame_3.webp",
    ],
    descriptions: [
      "해발 162m의 가르드 언덕 정상에 우뚝 선 노트르담 드 라 가르드 성당(Notre-Dame de la Garde)은 마르세유를 대표하는 가장 상징적인 랜드마크입니다.",
      "1853년부터 1864년에 걸쳐 건축된 이 네오 비잔틴 양식의 대성당은 높이 11m의 황금빛 성모 마리아상을 종탑 꼭대기에 얹고 있어 마르세유 어디서든 눈에 띕니다. 마르세유 시민들은 이 성당을 친근하게 '라 본 메르(La Bonne Mère, 자애로운 어머니)'라고 부르며, 오랜 세월 항해에 나서는 어부와 선원들의 수호성당으로 사랑받아 왔습니다.",
      "성당 내부에는 난파 위기에서 살아 돌아온 선원들이 봉헌한 수백 점의 봉헌화와 모형 선박이 천장 가득 걸려 있어 독특하고 감동적인 분위기를 자아냅니다. 성당 테라스에 오르면 마르세유 구항구와 지중해, 이프 섬(Château d'If)까지 360도 파노라마로 펼쳐지는 압도적인 전망을 감상할 수 있습니다.",
      "언덕 아래 구항구 광장에서 출발하는 꼬마 기차(Petit Train)를 이용하면 약 20분 만에 편안하게 성당까지 올라갈 수 있어 편리합니다.",
    ],
    infoTable: [
      { label: "위치", value: "Rue Fort du Sanctuaire, 13281 Marseille (가르드 언덕 정상)" },
      { label: "입장료", value: "무료 (성당 내부 관람 기준)" },
      { label: "오픈시간", value: "매일 07:00 ~ 19:15 (하절기 연장 운영)" },
    ],
    googleMapQuery: "Notre-Dame+de+la+Garde+Marseille+France",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.5!2d5.37028!3d43.28396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0c3b3b3b3b3%3A0x1a2b3c4d5e6f7a8b!2sNotre-Dame+de+la+Garde%2C+Marseille!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "vieuxport",
    title: "마르세유의 발상지, 비외 포르 구항구 (VIEUX-PORT)",
    images: [
      "/sectrion6/day7/Vieux-Port/vieuxport_1.webp",
      "/sectrion6/day7/Vieux-Port/vieuxport_2.webp",
      "/sectrion6/day7/Vieux-Port/vieuxport_3.webp",
    ],
    descriptions: [
      "비외 포르(Vieux-Port), 즉 구항구는 기원전 600년 고대 그리스인들이 마르세유를 처음 세운 바로 그 자리로, 도시의 심장부이자 발상지입니다.",
      "길이 약 1km, 너비 300m의 말발굽 모양 항구에는 수백 척의 요트와 어선이 촘촘히 정박해 있으며, 항구 주변으로는 각양각색의 카페, 레스토랑, 노천 바가 활기차게 늘어서 있습니다. 매일 아침 항구 한쪽에서는 어부들이 갓 잡아 올린 싱싱한 해산물을 파는 생선 시장(Marché aux Poissons)이 열려 현지의 생생한 일상을 경험할 수 있습니다.",
      "항구 입구 양쪽에는 17세기에 건설된 생장 요새(Fort Saint-Jean)와 생니콜라 요새(Fort Saint-Nicolas)가 마주보고 있어 역사적인 위용을 더합니다. 2013년 유럽 문화 수도로 지정된 이후 항구 주변이 대대적으로 정비되어, 노먼 포스터가 설계한 파라솔 형태의 대형 거울 지붕 설치 작품 '오마주(Les Ombrières)'가 새로운 명물로 자리 잡았습니다.",
      "저녁 무렵 황금빛으로 물드는 구항구의 노을 풍경은 마르세유 여행의 백미로 꼽힙니다.",
    ],
    infoTable: [
      { label: "위치", value: "Quai du Port & Quai de la Rive Neuve, 13002 Marseille" },
      { label: "입장료", value: "무료 (야외 항구 광장)" },
      { label: "오픈시간", value: "상시 개방 (생선 시장: 매일 오전 08:00 ~ 13:00)" },
    ],
    googleMapQuery: "Vieux-Port+Marseille+France",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8!2d5.36978!3d43.29517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0b4a4a4a4a4%3A0x2b3c4d5e6f7a8b9c!2sVieux-Port+de+Marseille!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "cathedraledelamajor",
    title: "지중해 최대 성당, 마조르 대성당 (CATHÉDRALE DE LA MAJOR)",
    images: [
      "/sectrion6/day7/Cathedrale-Major/major_1.webp",
      "/sectrion6/day7/Cathedrale-Major/major_2.webp",
      "/sectrion6/day7/Cathedrale-Major/major_3.webp",
    ],
    descriptions: [
      "마조르 대성당(Cathédrale de la Major)은 지중해 연안에서 19세기 이후 건축된 성당 중 가장 웅장한 규모를 자랑하는 걸작으로, 프랑스 최대 규모의 성당 중 하나입니다.",
      "1852년부터 1893년까지 약 40년에 걸쳐 완공된 이 비잔틴-로마네스크 양식의 대성당은 길이 142m, 폭 70m, 높이 70m에 달하는 거대한 규모를 자랑합니다. 초록빛과 흰빛이 교차하는 줄무늬 알베르빌 대리석으로 마감된 외벽은 지중해 하늘 아래 더욱 인상적인 자태를 드러냅니다.",
      "성당 옆에는 11세기에 건축된 구 마조르 성당(Ancienne Cathédrale de la Major)의 일부가 보존되어 있어, 신구 두 성당이 나란히 서 있는 독특한 광경을 볼 수 있습니다. 성당 내부에는 아름다운 모자이크와 19세기 조각 작품들이 전시되어 있으며, 인근에는 MuCEM(유럽·지중해 문명 박물관)과 생장 요새가 자리해 함께 둘러보기 좋습니다.",
      "구항구 북쪽 해안가에 위치해 있어 바다를 배경으로 성당을 감상하는 풍경이 특히 아름답습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Place de la Major, 13002 Marseille (구항구 북서쪽 해안가)" },
      { label: "입장료", value: "무료" },
      { label: "오픈시간", value: "화~일 09:00 ~ 18:30 (월요일 휴관, 미사 시간 관람 제한)" },
    ],
    googleMapQuery: "Cathedrale+de+la+Major+Marseille+France",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.5!2d5.36208!3d43.29828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0b5b5b5b5b5%3A0x3c4d5e6f7a8b9c0d!2sCath%C3%A9drale+de+la+Major%2C+Marseille!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },

  // ─── Day 8: Genoa Tourist Spot Modals ───
  {
    type: "tourist-spot",
    id: "genoa",
    title: "[관광정보] 제노아 (GENOVA)",
    images: [
      "/sectrion6/day8/Genoa/genoa_1.webp",
      "/sectrion6/day8/Genoa/genoa_2.webp",
      "/sectrion6/day8/Genoa/genoa_3.webp",
    ],
    descriptions: [
      "크리스토퍼 콜럼버스의 고향, 제노바.",
      "이탈리아 북서부 리구리아 해안에 자리한 제노바는 아메리카 대륙을 발견한 탐험가 콜럼버스의 출생지입니다. 중세 시대 강력한 해양 공화국으로서 지중해를 제패하며 세계 최초의 은행을 운영한 무역과 금융의 도시였습니다.",
      "흑백 줄무늬 대성당과 미로처럼 얽힌 구시가지(카루지)는 유네스코 세계문화유산으로 등재되어 있으며, 2004년 유럽 문화 수도로 선정된 예술과 역사의 도시입니다. 구시가지 내 좁은 골목길(카루지)은 중세 분위기를 그대로 간직하고 있습니다.",
      "6월의 제노바는 평균 22~26°C의 온화한 날씨로 항구와 구시가지를 거닐기에 쾌적합니다.",
    ],
    infoTable: [
      { label: "도시", value: "유럽 이탈리아 리구리아 제노바" },
      { label: "인구", value: "약 57만 명" },
      { label: "주요 관광지", value: "산 로렌초 대성당, 팔라초 산 조르조, 구시가지(카루지)" },
      { label: "기후", value: "6월 평균 22~26°C (온화한 지중해성 기후)" },
    ],
    googleMapQuery: "Genoa,Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94034.9!2d8.8778!3d44.4056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d341b4b8b3de79%3A0xfff4c0d6278e4406!2sGenoa%2C%20GE%2C%20Italy!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "sanlorenzo",
    title: "제노바의 수호 대성당, 산 로렌초 대성당 (CATTEDRALE DI SAN LORENZO)",
    images: [
      "/sectrion6/day8/San-Lorenzo/sanlorenzo_1.webp",
      "/sectrion6/day8/San-Lorenzo/sanlorenzo_2.webp",
      "/sectrion6/day8/San-Lorenzo/sanlorenzo_3.webp",
    ],
    descriptions: [
      "제노바의 심장부에 우뚝 선 산 로렌초 대성당은 도시의 수호성인을 기리는 로마 가톨릭 성당입니다.",
      "1118년 교황 젤라시우스 2세에 의해 봉헌된 이후 여러 차례 재건을 거쳐 지금의 모습을 갖추었습니다. 흑백 대리석 줄무늬가 번갈아 이어지는 고딕 파사드는 제노바 건축의 정수로 꼽히며, 로마네스크·고딕·르네상스 양식이 혼합된 독특한 외관을 자랑합니다.",
      "내부에는 제노바가 십자군 원정에서 가져온 성 세례 요한의 유해와 성물, 그리고 제2차 세계대전 당시 성당에 명중했으나 불발된 실물 영국 해군 포탄이 전시되어 있어 독특한 볼거리를 제공합니다. 보물관(Museo del Tesoro)에는 성작, 성물함 등 귀중한 종교 유물이 보관되어 있습니다.",
    ],
    infoTable: [
      { label: "위치", value: "Piazza San Lorenzo, 16123 Genova (구시가지 중심)" },
      { label: "입장료", value: "성당: 무료 / 보물관: €6" },
      { label: "오픈시간", value: "월~토 08:00 ~ 12:00, 15:00 ~ 19:00 / 일·공휴일 08:00 ~ 12:30" },
    ],
    googleMapQuery: "Cattedrale+di+San+Lorenzo+Genova+Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d8.93067!3d44.40762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d3410e4b1f1b1b%3A0xa1b2c3d4e5f6a7b8!2sCattedrale%20di%20San%20Lorenzo%2C%20Genova!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },
  {
    type: "tourist-spot",
    id: "palazzosangiorgio",
    title: "마르코 폴로가 갇혔던 궁전, 팔라초 산 조르조 (PALAZZO SAN GIORGIO)",
    images: [
      "/sectrion6/day8/Palazzo-San-Giorgio/palazzo_1.webp",
      "/sectrion6/day8/Palazzo-San-Giorgio/palazzo_2.webp",
      "/sectrion6/day8/Palazzo-San-Giorgio/palazzo_3.webp",
    ],
    descriptions: [
      "제노바 항구 바로 앞에 자리한 팔라초 산 조르조는 1260년 건립된 제노바 최초의 공공 건물입니다.",
      "1298년 쿠르촐라 해전에서 포로로 잡힌 마르코 폴로가 이곳에 수감되었고, 같은 감옥에 있던 루스티켈로 다 피사에게 동방 여행담을 구술하여 '동방견문록(Il Milione)'이 탄생한 역사적 장소입니다. 건물 외벽에는 마르코 폴로의 수감을 기념하는 명판이 부착되어 있습니다.",
      "15세기부터는 유럽 역사상 가장 오래된 은행 중 하나인 산 조르조 은행(Casa di San Giorgio)의 본부로 사용되었습니다. 현재는 제노바 항만청(Autorità Portuale) 청사로 쓰이고 있으며, 토요일에 한해 일반인 관람이 가능합니다.",
    ],
    infoTable: [
      { label: "위치", value: "Piazza Caricamento, 16124 Genova (항구 인근)" },
      { label: "입장료", value: "무료" },
      { label: "오픈시간", value: "토요일 10:00 ~ 18:00 (외부 관람: 상시)" },
    ],
    googleMapQuery: "Palazzo+San+Giorgio+Genova+Italy",
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d8.92654!3d44.40886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d3410e1c2d3d3c%3A0xb2c3d4e5f6a7b8c9!2sPalazzo%20San%20Giorgio%2C%20Genova!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
  },

  // ─── Ship Info Modal ───
  {
    type: "ship-info",
    id: "mscseaview",
    title: "MSC 씨뷰 (MSC SEAVIEW)",
    images: [
      "/sectrion6/day2/msc_seaview_1.webp",
      "/sectrion6/day2/msc_seaview_2.webp",
      "/sectrion6/day2/msc_seaview_3.webp",
    ],
    descriptions: [
      "MSC 크루즈의 초대형 럭셔리 선박, MSC 씨뷰.",
      "총 톤수 153,516톤, 전장 323m, 높이 74m, 최대 5,119명의 승객을 수용하는 MSC 씨뷰는 2018년 이탈리아 제노바에서 취항한 씨사이드(Seaside)급 크루즈 선박입니다. 20층 규모의 선내에는 1,413명의 승무원이 최상의 서비스를 제공합니다.",
      "선내에는 950석 규모의 대극장, 18층 Forest Aquaventure Park 워터파크, 짚라인, 수영장 4개, 자쿠지 13개, MSC Aurea Spa, 플래티넘 카지노, 레스토랑 11곳 이상, 바 및 라운지 20여 곳 등 풍부한 부대시설이 갖춰져 있습니다.",
    ],
    infoTable: [
      { label: "선사", value: "MSC 크루즈 (MSC Cruises)" },
      { label: "취항", value: "2018년 (이탈리아 제노바)" },
      { label: "총 톤수", value: "153,516 GT" },
      { label: "전장 / 높이", value: "323m / 74m" },
      { label: "승객 정원", value: "최대 5,119명" },
      { label: "승무원", value: "1,413명" },
      { label: "규모", value: "20층 (데크 기준) / 객실 2,066개" },
    ],
  },

  // ─── Cruise At Sea Modal ───
  {
    type: "cruise-at-sea",
    id: "mscseainterior",
    title: "MSC 씨뷰 전일 해상",
    images: [
      "/sectrion6/day3/day3_5.avif",
      "/sectrion6/day3/day3_8.avif",
      "/sectrion6/day3/day3_1.webp",
      "/sectrion6/day3/day3_4.webp",
      "/sectrion6/day3/day3_7.avif",
      "/sectrion6/day3/day3_2.webp",
      "/sectrion6/day3/day3_3.webp",
      "/sectrion6/day3/day3_6.webp",
    ],
    descriptions: [
      "선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용",
    ],
    bulletPoints: [
      "18층 Forest Aquaventure Park 워터파크와 짜릿한 짚라인을 즐겨보세요.",
      "4개의 수영장과 13개의 자쿠지에서 지중해 바다를 만끽해 보세요.",
      "950석 대극장에서 브로드웨이 스타일의 화려한 공연을 관람해 보세요.",
      "MSC Aurea Spa에서 전문 테라피스트의 마사지로 피로를 풀어보세요.",
      "워터프론트 보드워크를 거닐며 바다 풍경을 즐기고 다양한 레스토랑을 방문해 보세요.",
      "스포츠 댄스 강습, 요가 강습 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.",
    ],
    closingText: "지중해 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.",
    infoTable: [
      { label: "선박", value: "MSC 씨뷰 (MSC Seaview)" },
      { label: "주요 시설", value: "워터파크, 수영장 4개, 스파, 카지노, 대극장, 짚라인" },
      { label: "식사", value: "메인 다이닝룸, 뷔페, 특식 레스토랑 등" },
      { label: "드레스코드", value: "캐주얼 (스마트 캐주얼 권장)" },
    ],
  },

  // ─── Info Modals ───
  {
    type: "info",
    id: "boarding",
    title: "MSC 씨뷰호 승선 수속 안내",
    sections: [
      {
        heading: "1. 수하물 위탁 (Luggage Drop-off)",
        items: [
          { text: "터미널 도착 후 큰 수하물을 위탁하시면 배정된 선실 앞으로 안전하게 배달됩니다." },
          { text: "여권, 승선 서류, 귀중품 및 파손 주의 물품은 반드시 직접 소지하고 탑승해 주세요." },
        ],
      },
      {
        heading: "2. 승선 수속 (Check-in & Boarding)",
        items: [
          { text: "준비물: 여권, 크루즈 승선 서류, 해외 결제 가능한 신용카드" },
          { text: "위탁 수속 후 체크인 카운터에서 본인 확인 및 수속을 진행합니다." },
          { text: "모든 탑승 수속은 크루즈 출발 시간 2시간 전까지 반드시 완료되어야 합니다." },
          { text: "선실 내에는 신분증, 결제 수단, 객실 키 역할을 하는 '승선 카드'가 비치되어 있습니다. (분실 시 안내 데스크에서 재발급 가능)" },
        ],
      },
      {
        heading: "3. 승선 후 유의사항 (After Boarding)",
        items: [
          { text: "필수 안전 교육(Safety Drill): 승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다." },
          { text: "기항지 선택 관광: 선사에서 운영하는 기항지 투어는 조기 마감될 수 있으므로 승선 첫날 신청하시기를 권장합니다. (변경/취소 시 수수료 발생 가능)" },
        ],
      },
    ],
  },
  {
    type: "info",
    id: "disembarkation",
    title: "크루즈 하선 수속 안내",
    sections: [
      {
        heading: "1. 선내 결제 비용 정산 (Settlement)",
        items: [
          { text: "하선 전날 저녁 또는 당일 아침, 선실로 상세 결제 내역서가 배달됩니다.", bold: "내역 확인:" },
          { text: "승선 시 등록한 신용카드로 자동 청구되므로, 내역에 이상이 없다면 별도의 하선 수속 없이 편안하게 대기하시면 됩니다. (현금 결제 희망 시 유로 EUR 사용 가능)", bold: "결제 방식:" },
          { text: "정산서를 받지 못하셨거나 청구 내역에 문의가 있으신 경우, 승선 카드를 지참하여 고객 안내 데스크(Guest Relations)를 방문해 주세요.", bold: "안내 데스크:" },
        ],
      },
      {
        heading: "2. 하선 전 수하물 위탁 (Luggage Drop-off)",
        items: [
          { text: "하선 전날 선실로 전달되는 '전용 수하물 태그'를 가방에 부착한 뒤, 선사가 지정한 시간까지 선실 문 밖에 내어주세요. 위탁하신 짐은 하선 후 크루즈 터미널에서 찾으실 수 있습니다.", bold: "수하물 내놓기:" },
          { text: "주의 사항: 하선 당일 입을 옷, 여권, 승선 카드, 신용카드, 귀중품 및 상비약 등은 절대 위탁 수하물에 넣지 마시고 반드시 본인이 직접 소지(핸드캐리)하여 하선해 주시기 바랍니다.", isWarning: true },
        ],
      },
    ],
  },
];
