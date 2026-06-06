import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharani Manne — AI/ML Engineer" },
      { name: "description", content: "Portfolio of Dharani Manne, AI/ML Engineer specializing in LLMs, RAG pipelines, and adversarial-robust ML." },
      { property: "og:title", content: "Dharani Manne — AI/ML Engineer" },
      { property: "og:description", content: "Bento-grid editorial portfolio: LLMs, RAG, adversarial-robust ML." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/portfolio.html"
      title="Dharani Manne Portfolio"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", border: "none" }}
    />
  );
}
