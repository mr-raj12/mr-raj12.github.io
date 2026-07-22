"use client";

import { useEffect, useState } from "react";
import { marked } from "marked";

// The only thing needed — the gist link. Content is fetched fresh
// from the GitHub API every time this component mounts.
export const GIST_URL = "https://gist.github.com/mr-raj12/d16c3960c8d11d9de3a824a23650e958";

const GIST_ID = GIST_URL.split("/").filter(Boolean).pop();

export default function GistContent() {
  const [files, setFiles] = useState(null);
  const [meta, setMeta] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/gists/${GIST_ID}`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const fileList = Object.values(data.files);
        const words = fileList
          .map((f) => f.content || "")
          .join(" ")
          .split(/\s+/).length;
        setMeta({
          minutes: Math.max(1, Math.round(words / 200)),
          updated: new Date(data.updated_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
        });
        setFiles(fileList);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {meta && (
        <p className="gistMeta">
          {meta.minutes} min read · Updated {meta.updated} ·{" "}
          <a href={GIST_URL} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      )}

      {error && (
        <p style={{ color: "var(--text-secondary)" }}>
          Failed to load content ({error}).{" "}
          <a href={GIST_URL} target="_blank" rel="noopener noreferrer">
            View it on GitHub instead
          </a>
          .
        </p>
      )}

      {!files && !error && (
        <p style={{ color: "var(--text-muted)" }}>Loading…</p>
      )}

      {files &&
        files.map((file) => (
          <article key={file.filename} className="gistProse">
            {file.language === "Markdown" ? (
              <div
                dangerouslySetInnerHTML={{ __html: marked.parse(file.content) }}
              />
            ) : (
              <pre>
                <code>{file.content}</code>
              </pre>
            )}
          </article>
        ))}

      <style>{`
        .gistMeta {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0 0 20px;
          letter-spacing: 0.01em;
        }
        .gistMeta a {
          color: var(--text-muted);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .gistMeta a:hover {
          color: var(--text);
        }
        .gistProse {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }
        .gistProse h1,
        .gistProse h2,
        .gistProse h3,
        .gistProse h4 {
          color: var(--text);
          line-height: 1.3;
          margin: 1.6em 0 0.6em;
        }
        .gistProse h1 {
          font-size: 1.6rem;
          margin-top: 0;
        }
        .gistProse h2 {
          font-size: 1.25rem;
        }
        .gistProse h3 {
          font-size: 1.05rem;
        }
        .gistProse p {
          margin: 0 0 1em;
        }
        .gistProse a {
          color: var(--link);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .gistProse strong {
          color: var(--text);
        }
        .gistProse ul,
        .gistProse ol {
          padding-left: 1.4em;
          margin: 0 0 1em;
        }
        .gistProse li {
          margin-bottom: 0.35em;
        }
        .gistProse code {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 0.12em 0.35em;
          font-size: 0.85em;
        }
        .gistProse pre {
          background: var(--bg-elev);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px 16px;
          overflow-x: auto;
          margin: 0 0 1em;
        }
        .gistProse pre code {
          background: none;
          border: none;
          padding: 0;
        }
        .gistProse blockquote {
          border-left: 3px solid var(--border);
          margin: 0 0 1em;
          padding-left: 1em;
          color: var(--text-muted);
        }
        .gistProse hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 2em 0;
        }
        .gistProse img,
        .gistProse table {
          max-width: 100%;
        }
        .gistProse table {
          border-collapse: collapse;
          display: block;
          overflow-x: auto;
          margin: 0 0 1em;
        }
        .gistProse th,
        .gistProse td {
          border: 1px solid var(--border);
          padding: 6px 10px;
        }
      `}</style>
    </>
  );
}
