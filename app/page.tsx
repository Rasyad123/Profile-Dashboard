"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("./components/Lanyard"), { ssr: false });

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  // High quality SVG Brand Icons
  const techItems = [
    {
      name: "React.js",
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12 rounded-lg">
          <path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6" />
          <path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "Tailwind",
      icon: (
        <svg viewBox="0 0 54 33" className="w-14 h-9" fill="none">
          <g clipPath="url(#a)">
            <path
              fill="#38bdf8"
              fillRule="evenodd"
              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h54v32.4H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "HTML",
      icon: (
        <svg viewBox="0 0 512 512" className="w-12 h-12">
          <path fill="#E34F26" d="M71 460L30 0h452l-41 460L256 512z" />
          <path fill="#EF652A" d="M256 472l149-41 35-391H256z" />
          <path fill="#ECECEC" d="M256 208h-74l-5-56h79V96H120l15 168h121zm0 148l-63-17-4-47h-56l8 93 115 32z" />
          <path fill="#FFF" d="M256 208v56h74l-7 78-67 18v58l115-32 16-178zm0-112v56h135l5-56z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      icon: (
        <svg viewBox="0 0 512 512" className="w-12 h-12">
          <path fill="#1572B6" d="M71 460L30 0h452l-41 460L256 512z" />
          <path fill="#33A9DC" d="M256 472l149-41 35-391H256z" />
          <path fill="#ECECEC" d="M256 208H126l5 56h125zm0-112H120l5 56h131zM256 356l-63-17-4-47h-56l8 93 115 32z" />
          <path fill="#FFF" d="M256 208v56h74l-7 78-67 18v58l115-32 16-178zm0-112v56h135l5-56z" />
        </svg>
      ),
    },
    {
      name: "PHP",
      icon: (
        <svg viewBox="0 -1 100 50" className="w-16 h-10">
          <path fill="#fff" d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053" />
        </svg>
      ),
    },
    {
      name: "Laravel",
      icon: (
        <svg viewBox="0 0 256 264" className="w-12 h-12">
          <path d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z" fill="#FF2D20" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 256 256" className="w-12 h-12">
          <defs>
            <linearGradient id="SVGrDou6dwg" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="SVG9onTObtB" x1="50%" x2="49.953%" y1="0%" y2="73.438%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <circle id="SVGN5eQqeMK" cx="128" cy="128" r="128" />
          </defs>
          <mask id="SVGMX2wGdvm" fill="#fff">
            <use href="#SVGN5eQqeMK" />
          </mask>
          <g mask="url(#SVGMX2wGdvm)">
            <circle cx="128" cy="128" r="128" fill="#000" />
            <path fill="url(#SVGrDou6dwg)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418" />
            <path fill="url(#SVG9onTObtB)" d="M163.556 76.8h17.067v102.4h-17.067z" />
          </g>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 1052 1052" className="w-12 h-12 rounded-lg">
          <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
          <path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      icon: (
        <svg viewBox="0 0 122.88 83.67" className="w-16 h-12">
          <path d="M29.54 76.23H24.8q-.24-12-1.38-22.64l-7.26 22.64h-3.61L5.37 53.59q-.79 10.19-1 22.64H0q.42-15.15 2.1-28.41H8l6.84 20.87 6.88-20.87h5.62q1.84 15.52 2.18 28.41Zm0 0ZM50.11 55.27Q47.22 71 42.47 78.17q-3.69 5.51-8.1 5.5a7.89 7.89 0 0 1-2.89-.7v-2.53a14.05 14.05 0 0 0 2 .12 4.74 4.74 0 0 0 3.31-1.14 4.13 4.13 0 0 0 1.51-3.11 20.77 20.77 0 0 0-1.17-4.84l-5.2-16.2h4.65l3.74 12.12q1.26 4.13 1.05 5.76a79.31 79.31 0 0 0 4.28-17.88Zm0 0Z" fill="#FFF" />
          <path d="M70.88 68.35a7.56 7.56 0 0 1-2.64 5.94 10.42 10.42 0 0 1-7.09 2.31 14.22 14.22 0 0 1-8.06-2.6l1.22-2.44a13.76 13.76 0 0 0 6.08 1.68 6.39 6.39 0 0 0 4-1.13 3.9 3.9 0 0 0 1.54-3.16c0-1.68-1.17-3.12-3.33-4.33-2-1.1-6-3.38-6-3.38a6.79 6.79 0 0 1-3.24-6 7.09 7.09 0 0 1 2.42-5.58 9.06 9.06 0 0 1 6.23-2.13 12.87 12.87 0 0 1 7.17 2.11L68.15 52a13.74 13.74 0 0 0-5.45-1.18 4.87 4.87 0 0 0-3.36 1 3.55 3.55 0 0 0-1.27 2.7c0 1.68 1.2 3.14 3.41 4.37 2 1.09 6.08 3.42 6.08 3.42 2.22 1.57 3.32 3.25 3.32 6Zm0 0Z" fill="#FFF" />
          <path d="M79.35 70.54c-1.14-1.85-1.72-4.82-1.72-8.91q0-10.74 6.51-10.73a5.45 5.45 0 0 1 5 2.56q1.73 2.77 1.72 8.84 0 10.82-6.5 10.81a5.47 5.47 0 0 1-5-2.56Zm16.87 6.37L91 74.34a9.72 9.72 0 0 0 1.3-1.27q3.32-3.91 3.32-11.57 0-14.1-11-14.1a10.44 10.44 0 0 0-8.46 3.6q-3.31 3.92-3.31 11.53t2.94 11c1.78 2.1 4.48 3.16 8.09 3.16a13.16 13.16 0 0 0 3.71-.5l6.78 3.95 1.85-3.19Zm0 0Z" fillRule="evenodd" fill="#FFF" />
          <path d="M113.22 76.23H99.75V47.82h4.53v24.91h8.94v3.5zM116.45 76.22h.75v-2.89h1v-.59h-2.76v.59h1v2.89Zm5.72 0h.71v-3.48h-1.07l-.87 2.38-.94-2.38h-1v3.48h.67v-2.64l1 2.64h.51l1-2.64v2.64Zm0 0Z" fill="#FFF" />
          <path d="M118.91 38.31a15.86 15.86 0 0 0-6.64 1c-.51.21-1.33.21-1.4.86.27.27.3.72.55 1.1a7.87 7.87 0 0 0 1.77 2.09c.72.55 1.44 1.1 2.2 1.58 1.33.82 2.84 1.3 4.13 2.13.76.48 1.51 1.09 2.27 1.61.37.27.61.72 1.09.89v-.1c-.24-.31-.31-.76-.55-1.1l-1-1a16.49 16.49 0 0 0-3.56-3.47c-1.1-.76-3.5-1.79-3.94-3l-.07-.07a13.51 13.51 0 0 0 2.36-.56c1.17-.3 2.23-.23 3.42-.54.55-.14 1.1-.31 1.65-.48v-.31c-.62-.62-1.06-1.44-1.71-2a46.9 46.9 0 0 0-5.65-4.22c-1.06-.68-2.43-1.13-3.56-1.71-.41-.21-1.09-.31-1.33-.66a13.87 13.87 0 0 1-1.41-2.64c-1-1.88-2-4-2.8-6a37.42 37.42 0 0 0-1.73-3.99A34.56 34.56 0 0 0 89.71 4.88a16.08 16.08 0 0 0-4.38-1.4c-.85 0-1.71-.11-2.56-.14a13.4 13.4 0 0 1-1.58-1.2c-2-1.24-7-3.91-8.42-.38-.92 2.24 1.37 4.43 2.16 5.56a16.35 16.35 0 0 1 1.74 2.57c.24.59.31 1.21.55 1.82a41.7 41.7 0 0 0 1.78 4.6 16.86 16.86 0 0 0 1.27 2.13c.27.38.75.55.85 1.17a9.9 9.9 0 0 0-.78 2.57c-1.24 3.88-.76 8.68 1 11.53.54.86 1.85 2.75 3.59 2 1.54-.61 1.2-2.57 1.65-4.28.1-.42 0-.69.23-1v.06c.48 1 1 1.89 1.41 2.85A19.65 19.65 0 0 0 92.66 38c.82.62 1.47 1.68 2.5 2.06V40h-.07a4 4 0 0 0-.79-.69 16.31 16.31 0 0 1-1.78-2.06A43.24 43.24 0 0 1 88.69 31c-.55-1.07-1-2.24-1.47-3.3-.21-.41-.21-1-.55-1.23a12 12 0 0 0-1.67 2.3 19 19 0 0 0-1 5.18c-.14 0-.07 0-.14.07-1.09-.28-1.47-1.41-1.88-2.37a14.85 14.85 0 0 1-.31-9.16c.24-.72 1.27-3 .85-3.67-.2-.66-.89-1-1.26-1.55a12.77 12.77 0 0 1-1.23-2.19c-.82-1.93-1.24-4.05-2.12-6a19.24 19.24 0 0 0-1.72-2.64 16.78 16.78 0 0 1-1.88-2.67c-.17-.38-.41-1-.14-1.41a.55.55 0 0 1 .48-.45c.45-.38 1.71.1 2.16.31A17.11 17.11 0 0 1 80.27 4c.48.34 1 1 1.6 1.16h.72c1.1.24 2.33.07 3.36.38a21.63 21.63 0 0 1 4.93 2.37 30.37 30.37 0 0 1 10.67 11.74c.42.78.59 1.51 1 2.33.72 1.68 1.61 3.4 2.33 5a22.85 22.85 0 0 0 2.43 4.6c.52.72 2.57 1.1 3.49 1.48a23.92 23.92 0 0 1 2.37 1c1.16.72 2.32 1.54 3.42 2.33.54.42 2.26 1.27 2.36 2Zm0 0Z" fillRule="evenodd" fill="#FFF" />
          <path d="M84 8.48a5.2 5.2 0 0 0-1.41.18v.07h.07a12.56 12.56 0 0 0 1.1 1.4c.27.55.51 1.1.78 1.65l.07-.07a1.93 1.93 0 0 0 .72-1.71c-.2-.24-.24-.48-.41-.72s-.65-.51-.92-.79Zm0 0Z" fillRule="evenodd" fill="#FFF" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E2E8F0] flex flex-col font-[family-name:var(--font-plus-jakarta)] selection:bg-orange-500/30 selection:text-orange-300">
      {/* Fully Transparent Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          <nav className="flex items-center gap-1 sm:gap-6 font-mono text-xs text-slate-200 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-lg">
            <a href="#home" className="px-3.5 py-1.5 rounded-full hover:text-orange-400 hover:bg-white/10 transition-colors">
              Home
            </a>
            <a href="#about" className="px-3.5 py-1.5 rounded-full hover:text-orange-400 hover:bg-white/10 transition-colors">
              About
            </a>
            <a href="#portfolio" className="px-3.5 py-1.5 rounded-full hover:text-orange-400 hover:bg-white/10 transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="px-3.5 py-1.5 rounded-full hover:text-orange-400 hover:bg-white/10 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* SECTION 1: HOME (Full Screen Pixel Sunset Image Hero) */}
        <section id="home" className="relative h-screen w-full flex flex-col justify-between items-start overflow-hidden pt-20 pb-8 px-6 md:px-16">
          {/* Fullscreen Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/pixel-cats-sunset.webp"
              alt="Two Pixel Cats Watching Sunset Over Ocean"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transform scale-105 animate-float duration-1000"
            />
            {/* Ambient Gradient Overlays for visual depth & readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/80 via-[#0B0F19]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 via-transparent to-[#0B0F19]" />
          </div>

          {/* Left-Middle Content Overlay */}
          <div className="relative z-10 max-w-2xl text-left my-auto space-y-6">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Welcome to <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                My Dashboard
              </span>
            </h1>

            {/* Left Aligned CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
              <a
                href="#about"
                className="px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] hover:scale-105 transition-all"
              >
                TENTANG SAYA ↓
              </a>
              <a
                href="#portfolio"
                className="px-7 py-3.5 rounded-xl font-bold bg-black/50 backdrop-blur-md text-white border border-white/20 hover:border-orange-400 hover:text-orange-300 transition-all"
              >
                PORTFOLIO
              </a>
            </div>
          </div>

          {/* Bottom Dynamic Animated Scroll Indicator */}
          <a href="#about" className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer self-center">
            <span className="text-[11px] font-mono text-orange-200 group-hover:text-orange-400 transition-colors tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              GULIR KE ABOUT
            </span>
            <div className="w-6 h-10 border-2 border-orange-400/60 bg-black/40 backdrop-blur-sm group-hover:border-orange-400 rounded-full flex justify-center p-1.5 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.3)]">
              <div className="w-1.5 h-2.5 bg-orange-400 rounded-full animate-bounce-slow" />
            </div>
          </a>
        </section>

        {/* CATCHY SCROLL TRANSITION SEPARATOR (Home -> About) */}
        <div className="relative w-full overflow-hidden leading-none bg-[#0B0F19]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 sm:h-24 text-[#0B0F19]"
          >
            <path
              d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-orange-500/40 text-orange-400 font-mono text-[11px] tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.25)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>SECTION TRANSITION // ABOUT ME</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: ABOUT (Matching Screenshot Style) */}
        <section id="about" className="bg-[#0B0F19] bg-tactical-grid min-h-screen py-24 px-6 md:px-16 flex flex-col justify-between border-b border-slate-800/80 relative">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
            {/* Left Column: Text & Skills */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Tag Header */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 tracking-widest uppercase">
                <span className="text-orange-400">✦</span>
                <span>AVAILABLE FOR WORK</span>
              </div>

              {/* Big Bold Headline */}
              <div className="space-y-1 font-[family-name:var(--font-space-grotesk)]">
                <h2 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-none">
                  Fullstack
                </h2>
                <h2 className="text-5xl sm:text-7xl font-extrabold text-slate-400 tracking-tight leading-none">
                  Developer
                </h2>
              </div>

              {/* Bio Subtext */}
              <div className="space-y-3 max-w-lg">
                <p className="text-slate-300 font-mono text-sm">Hello</p>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">
                  Perkenalkan nama saya Rasyad Fajar biasa di panggil Rasyad , Saya Lulusan SMA ABBS Surakarta dan sekarang Mahasiswa baru di Perguruan Tinggi Univertsitas Sebelas Maret(UNS) dengan program studi Pendidikan Teknik Informatika dan Komputer(PTIK)
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2.5 font-mono text-xs pt-1">
                {["Typescript", "React.js", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-orange-500/40 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status Footer Lines */}
              <div className="space-y-1.5 font-mono text-xs text-slate-500 pt-4 border-t border-slate-800/60 max-w-md">
                <p className="flex items-center gap-2 text-slate-400">
                  <span>↓</span> explore my work below
                </p>
                <p className="flex items-center gap-2 text-slate-400">
                  <span>↗</span> open to full-time & freelance opportunities
                </p>
              </div>
            </div>

            {/* Right Column: Interactive 3D Physics Lanyard Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative w-full h-[800px]">
              <Lanyard
                position={[0, 0, 22]}
                gravity={[0, -40, 0]}
                frontImage="/profile-photo.webp"
                backImage="/profile-photo.webp"
                imageFit="cover"
                lanyardImage="/lanyard.png"
                lanyardWidth={3.2}
              />
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="text-center font-mono text-xs text-slate-500 tracking-widest pt-8">
            SCROLL ↓
          </div>
        </section>

        {/* SECTION 3: TECH STACK SHOWCASE */}
        <section id="portfolio" className="bg-tactical-grid bg-[#0B0F19] py-24 px-4 md:px-8 border-b border-slate-800/80 relative">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Title */}
            <div className="text-center space-y-3">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Tech Stack
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
                Explore my technical expertise, frameworks, and programming tools.
              </p>
            </div>

            {/* TECH STACK GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 pt-4">
              {techItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#121824]/90 border border-slate-800/80 hover:border-slate-600 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all group"
                >
                  <div className="transition-transform group-hover:scale-110 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CONTACT */}
        <section id="contact" className="bg-[#0B0F19] py-20 px-4 md:px-8 relative">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">
                // GET IN TOUCH
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-white tracking-wide">
                Hubungi Kami
              </h2>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Punya pertanyaan atau ingin berkolaborasi? Kirimkan pesan Anda di bawah ini.
              </p>
            </div>

            {/* Contact Form & Info Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Form Side */}
              <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
                {submitted ? (
                  <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/40 text-center space-y-2">
                    <div className="text-3xl">✨</div>
                    <h4 className="font-bold text-white text-lg">Pesan Terkirim!</h4>
                    <p className="text-xs text-slate-300 font-mono">
                      Terima kasih sudah menghubungi kami. Kami akan segera membalasnya.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 block uppercase tracking-wider">Nama Anda</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 block uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 block uppercase tracking-wider">Pesan</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tuliskan pesan atau ide Anda di sini..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all cursor-pointer uppercase tracking-wider"
                    >
                      KIRIM PESAN
                    </button>
                  </form>
                )}
              </div>

              {/* Info Side */}
              <div className="md:col-span-5 space-y-6">
                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    CONNECT WITH US
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Terhubung dengan kami untuk kabar terbaru, diskusi teknologi, dan kolaborasi proyek.
                  </p>

                  <div className="space-y-2 pt-2 font-mono text-xs">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-orange-400">📧</span>
                      <span className="text-slate-300">contact@rasyad-fajar.com</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-orange-400">📍</span>
                      <span className="text-slate-300">Indonesia</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
                  <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    COMMUNITY LINKS
                  </span>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {["GITHUB", "DISCORD", "TWITTER", "INSTAGRAM"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-orange-500/40 transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-6 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <p>© 2026 Rasyad Fajar. ALL RIGHTS RESERVED.</p>
          <a href="#home" className="hover:text-orange-400 transition-colors">
            KEMBALI KE ATAS ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
