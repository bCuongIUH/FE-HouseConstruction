import React, { useState } from "react"
import { SearchOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Monogram-CD-Logo-by-Greenlines-Studios.jpg"
              alt="CD Home Logo"
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600">
              Trang chủ
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600">
              Giới thiệu
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600">
              Dịch vụ
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600">
              Dự án
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600">
              Liên hệ
            </a>
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
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuOutlined className="text-xl text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-red-600">
                Trang chủ
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600">
                Giới thiệu
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600">
                Dịch vụ
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600">
                Dự án
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600">
                Liên hệ
              </a>
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center text-gray-700 hover:text-red-600"
              >
                <UserOutlined className="text-xl" />
                <span className="ml-2">Đăng nhập</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

