import { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import sample from './videos/sample_video.mp4';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function LessonInfo() {
  const { data: lesson } = useContext(DataContext);
  const navigate = useNavigate();

  if (!lesson) {
    return <p>No lesson selected.</p>;
  }

  const Book = () => {
    const lessonName = lesson.name;
    const lessonId = lesson.id;
    const d = {lessonName, lessonId};
    console.log(d);
    navigate('/LessonBook', {state : d});

  }

  const goBack = () => {
    navigate('/Lesson');
  }

  return (
  <div>
    <div className="container mt-5">
        <div className="row">
            <div className="col" style={{marginTop: '20px'}}><button className="btn btn-primary" onClick={goBack}>Back</button></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col" style={{marginTop: '20px'}}><button className="btn btn-primary" onClick={Book}>Book</button></div>
        </div>
        <div className="row">
            <div className="col-sm" style={{marginTop: '20px'}}>
                <h1>{lesson.name}</h1>
                <p>{lesson.description}</p>
                <p><strong>Lesson Type:</strong> {lesson.lessontype}</p>
                <p><strong>Price:</strong> ${lesson.price}</p>
                <p><strong>Lesson Difficulty:</strong> {lesson.difficulty}</p>
                <p><strong>Horse Requirements:</strong> {lesson.requiresHorse ? 'Yes' : 'No'} </p>
            </div>
            <div className="col-sm" style={{marginTop: '20px'}}>
                <img src={lesson.img} alt={lesson.name} className="img-fluid mb-4" />
            </div>
        </div>
    <h1>Lesson Video</h1>
    <video width="800" controls>
        <source src={sample} type="video/mp4" />
    </video>
    </div>
  <Footer />
  </div>
  );
}

export default LessonInfo