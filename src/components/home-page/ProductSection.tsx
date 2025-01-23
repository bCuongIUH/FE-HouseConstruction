import React from 'react';

const projects = [
    { image: 'https://minibreak.vn/wp-content/uploads/2022/09/97115228_171125057702239_6571676309389312000_n-1024x768.jpg' },
    { image: 'https://vivutour.vn/wp-content/uploads/2024/09/an-vien-villa-dong-do.jpeg' },
    { image: 'https://homestay.review/wp-content/uploads/2020/11/19-11563.jpg' },
    { image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/531232385.jpg?k=3b6c3d8ebe64354aa2711eafc5366ca8cc67193d3749dd2bb5a90b45858fbf25&o=&hp=1' }
];

const ProjectsAndCalculator = () => {
    return (
        <>
            {/* Projects Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">DỰ ÁN ĐÃ THỰC HIỆN</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost Calculator Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">DỰ TOÁN CHI PHÍ XÂY DỰNG</h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Chiều dài (m)</label>
                                <input type="number" className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Chiều rộng (m)</label>
                                <input type="number" className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Số tầng</label>
                                <input type="number" className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Chọn loại nhà</label>
                                <select className="w-full px-4 py-2 border rounded-lg">
                                    <option>Chọn loại nhà</option>
                                    <option>Nhà phố</option>
                                    <option>Biệt thự</option>
                                    <option>Nhà cấp 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-gray-700 mb-2">Chọn phong cách</label>
                            <select className="w-full px-4 py-2 border rounded-lg">
                                <option>Chọn phong cách</option>
                                <option>Hiện đại</option>
                                <option>Cổ điển</option>
                                <option>Tối giản</option>
                            </select>
                        </div>
                        <div className="mt-8 flex space-x-4">
                            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700">
                                Tính dự toán
                            </button>
                            <button className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700">
                                Làm lại
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsAndCalculator;
