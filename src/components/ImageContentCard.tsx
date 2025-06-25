
import React, { useState } from 'react';

interface ImageContent {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

interface ImageContentCardProps {
  content: ImageContent;
}

const ImageContentCard: React.FC<ImageContentCardProps> = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowReadMore = content.description.length > 150;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto sm:max-w-none">
      {/* Image */}
      <div className="relative aspect-video">
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Info */}
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight">
          {content.title}
        </h3>
        <div className="mb-4">
          <p className={`text-gray-600 text-sm leading-relaxed text-justify ${
            !isExpanded && shouldShowReadMore ? 'line-clamp-3' : ''
          }`}>
            {content.description}
          </p>
          {shouldShowReadMore && (
            <button
              onClick={toggleExpanded}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">
            {content.category}
          </span>
          <div className="flex items-center justify-center flex-shrink-0">
            <img 
              src="/lovable-uploads/4ccc7f7c-5669-4a9c-9fea-01fea4519188.png" 
              alt="Government Degree College Logo"
              className="h-10 w-10 object-contain rounded-full border-2 border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContentCard;
