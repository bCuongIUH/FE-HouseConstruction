import React, { useState, useEffect } from "react"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

const services = [
  { title: "Thiết kế nội thất", image: "https://hcmcc.edu.vn//upload/images/phong%20khach.jpg" },
  { title: "Thiết kế kiến trúc", image: "https://eaut.edu.vn/wp-content/uploads/2020/12/ky-thuat-xay-dung1.jpg" },
  {
    title: "Thi công nội thất",
    image: "https://www.lanha.vn/wp-content/uploads/2023/08/thi-cong-noi-that-hcm-7.jpeg.webp",
  },
  {
    title: "Thi công xây dựng",
    image: "https://phuonghoang.asia/wp-content/uploads/2021/10/thi-cong-cong-trinh-phg-2.jpg",
  },
  { title: "Thiết kế sân vườn", image: "https://thietkesanvuondn.vn/wp-content/uploads/2020/11/sv8.jpg" },
  {
    title: "Thiết kế nhà thông minh",
    image: "https://trongoixaynha.com/wp-content/uploads/2021/11/thiet-ke-nha-thong-minh-4-1.jpg",
  },
]

const Services = () => {
  const [serviceIndex, setServiceIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  const nextService = () => {
    if (serviceIndex + 4 < services.length) {
      setServiceIndex((prev) => prev + 1)
    }
  }

  const prevService = () => {
    if (serviceIndex > 0) {
      setServiceIndex((prev) => prev - 1)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const showNavigationButtons = services.length > 4

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">DỊCH VỤ CỦA CD HOME</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${serviceIndex * 25}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-4">
                  <div className="relative group overflow-hidden rounded-lg">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <h3 className="text-white text-xl font-semibold text-center px-4">{service.title}</h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl font-semibold text-center px-4 z-10">{service.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {showNavigationButtons && (
            <>
              <button
                onClick={prevService}
                className={`absolute left-[-30px] top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-lg opacity-20 hover:opacity-100 transition-opacity duration-300 ${serviceIndex === 0 ? "invisible" : ""}`}
              >
                <LeftOutlined className="w-6 h-6" />
              </button>
              <button
                onClick={nextService}
                className={`absolute right-[-30px] top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-lg opacity-20 hover:opacity-100 transition-opacity duration-300 ${serviceIndex + 4 >= services.length ? "invisible" : ""}`}
              >
                <RightOutlined className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Services

