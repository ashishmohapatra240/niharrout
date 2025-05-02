import Link from "next/link";
import Button from "../ui/Button";

interface Article {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "Does Your Business Need Software?",
    date: "April 6, 2023",
    excerpt:
      "In today's world, technology plays a vital role in every aspect of our lives, and businesses are no exception. With the rapid advancement of technology, every business owner must have...",
    link: "https://niharrout.medium.com/does-your-business-need-software-1da02bb4da56",
  },
  {
    title: "5 reasons why businesses need mobile apps",
    date: "Feb 4, 2023",
    excerpt:
      "A customized mobile application can cut down a huge amount of cost in long run. It can increase your employee efficiency, create effective engagement with the customer, streamline th...",
    link: "https://niharrout.medium.com/5-reasons-why-businesses-need-mobile-apps-29117f090cb8",
  },
  {
    title: "About Nihar: The Story Behind Your Next Trusted Software Partner",
    date: "Apr 3, 2023",
    excerpt:
      "Every business, no matter its size or industry, faces challenges — challenges that often require a smart, efficient, and scalable technology solution. If you're reading this, it's because you're...",
    link: "https://niharrout.medium.com/about-nihar-the-story-behind-your-next-trusted-software-partner-3dc7ab30ded3",
  },
];

export default function Articles() {
  return (
    <section id="insights" className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-5xl font-medium mb-4">
          Sometimes, I also write
          <br />
          and share some insights
        </h2>
        <div className="flex justify-end items-center">
          <Button href="https://blog.niharrout.com/ " variant="secondary">
            View All Insights
          </Button>
        </div>
      </div>
      <div className="space-y-8">
        {articles.map((article, index) => (
          <article key={index} className="border-t border-neutral-20 pt-8">
            <Link href={article.link} className="group">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="text-neutral-50 mb-2">{article.date}</p>
                </div>
                <div className="flex-1">
                  <p className="text-neutral-700">{article.excerpt}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
