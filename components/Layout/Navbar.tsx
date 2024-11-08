"use client";

import { GITHUB_URL } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimationsOpen, setIsAnimationsOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
                <div className="flex items-center gap-2 md:gap-4">
                    <Link href="/" className="flex items-center gap-1 md:gap-2">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8 md:w-10 md:h-10 hover:scale-105 transition-transform"
                        />
                        <span className="font-semibold text-lg hidden md:block">Tensor SVG Loaders</span>
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4">
                        <Link className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline" href="/">Gallery</Link>
                        <Link className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline flex items-center gap-1" href="/editor">
                            Editor
                            <span className="px-1.5 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">New</span>
                        </Link>
                        <div className="relative">
                            <button
                                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                onClick={() => setIsAnimationsOpen(!isAnimationsOpen)}
                            >
                                Animations
                                <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">Fun</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${isAnimationsOpen ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isAnimationsOpen && (
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Link
                                            href="/animations"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setIsAnimationsOpen(false);
                                            }}
                                        >
                                            All Animations
                                        </Link>
                                        <Link
                                            href="/animations/confetti"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setIsAnimationsOpen(false);
                                            }}
                                        >
                                            Confetti
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>
                    
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-muted-foreground hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                

                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href={`${GITHUB_URL}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border bg-background px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        <svg viewBox="0 0 438.549 438.549" className="mr-1.5 h-4 w-4">
                            <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
                        </svg>
                        GitHub
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
                    <div className="px-4 py-3 space-y-3">
                        <Link 
                            href="/" 
                            className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Gallery
                        </Link>
                        <Link 
                            href="/editor" 
                            className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Editor
                            <span className="ml-2 px-1.5 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">New</span>
                        </Link>
                        <div className="relative">
                            <button
                                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                onClick={() => setIsAnimationsOpen(!isAnimationsOpen)}
                            >
                                Animations
                                <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">Fun</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${isAnimationsOpen ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isAnimationsOpen && (
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Link
                                            href="/animations"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setIsAnimationsOpen(false);
                                            }}
                                        >
                                            All Animations
                                        </Link>
                                        <Link
                                            href="/animations/confetti"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setIsAnimationsOpen(false);
                                            }}
                                        >
                                            Confetti
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link
                            href={`${GITHUB_URL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg viewBox="0 0 438.549 438.549" className="mr-1.5 h-4 w-4">
                                <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
                            </svg>
                            GitHub
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}