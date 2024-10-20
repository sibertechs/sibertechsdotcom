import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import "../../Components/Modal/ModalCss.css";
import artificial from "../../Images/artificial.jpg";
import cloud from "../../Images/cloud.jpg";
import cyber from "../../Images/cyber.jpg";
import software from "../../Images/software.jpg";
import devops from "../../Images/devops.jpg";
import author from "../../Images/author.jpg";
import iot from "../../Images/iot.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar";

const blogPosts = [
  {
    title: "Understanding the Future of Artificial Intelligence",
    excerpt:
      "Artificial Intelligence is transforming various industries by enabling smarter decision-making and automation. This blog explores the future of AI and its potential impacts on different sectors.",
    date: "August 1, 2024",
    link: "#",
    image: artificial,
    tags: ["AI", "Technology", "Future"],
    readTime: "8 min read",
    fullContent: `
      Artificial Intelligence is transforming various industries by enabling smarter decision-making and automation. This blog explores the future of AI and its potential impacts on different sectors. AI's ability to process and analyze vast amounts of data at unprecedented speeds is revolutionizing fields such as healthcare, where it assists in diagnosing diseases with higher accuracy and personalizing treatment plans. In finance, AI is enhancing fraud detection and optimizing investment strategies, while in manufacturing, it's streamlining operations and improving quality control through predictive maintenance.

      Moreover, AI is set to redefine customer experiences by providing personalized recommendations and automating customer service interactions. The integration of AI with emerging technologies like the Internet of Things (IoT) and blockchain is creating new opportunities for innovation and efficiency. As AI continues to evolve, ethical considerations and the need for responsible AI practices become increasingly important, ensuring that the benefits of this technology are realized while minimizing potential risks.

      This blog delves deeper into these advancements, examining how AI is shaping the future of work, influencing global economic trends, and paving the way for groundbreaking developments in various domains. Join us as we explore the transformative power of AI and its far-reaching implications for the future.
    `,
  },
  {
    title: "The Importance of Cybersecurity in the Modern Era",
    excerpt:
      "With increasing digital threats, cybersecurity has become crucial for protecting sensitive information. Learn about the latest trends and best practices to safeguard your digital assets.",
    date: "July 20, 2024",
    link: "/blog/cybersecurity",
    image: cyber,
    tags: ["Cybersecurity", "IT", "Safety"],
    readTime: "6 min read",
    fullContent: `
In today’s interconnected world, cybersecurity is not just a technical necessity; it is a fundamental aspect of business continuity, personal privacy, and national security. With the increasing digitization of all sectors—from finance and healthcare to education and government—the need to protect sensitive information has never been more critical. Cybersecurity has evolved from being a niche concern to a mainstream priority, driven by the escalating scale and complexity of digital threats.

The growing reliance on cloud services, mobile devices, and the Internet of Things (IoT) has expanded the attack surface for cybercriminals. These interconnected systems, while offering unparalleled convenience and efficiency, also introduce vulnerabilities that can be exploited. A single breach in a seemingly minor system can cascade through an entire network, leading to catastrophic outcomes such as data loss, financial theft, or even critical infrastructure failure.

To counter these threats, organizations must adopt a multi-layered approach to cybersecurity, often referred to as "defense in depth." This strategy involves implementing a series of defensive mechanisms, such as firewalls, intrusion detection systems (IDS), and secure access controls, to protect against various types of cyber threats. Additionally, encryption of data both at rest and in transit ensures that even if unauthorized access is gained, the information remains unreadable.

Furthermore, the rise of remote work has introduced new challenges in cybersecurity. With employees accessing company networks from various locations and devices, the potential for security breaches increases. Virtual Private Networks (VPNs), secure cloud environments, and endpoint protection have become essential tools in safeguarding remote operations.

Cybersecurity is also a matter of compliance and regulation. Various laws and standards, such as the General Data Protection Regulation (GDPR) in Europe and the California Consumer Privacy Act (CCPA) in the United States, impose strict requirements on how organizations manage and protect personal data. Non-compliance can result in hefty fines, legal consequences, and significant reputational damage.

However, technology and compliance alone are not enough. Human error remains one of the leading causes of security breaches. Social engineering attacks, such as phishing, exploit the weakest link in any security chain—the user. As such, fostering a culture of cybersecurity awareness is crucial. Regular training sessions, phishing simulations, and clear communication about security policies help to build a workforce that is vigilant and informed.

Emerging technologies like artificial intelligence (AI) and machine learning (ML) are also playing a pivotal role in modern cybersecurity. These technologies can analyze vast amounts of data to detect anomalies and potential threats more accurately than traditional methods. They are being used to predict and prevent attacks before they occur, as well as to automate responses to mitigate damage swiftly.

On a global scale, cyber warfare and state-sponsored attacks are becoming more common, with critical infrastructure such as power grids, financial systems, and healthcare services being primary targets. Governments and international organizations are increasingly collaborating to develop strategies to defend against these sophisticated attacks, emphasizing the importance of global cooperation in cybersecurity.

In conclusion, cybersecurity is a dynamic and multifaceted field that requires continuous attention and adaptation. As cyber threats continue to evolve, so too must our strategies to combat them. By staying informed about the latest trends, implementing robust security measures, fostering a culture of security awareness, and leveraging advanced technologies, individuals and organizations can protect their digital assets and ensure their long-term security and success in an increasingly digital world.
  `,
  },
  {
    title: "How Cloud Computing is Revolutionizing IT Infrastructure",
    excerpt:
      "Cloud computing offers flexibility and scalability that traditional IT infrastructure cannot match. Discover how cloud solutions are changing the way businesses manage their resources.",
    date: "July 10, 2024",
    link: "/blog/cloud-computing",
    image: cloud,
    tags: ["Cloud", "IT", "Infrastructure"],
    readTime: "7 min read",
    fullContent: `
  Cloud computing offers flexibility and scalability that traditional IT infrastructure cannot match. It empowers businesses to adapt quickly to changing demands, scale their operations seamlessly, and optimize resource utilization. Unlike traditional IT setups, which often require significant upfront investment and ongoing maintenance, cloud solutions allow companies to access and manage their IT resources on a pay-as-you-go basis, reducing both capital expenditures and operational overhead.

Cloud services provide a dynamic environment where businesses can easily scale their computing power, storage, and applications to meet real-time needs. Whether you're launching a new product, expanding into new markets, or handling seasonal traffic spikes, cloud computing enables you to scale up without the delays and costs associated with physical hardware.

Discover how cloud solutions are changing the way businesses manage their resources. With cloud computing, companies can streamline their IT operations by automating routine tasks, enabling remote work, and improving collaboration across teams. The cloud also enhances data security, offering advanced encryption and compliance with industry standards, while providing robust disaster recovery solutions that minimize downtime and protect critical data.

Moreover, cloud computing fosters innovation by giving businesses access to cutting-edge technologies like artificial intelligence, machine learning, and big data analytics without the need for specialized infrastructure. This allows organizations to experiment with new ideas, optimize processes, and deliver innovative products and services to market faster.

In essence, cloud computing is not just about improving IT infrastructure; it's about transforming the way businesses operate, compete, and grow in the digital age.
      `,
  },
  {
    title: "The Role of Software Development in Digital Transformation",
    excerpt:
      "Software development is at the heart of digital transformation, driving innovation and efficiency. Explore how custom software solutions can support your business goals and streamline operations.",
    date: "June 30, 2024",
    link: "/blog/software-development",
    image: software,
    tags: ["Software", "Development", "Digital"],
    readTime: "5 min read",
    fullContent: `
Software development is at the heart of digital transformation, driving innovation and efficiency. As businesses across industries strive to stay ahead in an increasingly competitive and tech-driven world, custom software solutions have emerged as a critical enabler of success. These solutions not only address current business needs but also pave the way for future growth and innovation by providing a solid technological foundation.

Explore how custom software solutions can support your business goals and streamline operations. Custom software is designed with your specific business processes in mind, allowing you to automate complex workflows, reduce manual errors, and increase overall efficiency. By implementing software tailored to your exact needs, you can eliminate redundant tasks and empower your teams to focus on more strategic initiatives, ultimately driving productivity and profitability.

Moreover, custom software solutions offer unparalleled flexibility, enabling businesses to integrate with other essential systems and tools seamlessly. Whether you need to connect with CRM platforms, ERP systems, or third-party APIs, custom software can be designed to ensure smooth data flow and communication between all your business applications. This integration capability not only enhances operational efficiency but also provides a unified view of your business data, leading to more informed decision-making.

Enhance customer experiences and drive engagement with software designed specifically to meet your customers' needs. Custom software allows you to create unique, user-friendly applications that can be personalized to provide an exceptional customer experience. Whether it's a mobile app that simplifies your customers' interactions with your brand or a web platform that offers tailored recommendations, custom software can help you engage customers more effectively and build lasting relationships.

Additionally, custom software development supports business agility, allowing you to adapt quickly to changing market conditions and customer expectations. As your business evolves, so too can your software, with the ability to add new features, scale up to handle increased demand, or pivot to address new challenges. This adaptability is crucial in a world where technological advancements and market dynamics are constantly shifting.

Security and compliance are other key advantages of custom software. With cyber threats becoming more sophisticated, protecting your business data is more critical than ever. Custom software can be built with industry-specific security protocols and compliance requirements in mind, ensuring that your data is safeguarded against breaches and that your business adheres to regulatory standards. This not only protects your assets but also builds trust with your customers and partners.

Investing in custom software development is not just about meeting immediate needs; it's about future-proofing your business. By choosing a solution that's designed to grow with your company, you can ensure that your software remains relevant and effective as your business scales. This long-term approach to technology investment helps you maintain a competitive edge, foster innovation, and continuously improve your operations.

In conclusion, custom software development is a key driver of digital transformation, offering businesses the tools they need to innovate, streamline operations, enhance security, and deliver exceptional customer experiences. By investing in custom solutions, you position your business for sustained success in an increasingly digital world.


      `,
  },
  {
    title: "DevOps: Bridging the Gap Between Development and Operations",
    excerpt:
      "DevOps practices enhance collaboration between development and operations teams, leading to faster and more reliable software delivery.",
    date: "June 20, 2024",
    link: "/blog/devops",
    image: devops,
    tags: ["DevOps", "Collaboration", "IT"],
    readTime: "6 min read",
    fullContent: `
    DevOps practices enhance collaboration between development and operations teams, leading to faster and more reliable software delivery. By integrating these traditionally separate functions, DevOps fosters a culture of shared responsibility and continuous feedback. This approach facilitates more efficient workflows through automation, which reduces manual tasks and the risk of human error.

Continuous Integration and Continuous Deployment (CI/CD) are pivotal in this transformation. Automating the build, test, and deployment processes allows teams to deliver updates and new features with greater speed and reliability, ensuring that code changes are seamlessly integrated and deployed into production. This automation not only accelerates release cycles but also ensures consistent quality through rigorous testing at every stage.

DevOps also emphasizes the importance of improved communication and collaboration. By breaking down silos between development and operations teams, organizations create a more cohesive environment where goals and expectations are shared and aligned. This collaborative culture leads to a more harmonious workflow, where both teams are equally invested in the success of the software and can address issues proactively.

Enhanced monitoring and feedback mechanisms are crucial aspects of DevOps. Continuous monitoring provides real-time visibility into application performance and infrastructure health, allowing teams to detect and resolve issues before they impact end users. This proactive approach to problem-solving helps maintain high availability and performance, ensuring a positive user experience.

Furthermore, DevOps practices contribute to increased efficiency and scalability. By adopting infrastructure as code, teams can automate the provisioning and management of resources, making it easier to scale applications in response to changing demands. This approach not only reduces manual configuration errors but also accelerates the deployment of new features and updates.

The ability to recover from failures more quickly is another significant benefit of DevOps. Automated testing and deployment processes, combined with robust monitoring and incident response practices, enable teams to detect issues early and deploy fixes rapidly. This reduces downtime and minimizes the impact on users, contributing to a more reliable and resilient software environment.

Additionally, DevOps encourages a culture of continuous improvement. By establishing feedback loops and regularly reviewing performance metrics, teams can identify areas for enhancement and refine their processes. This iterative approach drives innovation and helps organizations stay competitive by continuously evolving and improving their software.

Overall, embracing DevOps practices allows organizations to achieve greater agility, enhance software reliability, and better meet user needs. The collaborative, automated, and data-driven nature of DevOps not only accelerates delivery but also fosters a culture of excellence and continuous improvement, positioning organizations for long-term success in a rapidly evolving technological landscape.

          `,
  },
  {
    title: "The Rise of the Internet of Things (IoT)",
    excerpt:
      "IoT is connecting devices and transforming industries. Learn about the impact of IoT on our daily lives and the future of connected technology.",
    date: "June 10, 2024",
    link: "/blog/iot",
    image: iot,
    tags: ["IoT", "Technology", "Future"],
    readTime: "8 min read",
    fullContent: `
The Internet of Things (IoT) is revolutionizing how devices interact and transforming various industries. By connecting a vast array of devices through the internet, IoT enables seamless communication and data exchange, leading to significant advancements in technology and its applications.

IoT’s impact on our daily lives is profound. Smart home devices, such as thermostats, lighting systems, and security cameras, provide unprecedented convenience and control, allowing users to automate and monitor their homes from anywhere in the world. Wearable technology, like fitness trackers and smartwatches, offers valuable health insights and encourages a more connected and informed lifestyle. In our cities, IoT applications are improving infrastructure through smart traffic management systems, which enhance road safety and reduce congestion, and smart waste management systems, which optimize collection processes and reduce environmental impact.

The future of connected technology promises even more transformative changes. IoT is poised to advance industries by integrating with other technologies such as artificial intelligence (AI) and machine learning (ML). This combination will enable more sophisticated data analysis and predictive maintenance, leading to increased efficiency and cost savings. In agriculture, IoT sensors can monitor soil conditions and crop health in real-time, optimizing farming practices and boosting yields. In healthcare, connected devices can enable remote patient monitoring and personalized treatment plans, improving outcomes and reducing healthcare costs.

Moreover, IoT is driving innovation in manufacturing through the concept of Industry 4.0. Smart factories equipped with IoT sensors and automated systems can enhance production processes, reduce downtime, and improve product quality. This level of connectivity and automation is transforming supply chains, enabling real-time tracking of goods and more efficient inventory management.

As IoT continues to evolve, it will reshape how we interact with the world around us. The expansion of connected devices will lead to smarter environments and more responsive systems, enhancing both personal and professional aspects of life. However, this increased connectivity also raises considerations around data privacy and security, necessitating robust measures to protect sensitive information and ensure the safe use of IoT technologies.

In summary, IoT is connecting devices in unprecedented ways, with far-reaching implications for our daily lives and various industries. As we look to the future, the continued growth and integration of IoT will drive innovation, enhance efficiency, and create new opportunities for connected technology to enrich our lives.







    `,
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isExpanded, setIsExpanded] = useState(false); // Track modal expansion

  const postsPerPage = 6;
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const openModal = (post) => {
    setModalContent(post);
    setIsModalOpen(true);
    setIsExpanded(false); // Reset expansion when opening a new modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-gray-50">
        <div className="relative w-full h-96">
          <img
            src={cloud}
            alt="Blog Background"
            className="absolute inset-0 object-cover w-full h-full opacity-60"
          />
          <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-indigo-600 to-purple-700"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Our Blog</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-white">
              Stay updated with the latest insights and trends in technology.
              Read our blog to learn about emerging technologies, best
              practices, and more.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
        <Sidebar />

          <main className="flex-1 px-4 mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8 lg:ml-8">
            {/* Featured Post Section */}
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold">Featured Post</h2>
              <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                <img
                  src={cloud}
                  alt="Featured Post"
                  className="object-cover w-full h-64"
                />
                <div className="p-6 bg-white">
                  <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                    How Cloud Computing is Revolutionizing IT Infrastructure
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Cloud computing offers flexibility and scalability that
                    traditional IT infrastructure cannot match. Discover how
                    cloud solutions are changing the way businesses manage their
                    resources.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(blogPosts[2]);
                    }}
                    className="font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {paginatedPosts.map((post, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="object-cover w-full h-48"
                  />
                  <div className="relative z-10 p-6 bg-white">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 border border-indigo-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center mb-4">
                      <img
                        src={author}
                        alt="Author"
                        className="w-10 h-10 mr-3 rounded-full"
                      />
                      <span className="text-gray-700">by Author Name</span>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(post);
                      }}
                      className="font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 1}
                className="px-4 py-2 text-white bg-indigo-600 rounded-lg disabled:opacity-50"
              >
                <FaArrowLeft className="inline-block mr-2" />
                Previous
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange("next")}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-white bg-indigo-600 rounded-lg disabled:opacity-50"
              >
                Next
                <FaArrowRight className="inline-block ml-2" />
              </button>
            </div>
          </main>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div
              className={`bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl relative max-h-[80vh] overflow-y-auto`}
            >
              <button
                className="absolute text-gray-600 top-2 right-2 hover:text-gray-900"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="mb-4 text-3xl font-bold">{modalContent.title}</h2>
              <img
                src={modalContent.image}
                alt={modalContent.title}
                className="object-cover w-full h-64 mb-4"
              />
              <p className="mb-4 text-gray-700">{modalContent.excerpt}</p>
              <div className={`modal-content ${isExpanded ? "expanded" : ""}`}>
                <p>{modalContent.fullContent}</p>
              </div>
              <button
                onClick={toggleExpand}
                className="mt-4 font-semibold text-indigo-600 hover:text-indigo-800"
              >
                {isExpanded ? "Read Less" : "Read Full Article"}
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Blog;
