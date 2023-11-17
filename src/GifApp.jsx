import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
    const [categories, setCategories] = useState(['One punch']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };
    return (
        <>
            <h1>GifApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
                // <div key={category}>
                //     <h3>{category}</h3>
                //     <li>{category}</li>
                // </div>
            ))}
            {/* Gif Item */}
        </>
    );
};
