import React, { useState, useRef, useEffect } from 'react';
import VideoCard from './VideoCard';
import ImageContentCard from './ImageContentCard';

interface VideoGridProps {
  activeTab: string;
}

const VideoGrid: React.FC<VideoGridProps> = ({ activeTab }) => {
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const videos = [
    {
      id: '1095495803',
      hash: '55eac0fa5a',
      title: '10th Mathematics Part 1',
      description: 'Complete mathematical concepts and problem-solving techniques for 10th standard students. This comprehensive lesson covers fundamental topics with detailed explanations and practical examples.',
      category: 'Mathematics',
      thumbnail: 'https://vumbnail.com/1095495803.jpg'
    },
    {
      id: '1095510347', 
      hash: 'adbdfa174b',
      title: 'Operating a Computer - Class 2',
      description: 'Introduction to computer operations for Class 2 students. Learn basic computer skills, understanding hardware components, and fundamental operations in an engaging and interactive way.',
      category: 'Computer Science',
      thumbnail: 'https://vumbnail.com/1095510347.jpg'
    }
  ];

  const imageContents = [
    {
      id: 'img1',
      title: 'College Campus Tour',
      description: 'Explore our beautiful campus with state-of-the-art facilities, well-equipped laboratories, and modern classrooms designed to provide the best learning environment for our students.',
      category: 'Campus Life',
      image: '/lovable-uploads/4ccc7f7c-5669-4a9c-9fea-01fea4519188.png'
    }
  ];

  const filteredVideos = activeTab === 'All' 
    ? videos 
    : videos.filter(video => video.category === activeTab);

  const filteredImageContents = activeTab === 'All' 
    ? imageContents 
    : imageContents.filter(content => content.category === activeTab);

  useEffect(() => {
    // Create intersection observer for auto-pause functionality
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoId = entry.target.getAttribute('data-video-id');
          if (videoId && videoRefs.current[videoId]) {
            if (!entry.isIntersecting && currentPlayingId === videoId) {
              // Video is out of view, pause it
              pauseVideo(videoId);
            }
          }
        });
      },
      {
        threshold: 0.5, // Video must be at least 50% visible
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentPlayingId]);

  const pauseVideo = (videoId: string) => {
    const iframe = videoRefs.current[videoId];
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage('{"method":"pause"}', '*');
    }
  };

  const playVideo = (videoId: string) => {
    // Pause currently playing video
    if (currentPlayingId && currentPlayingId !== videoId) {
      pauseVideo(currentPlayingId);
    }
    
    // Play the selected video
    const iframe = videoRefs.current[videoId];
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage('{"method":"play"}', '*');
    }
    
    setCurrentPlayingId(videoId);
  };

  const setVideoRef = (videoId: string, ref: HTMLIFrameElement | null) => {
    videoRefs.current[videoId] = ref;
    
    // Observe the video element for auto-pause
    if (ref && observerRef.current) {
      observerRef.current.observe(ref);
    }
  };

  const allContent = [...filteredVideos, ...filteredImageContents];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allContent.length > 0 ? (
          allContent.map((item) => (
            'id' in item && item.id.startsWith('img') ? (
              <ImageContentCard
                key={item.id}
                content={item as any}
              />
            ) : (
              <VideoCard
                key={item.id}
                video={item as any}
                onPlay={() => playVideo(item.id)}
                setVideoRef={(ref) => setVideoRef(item.id, ref)}
                isPlaying={currentPlayingId === item.id}
              />
            )
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-500 text-lg">
              No content available for {activeTab}
            </div>
            <p className="text-gray-400 mt-2">
              More content coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGrid;
