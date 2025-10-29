import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Globe, Github, FileText } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon?: string;
    title: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  // Helper function to get the right icon
  const getIcon = (iconName?: string) => {
    switch (iconName?.toLowerCase()) {
      case 'github':
        return <Github className="h-3.5 w-3.5" />;
      case 'filetext':
      case 'paper':
        return <FileText className="h-3.5 w-3.5" />;
      case 'globe':
      case 'website':
        return <Globe className="h-3.5 w-3.5" />;
      default:
        return <Globe className="h-3.5 w-3.5" />;
    }
  };

  // Check if this is a paper-only project (has Paper link but no Demo/Website)
  const isPaperOnly = links?.some(link => link.title.toLowerCase() === 'paper') && 
                      !links?.some(link => ['demo', 'website', 'live'].includes(link.title.toLowerCase()));

  // Modal state for demo popup
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Only show modal for Text Summarization project
  const isTextSummarization = title.toLowerCase().includes("summarization");

  return (
    <>
      <Card
        className={cn(
          "flex flex-col overflow-hidden bg-slate-50 dark:bg-[#121417] border border-slate-200 dark:border-transparent hover:shadow-lg hover:shadow-[#06B6D4]/20 transition-all duration-300 ease-out h-full",
          className
        )}
      >
        {/* Image/Video Section */}
        {(video || image) && (
          <>
            {!isPaperOnly ? (
              isTextSummarization ? (
                <button
                  type="button"
                  className="block w-full cursor-pointer focus:outline-none"
                  onClick={() => setShowDemoModal(true)}
                  aria-label="Try the Demo"
                >
                  {video && (
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="pointer-events-none mx-auto h-48 w-full object-cover object-top"
                    />
                  )}
                  {image && !video && (
                    <Image
                      src={image}
                      alt={title}
                      width={500}
                      height={300}
                      className="h-48 w-full overflow-hidden object-cover object-top"
                    />
                  )}
                </button>
              ) : (
                <Link
                  href={href || "#"}
                  className="block cursor-pointer"
                >
                  {video && (
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="pointer-events-none mx-auto h-48 w-full object-cover object-top"
                    />
                  )}
                  {image && !video && (
                    <Image
                      src={image}
                      alt={title}
                      width={500}
                      height={300}
                      className="h-48 w-full overflow-hidden object-cover object-top"
                    />
                  )}
                </Link>
              )
            ) : (
              <div className="block">
                {video && (
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="pointer-events-none mx-auto h-48 w-full object-cover object-top"
                  />
                )}
                {image && !video && (
                  <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    className="h-48 w-full overflow-hidden object-cover object-top"
                  />
                )}
              </div>
            )}
          </>
        )}

      {/* Header Section */}
      <CardHeader className="px-4 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold text-slate-900 dark:text-[#E5E7EB]">
            {title}
          </CardTitle>
          {dates && (
            <time className="font-sans text-xs text-slate-700 dark:text-[#E5E7EB]">
              {dates}
            </time>
          )}
        </div>
      </CardHeader>

      {/* Content Section */}
      <CardContent className="px-4 pb-2 flex-grow">
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-slate-700 dark:text-[#E5E7EB] dark:prose-invert">
          {description}
        </Markdown>
        {/* Technology Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[10px] bg-slate-100 dark:bg-[#1E293B] text-[#06B6D4] border border-[#06B6D4]/50 dark:border-[#06B6D4]/30 hover:bg-[#06B6D4]/10"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* Footer with Action Buttons */}
      <CardFooter className="px-4 pb-4 pt-2">
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 w-full">
            {links?.map((link, idx) => (
              <Link 
                href={link?.href} 
                key={idx} 
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-medium rounded-md bg-transparent text-[#06B6D4] border border-[#06B6D4] hover:bg-[#06B6D4] hover:text-white transition-all duration-200"
              >
                {getIcon(link.icon)}
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>

    {/* Modal for Try Demo - only for Text Summarization */}
    {isTextSummarization && showDemoModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md min-h-[380px] sm:min-h-[420px] flex flex-col justify-center items-center bg-[#121417] dark:bg-[#18181B] border-2 border-[#06B6D4] rounded-xl shadow-2xl p-8 animate-fadeIn">
          {/* Close button */}
          <button
            className="absolute top-3 right-3 text-[#06B6D4] hover:text-white text-xl font-bold"
            onClick={() => setShowDemoModal(false)}
            aria-label="Close"
          >
            ×
          </button>
          {/* Icon */}
          <div className="mb-6 flex items-center justify-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#06B6D4" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </span>
          </div>
          {/* Title */}
          <h2 className="text-2xl font-bold text-white text-center mb-3">Try the Demo! <span className="ml-1">✨</span></h2>
          {/* Description */}
          <p className="text-base text-slate-300 text-center mb-8">Experience the AI-powered Text Summarization System in action. Paste your text and get instant summaries!</p>
          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center">
            <a
              href="/projects/text-summarization-demo"
              className="px-6 py-3 rounded-lg bg-[#06B6D4] text-white font-semibold shadow hover:bg-[#06B6D4]/90 transition-all"
              onClick={() => setShowDemoModal(false)}
            >
              Open Demo
            </a>
            <button
              className="px-6 py-3 rounded-lg border border-[#06B6D4] text-[#06B6D4] font-semibold bg-transparent hover:bg-[#06B6D4]/10 transition-all"
              onClick={() => setShowDemoModal(false)}
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
}
