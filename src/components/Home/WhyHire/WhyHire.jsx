// src/components/Home/WhyHire.jsx
import { useEffect } from "react";

const WhyHire = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const fadeElements = document.querySelectorAll(".why-card");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const reasons = [
    {
      icon: "⚛️",
      title: "React Ecosystem Depth",
      description:
        "React Query, Context API, React Router, hooks — I know the ecosystem deeply, not just the surface.",
    },
    {
      icon: "🏗️",
      title: "Full Stack Ownership",
      description:
        "I've built complete products solo — from Figma wireframes through Node.js APIs to MongoDB and deployment.",
    },
    {
      icon: "🏥",
      title: "Healthcare & SaaS Domain",
      description:
        "Real experience with HIPAA compliance, patient data handling, and multi-tenant SaaS architecture.",
    },
    {
      icon: "⚡",
      title: "Performance First",
      description:
        "React Query caching, lazy loading, code splitting — I optimize before it becomes a problem.",
    },
    {
      icon: "🎨",
      title: "Design-to-Code Precision",
      description:
        "I convert Figma designs pixel-perfectly across Chrome, Firefox, Safari, and Edge.",
    },
    {
      icon: "🤝",
      title: "Agile Team Player",
      description:
        "Comfortable in sprint cycles, code reviews, and cross-functional teams. Clean code is non-negotiable.",
    },
  ];

  return (
    <section id="why" className="why">
      <div className="why-inner">
        <div className="section-label" style={{ textAlign: "center" }}>
          Why Hire Me
        </div>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          What I bring to your team
        </h2>
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-card"
              data-anim={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
              data-delay={((index % 3) + 1) * 100}
            >
              <div className="why-icon">{reason.icon}</div>
              <div className="why-title">{reason.title}</div>
              <div className="why-desc">{reason.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
