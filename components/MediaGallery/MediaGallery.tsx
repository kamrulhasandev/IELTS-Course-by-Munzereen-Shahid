"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

type Medium = {
  id?: string | number;
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
};

const MediaGallery: React.FC<{ data: Medium[] }> = ({ data }) => {
  const previewGalleryItems = data.filter(
    (item) => item.name === "preview_gallery"
  );

  const [selectedMedia, setSelectedMedia] = useState<Medium>(
    previewGalleryItems[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % previewGalleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedMedia(previewGalleryItems[nextIndex]);
    setShowVideo(false);
  };

  const prevMedia = () => {
    const prevIndex =
      (currentIndex - 1 + previewGalleryItems.length) %
      previewGalleryItems.length;
    setCurrentIndex(prevIndex);
    setSelectedMedia(previewGalleryItems[prevIndex]);
    setShowVideo(false);
  };

  const selectMedia = (item: Medium, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
    setShowVideo(false);
  };

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <div>
      <div className="relative aspect-video bg-black overflow-hidden">
        {selectedMedia.resource_type === "video" && !showVideo ? (
          <div
            className="w-full h-full relative cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <Image
              src={
                selectedMedia.thumbnail_url ||
                `https://img.youtube.com/vi/${selectedMedia.resource_value}/hqdefault.jpg`
              }
              alt="Video thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black/30">
              <IoMdArrowDroprightCircle size={60} />
            </div>
          </div>
        ) : selectedMedia.resource_type === "video" ? (
          <iframe
            src={getYouTubeEmbedUrl(selectedMedia.resource_value)}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Image
            src={selectedMedia.resource_value}
            alt="Course preview"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        )}

        <button
          onClick={prevMedia}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10"
        >
          <IoIosArrowDropleftCircle size={30} />
        </button>
        <button
          onClick={nextMedia}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10"
        >
          <IoIosArrowDroprightCircle size={30} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex space-x-2 overflow-x-hidden">
          {previewGalleryItems.map((item, index) => (
            <button
              key={item.id ?? index}
              onClick={() => selectMedia(item, index)}
              className={`flex-shrink-0 relative ${
                currentIndex === index ? "border-2 border-blue-400 rounded" : ""
              }`}
            >
              <div className="relative w-12 h-8">
                <Image
                  src={item.thumbnail_url || item.resource_value}
                  alt={`Preview ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 80px"
                  className="object-cover rounded"
                />
                {item.resource_type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IoMdArrowDroprightCircle />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
