import React from 'react'
import { NavLink } from 'react-router-dom'
import { IProduct } from '../../interfaces/product';
import { useGetProductsQuery } from '../../services/product';
import { Money } from '../../utils/upload';

type Props = {}

const ProductByCate = (props: Props) => {
    const { data: products = [] as IProduct[], error, isLoading } = useGetProductsQuery(undefined);
    return (
        <div>
            <div>
                {/* breadcrumb */}
                <div className="container py-4 flex items-center gap-3">
                    <a href="../index.html" className="text-primary text-base">
                        <i className="fa-solid fa-house" />
                    </a>
                    <span className="text-sm text-gray-400">
                        <i className="fa-solid fa-chevron-right" />
                    </span>
                    <p className="text-gray-600 font-medium">Shop</p>
                </div>
                {/* ./breadcrumb */}
                {/* shop wrapper */}
                <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
                    {/* sidebar */}
                    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
                        <div className="divide-y divide-gray-200 space-y-5">
                            <div>
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" name="cat-1" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="cat-1" className="text-gray-600 ml-3 cusror-pointer">Bedroom</label>
                                        <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="cat-2" id="cat-2" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="cat-2" className="text-gray-600 ml-3 cusror-pointer">Sofa</label>
                                        <div className="ml-auto text-gray-600 text-sm">(9)</div>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="cat-3" id="cat-3" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="cat-3" className="text-gray-600 ml-3 cusror-pointer">Office</label>
                                        <div className="ml-auto text-gray-600 text-sm">(21)</div>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="cat-4" id="cat-4" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="cat-4" className="text-gray-600 ml-3 cusror-pointer">Outdoor</label>
                                        <div className="ml-auto text-gray-600 text-sm">(10)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" name="brand-1" id="brand-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="brand-1" className="text-gray-600 ml-3 cusror-pointer">Cooking Color</label>
                                        <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="brand-2" id="brand-2" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="brand-2" className="text-gray-600 ml-3 cusror-pointer">Magniflex</label>
                                        <div className="ml-auto text-gray-600 text-sm">(9)</div>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="brand-3" id="brand-3" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="brand-3" className="text-gray-600 ml-3 cusror-pointer">Ashley</label>
                                        <div className="ml-auto text-gray-600 text-sm">(21)</div>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="brand-4" id="brand-4" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="brand-4" className="text-gray-600 ml-3 cusror-pointer">M&amp;D</label>
                                        <div className="ml-auto text-gray-600 text-sm">(10)</div>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="brand-5" id="brand-5" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor="brand-5" className="text-gray-600 ml-3 cusror-pointer">Olympic</label>
                                        <div className="ml-auto text-gray-600 text-sm">(10)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                                <div className="mt-4 flex items-center">
                                    <input type="text" name="min" id="min" className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm" placeholder="min" />
                                    <span className="mx-3 text-gray-500">-</span>
                                    <input type="text" name="max" id="max" className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm" placeholder="max" />
                                </div>
                            </div>
                            <div className="pt-4">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
                                <div className="flex items-center gap-2">
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-xs" className="hidden" />
                                        <label htmlFor="size-xs" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-sm" className="hidden" />
                                        <label htmlFor="size-sm" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-m" className="hidden" />
                                        <label htmlFor="size-m" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-l" className="hidden" />
                                        <label htmlFor="size-l" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-xl" className="hidden" />
                                        <label htmlFor="size-xl" className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                                <div className="flex items-center gap-2">
                                    <div className="color-selector">
                                        <input type="radio" name="color" id="red" className="hidden" />
                                        <label htmlFor="red" className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block" style={{ backgroundColor: '#fc3d57' }} />
                                    </div>
                                    <div className="color-selector">
                                        <input type="radio" name="color" id="black" className="hidden" />
                                        <label htmlFor="black" className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block" style={{ backgroundColor: '#000' }} />
                                    </div>
                                    <div className="color-selector">
                                        <input type="radio" name="color" id="white" className="hidden" />
                                        <label htmlFor="white" className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block" style={{ backgroundColor: '#fff' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ./sidebar */}
                    {/* products */}
                    <div className="col-span-3">
                        <div className="flex items-center mb-4">
                            <select name="sort" id="sort" className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                                <option >Default sorting</option>
                                <option value="price-low-to-high">Price low to high</option>
                                <option value="price-high-to-low">Price high to low</option>
                                <option value="latest">Latest product</option>
                            </select>
                            <div className="flex gap-2 ml-auto">
                                <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                                    <i className="fa-solid fa-grip-vertical" />
                                </div>
                                <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                                    <i className="fa-solid fa-list" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
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
                                        <NavLink to={`/products/${item.id}`} className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                            Thêm sản phẩm</NavLink>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    {/* ./products */}
                </div>
                {/* ./shop wrapper */}
            </div>
        </div>
    )
}

export default ProductByCate