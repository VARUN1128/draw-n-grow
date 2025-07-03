import React, { useState } from 'react';
import { courses } from '../data/courses';
import { FaLock, FaUnlock, FaCheckCircle, FaUpload } from 'react-icons/fa';

const CourseLevels = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [uploadedImages, setUploadedImages] = useState({});

  const handleImageUpload = (videoId) => {
    // In a real application, this would handle file upload
    setUploadedImages(prev => ({
      ...prev,
      [videoId]: true
    }));
  };

  const renderLevelSelector = () => (
    <div className="level-selector">
      {Object.entries(courses).map(([level, data]) => (
        <button
          key={level}
          className={`level-button ${selectedLevel === level ? 'active' : ''}`}
          onClick={() => setSelectedLevel(level)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );

  const renderLessonSelector = () => (
    <div className="lesson-selector">
      {Object.entries(courses[selectedLevel].lessons).map(([lesson, data]) => (
        <button
          key={lesson}
          className={`lesson-button ${selectedLesson === lesson ? 'active' : ''}`}
          onClick={() => setSelectedLesson(lesson)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );

  const renderVideoList = () => {
    if (!selectedLesson) return null;
    const videos = courses[selectedLevel].lessons[selectedLesson].videos;

    return (
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              {uploadedImages[video.id] ? (
                <FaCheckCircle className="completed-icon" />
              ) : (
                <div className="upload-overlay">
                  <input
                    type="file"
                    id={`upload-${video.id}`}
                    accept="image/*"
                    onChange={() => handleImageUpload(video.id)}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor={`upload-${video.id}`}>
                    <FaUpload className="upload-icon" />
                  </label>
                </div>
              )}
            </div>
            <h3>{video.title}</h3>
            <div className="video-actions">
              <button className="watch-button">Watch Video</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="course-levels">
      <h2>Course Levels</h2>
      {renderLevelSelector()}
      {selectedLevel && (
        <div className="level-content">
          <h3>{courses[selectedLevel].title}</h3>
          <p>{courses[selectedLevel].description}</p>
          {renderLessonSelector()}
          {renderVideoList()}
        </div>
      )}
    </div>
  );
};

export default CourseLevels; 