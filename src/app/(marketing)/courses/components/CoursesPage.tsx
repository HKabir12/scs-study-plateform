"use client";
import React, { useState } from "react";
import CoursesMenu from "./CoursesMenu";
import CoursesList from "./CoursesList";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  return (
    <div>
      <CoursesMenu onCategoryChange={setSelectedCategory} />
      <CoursesList selectedCategory={selectedCategory} />
    </div>
  );
};

export default CoursesPage;
