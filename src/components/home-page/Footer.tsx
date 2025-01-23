import React from "react"

const NewsAndFooter = () => {
  return (
    <>
      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">TIN TỨC</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                day: "18",
                image:
                  "https://i1-dulich.vnecdn.net/2021/06/02/santorini-8892-1622628354.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=7bFyqIf9MAdr97Orn96uHQ",
              },
              {
                day: "20",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bWNFYfW0N9Mtd7YQA9Xww3DxBy1Bla.png",
              },
              {
                day: "22",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bWNFYfW0N9Mtd7YQA9Xww3DxBy1Bla.png",
              },
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={news.image || "/placeholder.svg"}
                    alt={`News ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded">
                    <span className="text-red-600 font-bold">{news.day}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-red-600">
                    Check-in 3 điểm 'trốn nóng' mới nổi ở Khánh Hòa
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">ĐÁNH GIÁ CỦA KHÁCH HÀNG</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "NHẬT TRƯỜNG",
                image:
                  "https://media.saodaily.com/storage/files/lethihong/2022/07/29/tua-vao-vai1-060626.jpg",
              },
              {
                name: "THANH HẢI",
                image:
                  "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-26.jpg",
              },
              {
                name: "MINH TÚ",
                image:
                  "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg",
              },
            ].map((review, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold mb-2">{review.name}</h3>
                <p className="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience and Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-600 mr-3"></span>
                KINH NGHIỆM
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-1 h-2 bg-red-600 rounded"></div>
                  <span className="ml-2">Tầm nhìn</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 h-2 bg-yellow-400 rounded"></div>
                  <span className="ml-2">Tầm nhìn</span>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-600 mr-3"></span>
                ĐỐI TÁC
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {["Blum", "Hafele", "Garis"].map((partner, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                    <span className="font-semibold">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Về CD HOME</h3>
              <p className="text-gray-400">
                Chúng tôi cung cấp dịch vụ thiết kế, thi công nội thất và xây dựng chuyên nghiệp.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liên kết</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Dự án
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Dịch vụ</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Thiết kế nội thất
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Thiết kế kiến trúc
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Thi công nội thất
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Thi công xây dựng
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>108/5/39 Nguyễn Thượng Hiền, P1, Gò Vấp, HCM</li>
                <li>Email: bachcuong27@gmail.com</li>
                <li>Tel: (84) 76 848 6006</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CD HOME. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default NewsAndFooter

