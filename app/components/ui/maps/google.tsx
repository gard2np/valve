import React, { useState } from "react"
import { Input } from "../input"
import { Button } from "../button"

interface GoogleMapIframeProps {
  lat: number
  lng: number
  width?: string
  height?: string
}

const GoogleMapIframe: React.FC<GoogleMapIframeProps> = ({
  lat,
  lng,
  width = "100%",
  height = "400px",
}) => {
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentLat, setCurrentLat] = useState(lat)
  const [currentLng, setCurrentLng] = useState(lng)
  const [showDropdown, setShowDropdown] = useState(false)
  
  const buildingInfo = [
    {
      name: "행복타워",
      address: "무령로 586",
      lat: 36.475101,
      lng: 127.152441,
    },
    {
      name: "대영상가2",
      address: "고운뜰7길 9",
      lat: 36.512696,
      lng: 127.240749,
    },
    {
      name: "엠원업",
      address: "용포로 115",
      lat: 36.468564,
      lng: 127.281215,
    },
    {
      name: "현다이엔지",
      address: " ",
      lat: 36.496744,
      lng: 127.331825,
    },
    {
      name: "(재)신용보증재단중앙회",
      address: "나성남로 7-12",
      lat: 36.481770,
      lng: 127.262354,
    },
    {
      name: "SR파크원",
      address: "한누리대로 245",
      lat: 36.486149,
      lng: 127.257297,
    },
    {
      name: "행복의 아침",
      address: "한누리대로 292",
      lat: 36.490386,
      lng: 127.257291,
    },
    {
      name: "세종에이스타워",
      address: "나성로 33-6",
      lat: 36.482601,
      lng: 127.263163,
    },
    {
      name: "애플타워",
      address: "나성로 133-15",
      lat: 36.490710,
      lng: 127.257822,
    },
    {
      name: "메가타워1",
      address: "나성북로 9",
      lat: 36.489868,
      lng: 127.258051,
    },
    {
      name: "MVG빌딩",
      address: "나성북로 15",
      lat: 36.489919,
      lng: 127.258371,
    },
    {
      name: "어반아트리움파인앤유퍼스트원",
      address: "나성북로 30",
      lat: 36.488603,
      lng: 127.259804,
    },
    {
      name: "더센트럴",
      address: "나성로 96",
      lat: 36.487391,
      lng: 127.260710,
    },
    {
      name: "마크원에비뉴",
      address: "국세청로 32",
      lat: 36.485496,
      lng: 127.261743,
    },
    {
      name: "해피라움페스타",
      address: "대평3길 17",
      lat: 36.473329,
      lng: 127.275439,
    },
    {
      name: "시티오브드림",
      address: "한누리대로 2264",
      lat: 36.473117,
      lng: 127.276510,
    },
    {
      name: "황산프라자",
      address: "갈매로 58",
      lat: 36.470850,
      lng: 127.275691,
    },
    {
      name: "알파메디컬센터",
      address: "한누리대로 2275",
      lat: 36.471336,
      lng: 127.276556,
    },
    {
      name: "정부출연연구기관 세종시",
      address: "시청대로 370",
      lat: 36.493022,
      lng: 127.304888,
    },
    {
      name: "금강노을",
      address: "시청대로 115",
      lat: 36.479039,
      lng: 127.285004,
    },
    {
      name: "리버피크닉",
      address: "시청대로 137",
      lat: 36.479710,
      lng: 127.286597,
    },
    {
      name: "스마트허브2",
      address: "한누리대로 2144",
      lat: 36.478870,
      lng: 127.287583,
    },
    {
      name: "스마트허브1",
      address: "한누리대로 2150",
      lat: 36.478809,
      lng: 127.287451,
    },
    {
      name: "스타힐타워1",
      address: "한누리대로 2135",
      lat: 36.478255,
      lng: 127.289429,
    },
    {
      name: "스타힐타워2",
      address: "한누리대로 2129",
      lat: 36.478389,
      lng: 127.289721,
    },
    {
      name: "금남프라자",
      address: "호려울로 45",
      lat: 36.478347,
      lng: 127.289751,
    },
    {
      name: "세종시드니",
      address: "호려울로 29",
      lat: 36.477676,
      lng: 127.290085,
    },
    {
      name: "스마트허브3",
      address: "호려울로 19",
      lat: 36.477313,
      lng: 127.289258,
    },
    {
      name: "골드타워",
      address: "호려울로 51",
      lat: 36.478200,
      lng: 127.289448,
    },
    {
      name: "네이버타워",
      address: "호려울로 9",
      lat: 36.476995,
      lng: 127.288424,
    },
    {
      name: "크리스마스빌딩",
      address: "새롬중앙로 34",
      lat: 36.484464,
      lng: 127.252015,
    },
    {
      name: "해피라움W",
      address: "새롬중앙로 62-15",
      lat: 36.487344,
      lng: 127.251345,
    },
    {
      name: "새뜸프라자",
      address: "새롬중앙로 33",
      lat: 36.483799,
      lng: 127.251761,
    },
    {
      name: "리치타워2",
      address: "법원2로 18",
      lat: 36.486987,
      lng: 127.303610,
    },
    {
      name: "지엘플렉스I",
      address: "소담1로 12",
      lat: 36.485249,
      lng: 127.301338,
    },
    {
      name: "해피트리",
      address: "보듬3로 158",
      lat: 36.512040,
      lng: 127.242310,
    },
    {
      name: "다올비지니스센터",
      address: "아름서1길 13-9",
      lat: 36.511535,
      lng: 127.242917,
    },
    {
      name: "엠브릿지1",
      address: "도움3로 19",
      lat: 36.502615,
      lng: 127.257505,
    },
    {
      name: "엠브릿지2",
      address: "다솜1로 36",
      lat: 36.502111,
      lng: 127.257279,
    },
    {
      name: "세종복합개발(C33블럭)",
      address: "다솜1로 20",
      lat: 36.500525,
      lng: 127.256496,
    },
    {
      name: "KT&G세종타워B",
      address: "가름로 143",
      lat: 36.499899,
      lng: 127.256678,
    },
    {
      name: "세종포스트빌딩",
      address: "한누리대로 499",
      lat: 36.507846,
      lng: 127.260827,
    },
    {
      name: "(주)케이티앤지",
      address: "한누리대로 411",
      lat: 36.501051,
      lng: 127.259495,
    },
    {
      name: "베스트웨스턴플러스호텔",
      address: "도움1로 7",
      lat: 36.500276,
      lng: 127.259075,
    },
    {
      name: "중앙타운",
      address: "절재로 194",
      lat: 36.508135,
      lng: 127.263074,
    },
    {
      name: "정부세종청사(중앙동)",
      address: "도움6로 42",
      lat: 36.501401,
      lng: 127.264219,
    },
    {
      name: "세종일번가",
      address: "도움8로 81",
      lat: 36.504297,
      lng: 127.270666,
    },
    {
      name: "세종비즈니스센터",
      address: "가름로 232",
      lat: 36.495213,
      lng: 127.264724,
    },
    {
      name: "세종모닝시티",
      address: "가름로 170-14",
      lat: 36.497136,
      lng: 127.258644,
    },
    {
      name: "세종파이낸스센터3차",
      address: "가름로 180",
      lat: 36.497208,
      lng: 127.259997,
    },
    {
      name: "세종파이낸스센터2차",
      address: "가름로 194",
      lat: 36.496998,
      lng: 127.260788,
    },
    {
      name: "세종파이낸스센터1차",
      address: "갈매로 363",
      lat: 36.496126,
      lng: 127.262402,
    },
    {
      name: "에비뉴힐A",
      address: "갈매로 353",
      lat: 36.495577,
      lng: 127.261821,
    },
    {
    name: "에비뉴힐B",
      address: "갈매로 351",
      lat: 36.495008,
      lng: 127.261725,
    },
    {
      name: "타이어뱅크빌딩",
      address: "한누리대로 350",
      lat: 36.492751,
      lng: 127.256558,
    },
    {
      name: "메가시티",
      address: "도움1로 106",
      lat: 36.502240,
      lng: 127.248404,
    },
    {
      name: "(주)씨에이치씨랩",
      address: " ",
      lat: 36.494467,
      lng: 127.326788,
    },
    {
      name: "세종 유타워",
      address: "집현동로 76",
      lat: 36.491555,
      lng: 127.326045,
    },
    {
      name: "주식회사 엘디스",
      address: "남세종로 73",
      lat: 36.492279,
      lng: 127.325298,
    },
    {
      name: "대명벨리온",
      address: "집현중앙7로 6",
      lat: 36.497857,
      lng: 127.330738,
    },
    {
      name: "센터빌딩B동",
      address: "노을3로 101",
      lat: 36.480154,
      lng: 127.252896,
    },
    {
      name: "센터빌딩A동",
      address: "노을3로 101",
      lat: 36.480083,
      lng: 127.253668,
    },
    {
      name: "송원프라자",
      address: "누리로 106",
      lat: 36.480124,
      lng: 127.252699,
    },
    {
      name: "동양고속버스터미널",
      address: "번영로 223",
      lat: 36.784855,
      lng: 127.015039,
    },
    {
      name: "삼성미즈병원",
      address: "희망로46번길 16",
      lat: 36.788232,
      lng: 127.104317,
    },
    {
      name: "케이알디",
      address: "연화로 133",
      lat: 36.787099,
      lng: 127.105040,
    },
    {
      name: "(주)부일",
      address: "희망로46번길 19-3",
      lat: 36.788846,
      lng: 127.104124,
    },
    {
      name: "(주)아산시네마",
      address: "온천대로 1538",
      lat: 36.780446,
      lng: 127.008448,
    },
    {
      name: "근린생활시설",
      address: "음봉로 515-46",
      lat: 36.844639,
      lng: 127.068223,
    },
    {
      name: "한들물빛초등학교",
      address: "한들물빛도시로 49",
      lat: 36.783786,
      lng: 127.085113,
    },
    {
      name: "아산탕정 삼성갤럭시M타워",
      address: "용머리길 82",
      lat: 36.796709,
      lng: 127.053984,
    },
    {
      name: "브라운스톤 갤럭시",
      address: "용머리길 22",
      lat: 36.795306,
      lng: 127.048631,
    },
    {
      name: "백석문화센터",
      address: "청수14로 96",
      lat: 36.785134,
      lng: 127.156935,
    },
    {
      name: "파크힐",
      address: "불당23로 73-27",
      lat: 36.819999,
      lng: 127.109852,
    },
    {
      name: "천안 불당동 복합건물",
      address: "불당25로 174",
      lat: 36.816730,
      lng: 127.108390,
    },
    {
      name: "마블러스에스타워",
      address: "불당22대로 86",
      lat: 36.815181,
      lng: 127.108116,
    },
    {
      name: "주식회사 정석",
      address: "불당21로 67-8",
      lat: 36.813261,
      lng: 127.107927,
    },
    {
      name: "골든프라자",
      address: "불당25로 142",
      lat: 36.813810,
      lng: 127.107965,
    },
    {
      name: "세훈프라자",
      address: "불당34길 22",
      lat: 36.806866,
      lng: 127.106311,
    },
    {
      name: "삼천리모터스",
      address: "천안대로 1265",
      lat: 36.854100,
      lng: 127.153293,
    },
    {
      name: "주식회사 씨엠",
      address: "서부대로 368",
      lat: 36.799861,
      lng: 127.127102,
    },
]

  const handleSearch = (keyword: string) => {
    if (!keyword.trim()) {
      setSearchResults([])
      setShowDropdown(false)
      return
    }

    setIsLoading(true)
    // 검색 로직 구현 - 모든 매치되는 결과 찾기
    const results = buildingInfo.filter(
      building => 
        building.name.toLowerCase().includes(keyword.toLowerCase()) || 
        building.address.toLowerCase().includes(keyword.toLowerCase())
    )
    setSearchResults(results)
    setShowDropdown(true)
    setIsLoading(false)
  }

  const handleSelectResult = (result: any) => {
    setCurrentLat(result.lat)
    setCurrentLng(result.lng)
    setSearch(result.name)
    setShowDropdown(false)
    setSearchResults([])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    
    if (value.trim()) {
      handleSearch(value)
    } else {
      setSearchResults([])
      setShowDropdown(false)
    }
  }

  const src = `https://www.google.com/maps?q=${currentLat},${currentLng}&output=embed`

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", gap: "10px", position: "relative" }}>
        <div style={{ flex: 1, position: "relative" }}>
          <Input 
            placeholder="건물명 또는 도로명 주소를 입력하세요." 
            value={search}
            onChange={handleInputChange}
            onFocus={() => {
              if (searchResults.length > 0) {
                setShowDropdown(true)
              }
            }}
          />
          {showDropdown && searchResults.length > 0 && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              zIndex: 1000,
              maxHeight: "200px",
              overflowY: "auto"
            }}>
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectResult(result)}
                  style={{
                    padding: "12px 16px",
                    cursor: "pointer",
                    borderBottom: index < searchResults.length - 1 ? "1px solid #eee" : "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f5f5f5"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white"
                  }}
                >
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                    {result.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "#666", marginTop: "2px" }}>
                    {result.address}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <div style={{ width, height, border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
          <iframe
            src={src}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}

export default GoogleMapIframe