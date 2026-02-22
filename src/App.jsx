import { useState } from "react";
import "./styles/app.scss";
import Carousel from "./components/Carousel";
import img1 from "../public/img/img1.png";
import img2 from "../public/img/img2.jpg";
import img3 from "../public/img/img3.jpg";
import img4 from "../public/img/img4.jpg";
import img5 from "../public/img/img5.jpg";

const Card = ({ title }) => {
  return <h2>{title}</h2>;
};

const slideData = [
  {
    image: img1,
    title: "Full Moon",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},
  {
    image: img2,
    title: "Pandora",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},
  {
    image: img3,
    title: "Temple",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},
  {
    image: img4,
    title: "Godzilla",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},
  {
    image: img5,
    title: "Spartan",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},{
    image: img1,
    title: "Full Moon",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},
  {
    image: img2,
    title: "Pandora",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},
  {
    image: img3,
    title: "Temple",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},
  {
    image: img4,
    title: "Godzilla",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},
  {
    image: img5,
    title: "Spartan",
    description:"Developed a dynamic React carousel with auto-play, previous/next controls, and interactive thumbnails. Built using modern React Hooks and optimized with Vite for fast development and performance across all screen sizes"},
];

const App = () => {
  return (
    <>
      {/* <Card className="card" title="Title1" /> */}
      <Carousel slides={slideData} />
    </>
  );
};

export default App;
