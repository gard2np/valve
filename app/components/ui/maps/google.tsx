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
      name: "고운에듀프라자",
      address: "마음로 272-3",
      lat: 36.519536,
      lng: 127.235734,
    },
    {
      name: "국립세종도서관",
      address: "다솜3로 48",
      lat: 36.498001,
      lng: 127.267296,
    },
    {
      name: "세종JM빌딩",
      address: "보듬3로 8-27",
      lat: 36.513162,
      lng: 127.258434,
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