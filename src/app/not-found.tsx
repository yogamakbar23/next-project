"use client";
import { NoteBlank } from "@phosphor-icons/react";

const Page = () => {
  return (
    <div className="flex flex-col gap-3 min-h-screen  max-w-xl mx-auto justify-center items-center">
      {" "}
      <div className="flex text-4xl justify-center items-center gap-4">
        <NoteBlank size={60} />
        404 Not Found
      </div>
      <p>This page is not available</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition "
      >
        Back to main page
      </a>
    </div>
  );
};
export default Page;
