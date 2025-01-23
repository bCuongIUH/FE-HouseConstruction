import React from "react"

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-black bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">SẢN PHẨM NỘI THẤT</h2>
        <div className="flex justify-center gap-4 mb-8">
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg">Phòng khách</button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">Phòng ngủ</button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">Phòng bếp</button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">Phòng trẻ em</button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">Phòng tắm</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bWNFYfW0N9Mtd7YQA9Xww3DxBy1Bla.png`}
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {index % 2 === 0 && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded">-30%</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Tên đồ nội thất phòm khách giá rẻ</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-600 font-bold">2,000,000đ</span>
                  {index % 2 === 0 && <span className="text-gray-400 line-through text-sm">2,800,000đ</span>}
                </div>
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">XEM TẤT CẢ</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

