import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaPalette, FaBrush, FaGraduationCap, FaLock, FaUnlock } from 'react-icons/fa';
import VideoLesson from '../components/VideoLesson';
import '../styles/Courses.css';

const Courses = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [courses, setCourses] = useState({
    beginner: {
      id: 'beginner',
      title: 'Beginner',
      description: 'Learn to draw using simple shapes and letters',
      icon: <FaPalette />,
      color: '#FF1493',
      lessons: [
        {
          id: 'lesson1',
          title: 'Alphabet Drawing - Letter A',
          videoUrl: 'https://www.youtube.com/embed/SWmghBe7FpQ',
          isLocked: false
        },
        {
          id: 'lesson2',
          title: 'Alphabet Drawing - Letter B',
          videoUrl: 'https://www.youtube.com/embed/vSPo19mGlr8',
          isLocked: true
        },
        {
          id: 'lesson3',
          title: 'Alphabet Drawing - Letter D',
          videoUrl: 'https://www.youtube.com/embed/Gn8bcxAgq10',
          isLocked: true
        },
        {
          id: 'lesson4',
          title: 'Alphabet Drawing - Letter E',
          videoUrl: 'https://www.youtube.com/embed/1TuOmaF01lw',
          isLocked: true
        },
        {
          id: 'lesson5',
          title: 'Alphabet Drawing - Letter F',
          videoUrl: 'https://www.youtube.com/embed/etRPbuOMxg0',
          isLocked: true
        },
        {
          id: 'lesson6',
          title: 'Alphabet Drawing - Letter G',
          videoUrl: 'https://www.youtube.com/embed/fACALzLPy8s',
          isLocked: true
        },
        {
          id: 'lesson7',
          title: 'Alphabet Drawing - Letter H',
          videoUrl: 'https://www.youtube.com/embed/xQwxUqdluJo',
          isLocked: true
        },
        {
          id: 'lesson8',
          title: 'Alphabet Drawing - Letter I',
          videoUrl: 'https://www.youtube.com/embed/8vOjANj3iXs',
          isLocked: true
        },
        {
          id: 'lesson9',
          title: 'Alphabet Drawing - Letter J',
          videoUrl: 'https://www.youtube.com/embed/EMFJYm6XZ2s',
          isLocked: true
        },
        {
          id: 'lesson10',
          title: 'Alphabet Drawing - Letter K',
          videoUrl: 'https://www.youtube.com/embed/hp6_KrXoWn8',
          isLocked: true
        },
        {
          id: 'lesson11',
          title: 'Alphabet Drawing - Letter L',
          videoUrl: 'https://www.youtube.com/embed/Ykc7Td5XALY',
          isLocked: true
        },
        {
          id: 'lesson12',
          title: 'Alphabet Drawing - Letter M',
          videoUrl: 'https://www.youtube.com/embed/zeLq74N6V-w',
          isLocked: true
        },
        {
          id: 'lesson13',
          title: 'Drawing Vegetables - Cabbage',
          videoUrl: 'https://www.youtube.com/embed/xIhdGVts48E',
          isLocked: true
        }
      ]
    },
    intermediate: {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'Learn to draw your favorite cartoon characters',
      icon: <FaBrush />,
      color: '#9C27B0',
      lessons: [
        {
          id: 'lesson1',
          title: 'Draw Oggy and the Cockroaches',
          videoUrl: 'https://www.youtube.com/embed/GIei0fD45Lc',
          isLocked: false
        },
        {
          id: 'lesson2',
          title: 'Draw Peppa Pig',
          videoUrl: 'https://www.youtube.com/embed/MbDBAsLEQDQ',
          isLocked: true
        },
        {
          id: 'lesson3',
          title: 'Draw Shinchan',
          videoUrl: 'https://www.youtube.com/embed/GlvwWjHqIMY',
          isLocked: true
        },
        {
          id: 'lesson4',
          title: 'Draw SpongeBob',
          videoUrl: 'https://www.youtube.com/embed/erKCmdNQN8o',
          isLocked: true
        },
        {
          id: 'lesson5',
          title: 'Draw Chotta Bheem',
          videoUrl: 'https://www.youtube.com/embed/TRLsKLU-EWI',
          isLocked: true
        }
      ]
    },
    advanced: {
      id: 'advanced',
      title: 'Advanced',
      description: 'Master complex artistic concepts and styles',
      icon: <FaGraduationCap />,
      color: '#3F51B5',
      lessons: []
    }
  });

  useEffect(() => {
    if (level && !courses[level]) {
      navigate('/courses');
    }
  }, [level, navigate, courses]);

  useEffect(() => {
    setSelectedLesson(null);
  }, [level]);

  const handleLessonComplete = (lessonId) => {
    const currentCourse = courses[level];
    if (currentCourse) {
      const lessonIndex = currentCourse.lessons.findIndex(lesson => lesson.id === lessonId);
      if (lessonIndex < currentCourse.lessons.length - 1) {
        setCourses(prevCourses => {
          const newCourses = {
            ...prevCourses,
            [level]: {
              ...prevCourses[level],
              lessons: prevCourses[level].lessons.map((lesson, idx) => {
                if (idx === lessonIndex + 1) {
                  return { ...lesson, isLocked: false };
                }
                return lesson;
              })
            }
          };
          return newCourses;
        });

        // Show success message
        alert('Great job! You\'ve unlocked the next lesson!');
        
        // Automatically switch to the next lesson
        const nextLesson = currentCourse.lessons[lessonIndex + 1];
        setSelectedLesson(nextLesson);
      } else if (lessonIndex === currentCourse.lessons.length - 1) {
        // If it's the last lesson
        alert('Congratulations! You\'ve completed all lessons in this course!');
      }
    }
  };

  const currentCourse = level ? courses[level] : null;

  const handleLessonSelect = (lesson) => {
    if (!lesson.isLocked) {
      setSelectedLesson(lesson);
    }
  };

  // Add icons back for rendering
  const getIconForLevel = (levelId) => {
    switch (levelId) {
      case 'beginner':
        return <FaPalette />;
      case 'intermediate':
        return <FaBrush />;
      case 'advanced':
        return <FaGraduationCap />;
      default:
        return null;
    }
  };

  if (!currentCourse) {
    return (
      <div className="courses-page">
        <div className="courses-header">
          <h1 className="courses-title">Our Courses</h1>
          <p className="courses-subtitle">Choose your path and begin your artistic journey</p>
        </div>

        <div className="courses-grid">
          {Object.values(courses).map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-card__icon-wrapper" style={{ '--card-color': course.color }}>
                {getIconForLevel(course.id)}
              </div>
              <h2 className="course-card__title">{course.title}</h2>
              <p className="course-card__description">{course.description}</p>
              <Link to={`/courses/${course.id}`} className="course-card__button">
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <div className="course-card__glow"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="course-header">
        <h1>{currentCourse.title}</h1>
        <p>{currentCourse.description}</p>
      </div>

      <div className="course-content">
        <div className="lessons-list">
          <h3 className="lessons-title">Course Lessons</h3>
          {currentCourse.lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`lesson-item ${selectedLesson?.id === lesson.id ? 'active' : ''} ${lesson.isLocked ? 'locked' : 'unlocked'}`}
              onClick={() => handleLessonSelect(lesson)}
            >
              <div className="lesson-number">{index + 1}</div>
              <div className="lesson-info">
                <div className="lesson-title">{lesson.title}</div>
                <div className="lesson-status">
                  {lesson.isLocked ? (
                    <>
                      <FaLock className="lock-icon" />
                      <span>Complete previous lesson to unlock</span>
                    </>
                  ) : selectedLesson?.id === lesson.id ? (
                    <>
                      <div className="current-lesson-indicator">Currently Playing</div>
                    </>
                  ) : (
                    <>
                      <FaUnlock className="lock-icon" />
                      <span>Click to watch</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lesson-content">
          {selectedLesson ? (
            <VideoLesson 
              key={selectedLesson.id}
              lesson={selectedLesson}
              onComplete={handleLessonComplete}
            />
          ) : currentCourse.lessons.length > 0 ? (
            <VideoLesson 
              key={currentCourse.lessons[0].id}
              lesson={currentCourse.lessons[0]}
              onComplete={handleLessonComplete}
            />
          ) : (
            <div className="no-lessons">
              <p>No lessons available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses; 