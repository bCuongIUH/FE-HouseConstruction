import React from "react"

const Hero = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center mt-16"
      style={{ backgroundImage: "url('https://propcheck.in/wp-content/uploads/2024/06/2151004031.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">KIẾN TRÚC - THIẾT KẾ NỘI THẤT - XÂY DỰNG</h1>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700">Liên hệ ngay</button>
        </div>
      </div>
    </section>
  )
}

export default Hero

