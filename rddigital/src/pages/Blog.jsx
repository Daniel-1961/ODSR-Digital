import React, { useState } from "react";
import { Link } from "react-router-dom";

const ClockIcon = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.59998 2.25C7.57005 2.24982 8.51922 2.53184 9.33182 3.06168C10.1444 3.59152 10.7854 4.34629 11.1765 5.23402C11.5676 6.12174 11.6921 7.10408 11.5347 8.06129C11.3773 9.01851 10.9448 9.90926 10.29 10.625" stroke="#514F4F" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.59998 4.25V7.25L8.59998 8.25" stroke="#514F4F" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1.84998 5.6875C1.69065 6.17183 1.60635 6.67768 1.59998 7.1875" stroke="#514F4F" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.01404 9.25C2.29479 9.89591 2.70883 10.4752 3.22904 10.95" stroke="#514F4F" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.91638 3.86759C3.0559 3.7157 3.20468 3.57259 3.36188 3.43909" stroke="#514F4F" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.92029 11.96C6.16714 12.4041 7.53924 12.3358 8.73579 11.77" stroke="#514F4F" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      stroke="#175070"
      d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const articles = [
  {
    slug: "why-choose-umbraco-for-business-websites",
    category: "Website development",
    image: "https://rd-cms.do.recognisedesign.com/uploads/umbraco_8f170ce9e0.JPG",
    author: "Jordan",
    title: "Why Umbraco is the CMS of Choice for Modern Businesses – And How Recognise Design is Leading the Way",
    date: "March 17, 2025",
    readTime: "2 min read",
  },
  {
    slug: "azure-databricks-powering-data-driven-innovation",
    category: "Website development",
    image: "https://rd-cms.do.recognisedesign.com/uploads/6_f925ae2481.png",
    author: "Michael A.",
    title: "Azure Databricks: Powering Data-Driven Innovation",
    date: "February 28, 2025",
    readTime: "2 min read",
  },
  {
    slug: "azure-ai-applications-retail-examples",
    category: "Website development",
    image: "https://rd-cms.do.recognisedesign.com/uploads/4_5abfa3b9a1.png",
    author: "Michael A.",
    title: "What are some examples of Azure AI applications in retail",
    date: "February 28, 2025",
    readTime: "2 min read",
  },
  {
    slug: "what-are-some-real-world-applications-of-azure-ai-in-industries",
    category: "Website development",
    image: "https://rd-cms.do.recognisedesign.com/uploads/5_5e6a7dfba9.png",
    author: "Michael A.",
    title: "What are some real-world applications of Azure AI in industries?",
    date: "February 28, 2025",
    readTime: "2 min read",
  },
  {
    slug: "how-to-hire-the-right-app-development-company-in-hertfordshire",
    category: "App Development",
    image: "https://rd-cms.do.recognisedesign.com/uploads/1_5af80d42fe.png",
    author: "Michael A.",
    title: "How to Hire the Right App Development Company in the Hertfordshire",
    date: "February 26, 2025",
    readTime: "2 min read",
  },
  {
    slug: "Common-Questions-About-Website-Optimisation",
    category: "Website development",
    image: "https://rd-cms.do.recognisedesign.com/uploads/3_6209be16d4.png",
    author: "Michael A.",
    title: "Common Questions About Website Optimisation",
    date: "February 26, 2025",
    readTime: "2 min read",
  },
];

const featuredArticle = {
  slug: "azure-databricks-powering-data-driven-innovation",
  category: "Website development",
  date: "January 01, 1970",
  author: "Michael A.",
  title: "Azure Databricks: Powering Data-Driven Innovation",
  image: "https://rd-cms.do.recognisedesign.com/uploads/6_f925ae2481.png",
  excerpt:
    "Azure Databricks, a collaborative effort between Microsoft and Databricks, has emerged as a leading platform for data engineering, data science, and machine learning. Seamlessly integrated with the Azure ecosystem, it offers organisations a unified environment to process, analyse, and derive insights from vast amounts of data.",
};

const categories = ["All", "App Development", "SEO", "Website development"];

const ARTICLES_PER_PAGE = 3;

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const pagedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white h-full w-full m-0 p-0 overflow-x-hidden scroll-smooth">
      {/* HERO SECTION */}
      <section
        className="relative h-[20rem] lg:h-[25rem] 2xl:h-[50vh] lg:-mt-32 flex items-center justify-start"
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            loading="lazy"
            src="https://rd-cms.do.recognisedesign.com/uploads/aboutus_hero_mobile_2_caec21da94.webp"
            alt="Professional businessman working on laptop"
            className="object-cover w-full h-full absolute top-0 left-0 object-top"
          />
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, RGB(17, 50, 70) 0%, rgba(23, 80, 112, 0.73) 40%, rgba(23, 80, 112, 0) 100%)",
          }}
        />
        <div className="relative top-10 lg:top-0 xl:container xl:mx-auto z-10 text-left pt-20 text-white px-8 max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight">Blog</h1>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <div className="bg-[#f5f5f5]">
        <div className="relative px-4 xl:container pt-16 mx-auto lg:top-0 z-10 xl:px-8">
          <div className="flex flex-col lg:flex-row bg-white rounded-2xl lg:rounded-tr-none lg:rounded-bl-2xl lg:rounded-br-2xl overflow-hidden shadow-lg">
            <div className="flex-1 flex flex-col">
              {/* Category + Date bar */}
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 lg:mb-8">
                <div className="flex">
                  <span className="inline-flex items-center px-6 py-3 lg:py-4 rounded-tl-xl bg-primary text-white text-sm">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center text-gray-600 text-sm border-b border-r border-t border-gray-200">
                    <span className="px-6 py-3 lg:py-4">{featuredArticle.date}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 p-4 lg:p-8 flex-1">
                <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
                  {featuredArticle.title}
                </h2>
                <div
                  className="lg:text-md lg:w-3/4 text-gray-600 leading-snug max-w-2xl"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {featuredArticle.excerpt}
                </div>
              </div>

              {/* Author footer */}
              <div className="border-t border-gray-200 px-8 mt-auto">
                <div className="flex items-center h-full">
                  <span className="text-sm py-4 lg:py-8 pr-10 text-gray-500 font-medium">
                    {featuredArticle.author}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured image */}
            <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-full">
              <img
                loading="lazy"
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="object-cover w-full h-full rounded-t-none rounded-r-2xl absolute top-0 left-0 object-top"
              />
            </div>
          </div>
        </div>

        {/* Pattern divider */}
        <div
          className="mt-10 !h-[8rem]"
          style={{
            backgroundImage: "url('/images/pattern.webp')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />
      </div>

      {/* MORE ARTICLES */}
      <section className="relative xl:container px-5 mx-auto lg:top-0 z-10 lg:px-8">
        <div className="flex flex-col gap-10 mb-8 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl text-primary font-bold">More Articles</h2>
        </div>

        {/* Category filter */}
        <div className="w-full pb-10 overflow-x-auto">
          <div className="flex flex-nowrap w-full justify-start gap-2 ml-2 md:ml-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-sm py-2 px-4 rounded-md font-medium whitespace-nowrap capitalize transition-all ${activeCategory === cat
                  ? "bg-primary text-white"
                  : "border-2 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pagedArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="block bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative">
                <img
                  loading="lazy"
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full absolute top-0 left-0 object-center"
                />
              </div>
              <div className="flex items-center space-x-2 border-b px-6">
                <span className="text-white px-2 py-2 bg-primary text-xs font-medium">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-700 mb-4">{article.author}</div>
                <h3 className="font-[500] text-2xl mb-4 lg:w-2/3 line-clamp-2">
                  {article.title}
                </h3>
              </div>
              <div className="flex border-t py-4 px-4 items-center justify-between text-sm text-gray-600">
                <span className="py-2">{article.date}</span>
                <span className="border-l px-10 py-2 flex items-center text-gray-600 gap-1">
                  <ClockIcon />
                  {article.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2 pb-12">
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-9 h-9 rounded-full flex items-center justify-center bg-primary text-white transition-opacity ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"
                }`}
            >
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M0.96967 7.1202C0.676777 6.82731 0.676777 6.35243 0.96967 6.05954L5.74264 1.28657C6.03553 0.993671 6.51041 0.993671 6.8033 1.28657C7.09619 1.57946 7.09619 2.05434 6.8033 2.34723L2.56066 6.58987L6.8033 10.8325C7.09619 11.1254 7.09619 11.6003 6.8033 11.8932C6.51041 12.1861 6.03553 12.1861 5.74264 11.8932L0.96967 7.1202ZM2.5 7.33987H1.5V5.83987H2.5V7.33987Z" fill="currentColor" />
              </svg>
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${currentPage === page
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 rounded-full flex items-center justify-center bg-primary text-white transition-opacity ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"
                }`}
            >
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M7.03035 7.1202C7.32324 6.82731 7.32324 6.35243 7.03035 6.05954L2.25738 1.28657C1.96449 0.993671 1.48962 0.993671 1.19672 1.28657C0.903828 1.57946 0.903828 2.05434 1.19672 2.34723L5.43936 6.58987L1.19672 10.8325C0.903827 11.1254 0.903827 11.6003 1.19672 11.8932C1.48961 12.1861 1.96449 12.1861 2.25738 11.8932L7.03035 7.1202ZM5.50002 7.33987H6.50002V5.83987H5.50002V7.33987Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* CTA SECTION */}
      <div>
        <div
          className="!h-[8rem] xl:h-[10rem]"
          style={{
            backgroundImage: "url('/images/pattern.webp')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />
        <section className="bg-primary w-full">
          <div className="mx-auto bg-primary py-10 sm:py-20 flex max-sm:gap-5 max-sm:flex-col justify-between items-center gap-3 px-5 md:px-10 max-sm:text-center lg:w-[95vw] xl:mx-auto">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl sm:text-[40px] uppercase font-normal text-white leading-[1.4] sm:leading-none">
                Want to reduce time spent chasing fixes?
              </h2>
              <p className="text-white font-light leading-none mb-1">
                Need a partner that works across tech and compliance?
              </p>
              <Link
                to="/contact"
                className="group items-center gap-2 bg-white text-primary py-2 font-medium max-md:mx-auto px-10 sm:px-5 rounded-md flex w-fit hover:shadow-[inset_0_0_0_2px_rgba(23,80,112,1)] duration-150 transition-all"
              >
                Let's talk
                <ArrowIcon />
              </Link>
            </div>
            <img
              src="https://rd-cms.do.recognisedesign.com/uploads/Background_1_afb0a8dfd1.webp"
              alt="Want to reduce time spent chasing fixes?"
              className="rounded-xl h-[150px] max-w-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
