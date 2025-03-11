import { List, message } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../app/hook';
import Header from '../components/Header'
import { CateType } from '../interfaces/category';
import { IProduct } from '../interfaces/product';
import { useGetCategorysQuery } from '../services/category';
import { useGetProductsQuery } from '../services/product';
import { addToCart } from '../slice/cartSlice';
import { Money } from '../utils/upload';

type Props = {}

const Home = (props: Props) => {
  const { data: products = [] as IProduct[], error, isLoading } = useGetProductsQuery(undefined);
  const { data: cate = [] as CateType[], error: err, isLoading: loading } = useGetCategorysQuery(undefined);
  const dispatch = useAppDispatch();
  const addToCartProduct = (data: any) => {
      dispatch(addToCart(data))
      message.success("Thêm vào giỏ hàng hoàn thành")
  }
  
  return (
    <div>
      <div>
        <div className="bg-cover bg-no-repeat bg-center py-36" style={{ backgroundImage: 'url("https://store.marvansmobile.com/assets_2/images/demos/demo1/slides/slide1.jpg")' }}>
          <div className="container">
            <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
              Bộ sưu tập mới nhất <br /> cho công nghệ
            </h1>
            <p>Những thiết bị công nghệ hiện đại càng lúc càng chiếm vai trò <br />
              quan trọng trong cuộc sống của con người. Không chỉ làm tốt nhiệm vụ trong công việc, <br />
              những món đồ chơi thế hệ mới còn giúp cho con người có thể giải trí theo những cách <br />
              hoàn toàn mới lạ so với trước đây. Chính vì thế, chúng ngày càng được nhiều người vô cùng ưa thích <br />
              và ưa chuộng để tận hưởng cuộc sống và thực hiện những đam mê, sở thích của bản thân. </p>
            <div className="mt-12">
              <a href="#" className="bg-primary border border-primary text-white px-8 py-3 font-medium 
            rounded-md hover:bg-transparent hover:text-primary">Shop Now</a>
            </div>
          </div>
        </div>
        {/* ./banner */}
        {/* features */}
        <div className="container py-16">
          <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
              <img src="./src/assets/images/icons/delivery-van.svg" alt="Delivery" className="w-12 h-12 object-contain" />
              <div>
                <h4 className="font-medium capitalize text-lg">Miễn phí vận chuyển</h4>
                <p className="text-gray-500 text-sm">Với tất cả sản phẩm</p>
              </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
              <img src="./src/assets/images/icons/money-back.svg" alt="Delivery" className="w-12 h-12 object-contain" />
              <div>
                <h4 className="font-medium capitalize text-lg">Hoàn tiền miễn phí</h4>
                <p className="text-gray-500 text-sm">Hoàn tiền khi trả hàng miễn phí</p>
              </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
              <img src="./src/assets/images/icons/service-hours.svg" alt="Delivery" className="w-12 h-12 object-contain" />
              <div>
                <h4 className="font-medium capitalize text-lg">Hỗ trợ 24/7</h4>
                <p className="text-gray-500 text-sm">Luôn có người hỗ trợ 24/7</p>
              </div>
            </div>
          </div>
        </div>
        {/* ./features */}
        {/* categories */}
        <div className="container py-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
          <div className="grid grid-cols-3 gap-3">
            {cate.map((item: CateType, index: number) => {
              return (
                <div className="relative rounded-sm overflow-hidden group" key={index}>
                  <img src={item.image} alt="category 1" className="w-full" />
                  <NavLink to={'category/' + item.id} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{item.name}</NavLink>
                </div>
              )
            })}
          </div>
        </div>
        {/* ./categories */}
        {/* new arrival */}
        <div className="container pb-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
          <div className="grid grid-cols-4 gap-6">
            {products.map((item: IProduct, index: number) => {
              return (
                <div className="bg-white shadow rounded overflow-hidden group" key={index}>
                  <div className="relative">
                    <div>
                      <img src={item.image} alt="product 1" className="w-full" />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                      <NavLink to={`/products/${item.id}`} className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                        <i className="fa-solid fa-magnifying-glass" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="pt-4 pb-3 px-4">
                    <NavLink to={`/products/${item.id}`}>
                      <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{item.name}</h4>
                    </NavLink>
                    <div className="flex items-baseline mb-1 space-x-2">
                      <p className="text-xl text-primary font-semibold">{Money(item.price)}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fa-solid fa-star" /></span>
                        <span><i className="fa-solid fa-star" /></span>
                        <span><i className="fa-solid fa-star" /></span>
                        <span><i className="fa-solid fa-star" /></span>
                        <span><i className="fa-solid fa-star" /></span>
                      </div>
                      <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                  </div>
                  <button onClick={() => addToCartProduct(item)} className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                    Thêm sản phẩm</button>
                </div>
              )
            })}

          </div>
        </div>
        {/* ./new arrival */}
        {/* ads */}
        <div className="container pb-16">
          <a href="#">
            <img src="https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-dien-may-thong-minh_033705387.png" alt="ads" className="w-full" />
          </a>
        </div>
        {/* ./ads */}
        {/* product */}
        <div className="container pb-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
          <div className="grid grid-cols-4 gap-6">
            {products.map((item: IProduct, index: number) => {
              return (
                <div className="bg-white shadow rounded overflow-hidden group" key={index}>
                  <div className="relative">
                    <div>
                      <img src={item.image} alt="product 1" className="w-full" />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                      <NavLink to={`/products/${item.id}`} className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                        <i className="fa-solid fa-magnifying-glass" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="pt-4 pb-3 px-4">
                    <NavLink to={`/products/${item.id}`}>
                      <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{item.name}</h4>
                    </NavLink>
                    <div className="flex items-baseline mb-1 space-x-2">
                      <p className="text-xl text-primary font-semibold">{Money(item.price)}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fa-solid fa-star" /></span>
                        <span><i className="fa-solid fa-star" /></span>
                        <span><i className="fa-solid fa-star" /></span>
                        <span><i className="fa-solid fa-star" /></span>
                        <span><i className="fa-solid fa-star" /></span>
                      </div>
                      <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                  </div>
                  <button onClick={() => addToCartProduct(item)} className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                    Thêm sản phẩm</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
