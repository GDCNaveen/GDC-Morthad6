import React from 'react';
import { Download, FileText, FileIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface DownloadableFile {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'word';
  size: string;
  url: string;
  category: string;
}

interface DownloadCardProps {
  file: DownloadableFile;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ file }) => {
  const handleDownload = () => {
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = file.url;
    link.download = `${file.title}.${file.type === 'pdf' ? 'pdf' : 'docx'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFileIcon = () => {
    return file.type === 'pdf' ? 
      <FileText className="h-12 w-12 text-red-500" /> : 
      <FileIcon className="h-12 w-12 text-blue-500" />;
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          {getFileIcon()}
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
              {file.title}
            </CardTitle>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="capitalize font-medium">{file.type.toUpperCase()}</span>
              <span>•</span>
              <span>{file.size}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {file.description}
        </p>
        
        <Button 
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium"
        >
          <Download className="h-4 w-4 mr-2" />
          Download {file.type.toUpperCase()}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DownloadCard;
