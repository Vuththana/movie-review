import React, { useState } from 'react'

interface CategoriesFilterProps {
    categories: string[]
    onCategorySelect: (category: string) => void;
}
const CategoriesFilter: React.FC<CategoriesFilterProps> = ({ categories, onCategorySelect }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    }

    return (
        <ul>
            <li 
            className='inline-flex mx-2'>
            <button
                onClick={() => handleCategoryClick('')}
                className={`px-4 py-2 rounded-xl text-sm ${
                    selectedCategory === null ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
            >
                All
            </button>
            </li>
            {categories.map((category) => (
            <li
            key={category}
            className='inline-flex mt-3 mx-2'>
                <button
                    onClick={() => handleCategoryClick(category)}
                    className={`px-2 py-2 rounded-xl text-sm ${
                        selectedCategory === category? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                >
                    {category}
                </button>
            </li>
         ))}
        </ul>
    )
}

export default CategoriesFilter;