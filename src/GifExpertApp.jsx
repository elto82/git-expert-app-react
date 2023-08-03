import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./components/GitGrid";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // console.log(newCategory);
    setCategories([ newCategory, ...categories ]);

  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      {/* listado de Gif */}
      {categories.map(category => (
        <GitGrid key={category} category={category} />
      ))}

    </>
  );
};
