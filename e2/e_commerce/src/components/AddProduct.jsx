import React, { useState } from 'react';
import Joi from 'joi';

export const AddProduct = ({ onAddProduct }) => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
    });

    const [errors, setErrors] = useState({});

    // Define Joi schema
    const schema = Joi.object({
        title: Joi.string().min(3).max(100).required().label('Title'),
        price: Joi.number().positive().required().label('Price'),
        description: Joi.string().min(5).required().label('Description'),
        category: Joi.string().min(3).required().label('Category'),
        image: Joi.string().uri().required().label('Image URL')
    });

    const validate = () => {
        const { error } = schema.validate(formData, { abortEarly: false });
        if (!error) return null;

        const tempErrors = {};
        error.details.forEach(err => {
            tempErrors[err.path[0]] = err.message;
        });

        return tempErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (validationErrors) {
            setErrors(validationErrors);
        } else {
            const newProduct = {
                id: Date.now(), // Generate unique ID
                ...formData,
                price: parseFloat(formData.price),
                rating: { rate: 0, count: 0 } // Default rating
            };
            onAddProduct(newProduct); // Call the parent function to add the product
            setFormData({ title: '', price: '', description: '', category: '', image: '' });
            setErrors({});
            alert("Product added successfully!"); // Success message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
                {errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
            </div>
            <div>
                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
                {errors.category && <span style={{ color: 'red' }}>{errors.category}</span>}
            </div>
            <div>
                <label>Image URL:</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />
                {errors.image && <span style={{ color: 'red' }}>{errors.image}</span>}
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
