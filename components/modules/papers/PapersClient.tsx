/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import Paper from "./Paper";

export default function PapersClient({ posts }: { posts: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const [dateSort, setDateSort] = useState("Newest");

  const filteredArticles = useMemo(() => {
    let result = [...posts];

    // Search (title + body)
    if (searchQuery) {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Topic filter (tags)
    if (topic !== "All") {
      result = result.filter((item) =>
        item.tags?.includes(topic.toLowerCase())
      );
    }

    // Sort
    if (dateSort === "Newest") {
      result.sort((a, b) => b.id - a.id);
    }

    if (dateSort === "Oldest") {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [posts, searchQuery, topic, dateSort]);

  return (
    <div className="my-[140px]">
      <h1 className="text-[64px] font-normal">Recent Papers Row</h1>

      {/* Search + Filters */}
      <div className="flex gap-4 mt-10">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title or body"
          className="border px-4 py-2 rounded w-full"
        />

        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option>All</option>
          <option>history</option>
          <option>american</option>
          <option>crime</option>
        </select>

        <select
          value={dateSort}
          onChange={(e) => setDateSort(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
        {filteredArticles.map((card) => (
          <Paper key={card.id} card={card} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="text-gray-500 mt-6">No articles found.</p>
      )}
    </div>
  );
}
