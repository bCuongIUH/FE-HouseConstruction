import React, { useState } from 'react';
import { SearchOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const services = [
        { title: 'Thiết kế nội thất', image: 'https://hcmcc.edu.vn//upload/images/phong%20khach.jpg' },
        { title: 'Thiết kế kiến trúc', image: 'https://eaut.edu.vn/wp-content/uploads/2020/12/ky-thuat-xay-dung1.jpg' },
        { title: 'Thi công nội thất', image: 'https://www.lanha.vn/wp-content/uploads/2023/08/thi-cong-noi-that-hcm-7.jpeg.webp' },
        { title: 'Thi công xây dựng', image: 'https://phuonghoang.asia/wp-content/uploads/2021/10/thi-cong-cong-trinh-phg-2.jpg' }
    ];

    const projects = [
        { image: 'https://minibreak.vn/wp-content/uploads/2022/09/97115228_171125057702239_6571676309389312000_n-1024x768.jpg' },
        { image: 'https://vivutour.vn/wp-content/uploads/2024/09/an-vien-villa-dong-do.jpeg' },
        { image: 'https://homestay.review/wp-content/uploads/2020/11/19-11563.jpg' },
        { image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/531232385.jpg?k=3b6c3d8ebe64354aa2711eafc5366ca8cc67193d3749dd2bb5a90b45858fbf25&o=&hp=1' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Monogram-CD-Logo-by-Greenlines-Studios.jpg" alt="CD Home Logo" className="h-8" />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-700 hover:text-red-600">Trang chủ</a>
                            <a href="#" className="text-gray-700 hover:text-red-600">Giới thiệu</a>
                            <a href="#" className="text-gray-700 hover:text-red-600">Dịch vụ</a>
                            <a href="#" className="text-gray-700 hover:text-red-600">Dự án</a>
                            <a href="#" className="text-gray-700 hover:text-red-600">Liên hệ</a>
                        </nav>

                        {/* Auth & Search */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button onClick={() => setIsAuthOpen(true)} className="flex items-center text-gray-700 hover:text-red-600">
                                <UserOutlined className="text-xl" />
                                <span className="ml-2">Đăng nhập</span>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                                <SearchOutlined className="text-xl text-gray-700" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <MenuOutlined className="text-xl text-gray-700" />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="text-gray-700 hover:text-red-600">Trang chủ</a>
                                <a href="#" className="text-gray-700 hover:text-red-600">Giới thiệu</a>
                                <a href="#" className="text-gray-700 hover:text-red-600">Dịch vụ</a>
                                <a href="#" className="text-gray-700 hover:text-red-600">Dự án</a>
                                <a href="#" className="text-gray-700 hover:text-red-600">Liên hệ</a>
                                <button onClick={() => setIsAuthOpen(true)} className="flex items-center text-gray-700 hover:text-red-600">
                                    <UserOutlined className="text-xl" />
                                    <span className="ml-2">Đăng nhập</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section
                className="relative h-[600px] bg-cover bg-center mt-16"
                style={{ backgroundImage: "url('https://propcheck.in/wp-content/uploads/2024/06/2151004031.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            KIẾN TRÚC - THIẾT KẾ NỘI THẤT - XÂY DỰNG
                        </h1>
                        <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700">
                            Liên hệ ngay
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">DỊCH VỤ CỦA CD HOME</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg">
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
                        ))}
                    </div>
                </div>
            </section>

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

            {/* Featured Products Section */}
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
                                        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
                                            -30%
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">Tên đồ nội thất phòm khách giá rẻ</h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-red-600 font-bold">2,000,000đ</span>
                                        {index % 2 === 0 && (
                                            <span className="text-gray-400 line-through text-sm">2,800,000đ</span>
                                        )}
                                    </div>
                                    <div className="flex text-yellow-400">
                                        {'★'.repeat(5)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                            XEM TẤT CẢ
                        </button>
                    </div>
                </div>
            </section>


            {/* News Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">TIN TỨC</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { day: '18', image: 'https://i1-dulich.vnecdn.net/2021/06/02/santorini-8892-1622628354.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=7bFyqIf9MAdr97Orn96uHQ' },
                            { day: '20', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bWNFYfW0N9Mtd7YQA9Xww3DxBy1Bla.png' },
                            { day: '22', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bWNFYfW0N9Mtd7YQA9Xww3DxBy1Bla.png' }
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
                                    {/* <p className="text-gray-600 line-clamp-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p> */}
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
                            { name: 'NHẬT TRƯỜNG', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bWNFYfW0N9Mtd7YQA9Xww3DxBy1Bla.png' },
                            { name: 'THANH HẢI', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bWNFYfW0N9Mtd7YQA9Xww3DxBy1Bla.png' },
                            { name: 'MINH TÚ', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bWNFYfW0N9Mtd7YQA9Xww3DxBy1Bla.png' }
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
                                {['Blum', 'Hafele', 'Garis'].map((partner, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                                        <span className="font-semibold">{partner}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer section remains the same */}
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
                                <li><a href="#" className="text-gray-400 hover:text-white">Trang chủ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Dịch vụ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Dự án</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Dịch vụ</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Thiết kế nội thất</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Thiết kế kiến trúc</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Thi công nội thất</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Thi công xây dựng</a></li>
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
        </div>
    );
};

export default HomePage;