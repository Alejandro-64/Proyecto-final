import HeroGeneric from "../../modules/HeroGeneric/HeroGeneric";
import BlogCard from "../../components/BlogCard/BlogCard";
import Slider from "../../modules/Slider/Slider";
import "./Blog.css";
import { ContentBlog } from "../../data/contentBlog";

const Blog = () => {
  
  return (
    <>
      <HeroGeneric title={"News and the latest in anime"} />
      <section className="blog">
          <div className="container blog__container">
            <h2 className="blog__title">Informative blog</h2>
            <div className="blog__cards">
              {
                ContentBlog.map((item) => (
                  <BlogCard key={item.id} blog={item} />
                ))
              }
            </div>
          </div>
      </section>
      <Slider />
    </>
  );
};

export default Blog;
