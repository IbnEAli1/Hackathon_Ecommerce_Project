import Hero from "@/components/Hero";
import EditorsPick from "@/components/EditorsPick";
import BestSeller from "@/components/BestSeller";
import ClassicProduct from "@/components/ClassicProduct";
import NeuralUniverse from "@/components/NeuralUniverse";
import FeaturedPost from "@/components/FeaturedPost";

export default function Home() {
  return (
    <div>
      <Hero />
      <EditorsPick />
      <BestSeller />
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPost />
    </div>
  );
}
