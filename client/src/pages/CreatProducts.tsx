import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import '../css/CreatProduct.css';

import { addProducts } from '../store/reducer/reducer';

const CreatProducts = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState<number>(0);
    const [product, setProduct] = useState({
        id: String(id),
        name: '',
        image: '',
        quantity: 1,
        type: '',
        state: '',
        price: 0,
        description: '',
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'price' || name === 'quantity') {
            const numericValue = parseInt(value);
            if (numericValue >= 0) {
                setProduct({
                    ...product,
                    [name]: numericValue,
                });
            } else {
                alert('Giá hoặc số lượng không được âm, vui lòng nhập lại');
            }
        } else {
            setProduct({
                ...product,
                [name]: value,
            });
        }
    };

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (product.price < 0 || product.quantity < 0) {
            alert('Giá hoặc số lượng không được âm, vui lòng nhập lại');
            return;
        }
        dispatch(addProducts(product));
        setProduct({
            id: String(id + 1),
            name: '',
            image: '',
            quantity: 0,
            type: '',
            state: '',
            price: 0,
            description: '',
        });
        setId(id + 1);
    };

    return (
        <div className="admin-container">
            <main className="content">
                <div className="form-container">
                    <h2>Tạo Sản phẩm mới</h2>
                    <form onSubmit={handleForm}>
                        <div className="form-group">
                            <label htmlFor="name">Tên</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={product.name}
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Ảnh</label>
                            <input
                                id="image"
                                name="image"
                                type="text"
                                value={product.image}
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Số lượng</label>
                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                value={product.quantity}
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Loại</label>
                            <select
                                id="type"
                                name="type"
                                value={product.type}
                                onChange={handleInput}
                                required
                            >
                                <option value="">Chọn loại xe</option>
                                <option value="dưới 50cc">Dưới 50cc</option>
                                <option value="trên 50cc">Trên 50cc</option>
                                <option value="trên 100cc">Trên 100cc</option>
                                <option value="trên 180cc">Trên 180cc</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">Mô tả</label>
                            <select
                                id="state"
                                name="state"
                                value={product.state}
                                onChange={handleInput}
                                required
                            >
                                <option value="">Chọn trạng thái</option>
                                <option value="cũ">Cũ</option>
                                <option value="mới">Mới</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Giá</label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                value={product.price.toString()}
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Mô tả chi tiết</label>
                            <textarea
                                id="description"
                                name="description"
                                value={product.description}
                                onChange={handleInput}
                                rows={4}
                            />
                        </div>
                        <button type="submit">Thêm Sản phẩm mới</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default CreatProducts;
