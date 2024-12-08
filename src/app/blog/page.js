import Image from "next/image";
import Link from "next/link";
import img1 from "../../../public/assets/dal.png";
import img2 from "../../../public/assets/shikara.png";
import img3 from "../../../public/assets/mountains.png";

const blogs = [
  {
    title: "Top 10 Must-Visit Destinations in Kashmir",
    excerpt:
      "Discover the breathtaking beauty of Kashmir, including iconic destinations like Gulmarg, Sonmarg, Pahalgam, and more.",
    image: img1,
    slug: "must-visit-destinations-kashmir",
  },
  {
    title: "Experience the Magical Houseboats of Dal Lake",
    excerpt:
      "Dive into the charm of houseboats on Dal Lake and experience luxury amidst nature.",
    image: img2,
    slug: "houseboats-dal-lake",
  },
  {
    title: "The Best Time to Visit Kashmir for Every Traveler",
    excerpt:
      "Plan your trip to Kashmir with this detailed guide on the best seasons to visit for snowfall, flowers, and festivals.",
    image: img3,
    slug: "best-time-to-visit-kashmir",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#FEFCFB] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Kashmir Through Our Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`}>
                  <Link
                    href=""
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Read More →
                  </Link>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
