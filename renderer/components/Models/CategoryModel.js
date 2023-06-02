import React from 'react';
import { NameField } from './inputs';
import ThemeModel from './theme';

const CategoryModel = ({ handler }) => {
  return (
    <ThemeModel title="New Category Inventory" handler={handler}>
      <form class="space-y-6" action="#">
        <NameField />
        <button
          type="submit"
          class="w-full text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#22722E]"
        >
          Add
        </button>
      </form>
    </ThemeModel>
  );
};

export default CategoryModel;
