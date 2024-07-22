import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';


function LessonCard( {lesson} ){
  const { setData } = useContext(DataContext);
  const navigate = useNavigate();

  const handleInfo = () => {
    setData(lesson);
    navigate('/LessonInfo');
  };

  const handleBook = () => {
    const lessonName = lesson.name;
    const lessonId = lesson.id;
    const d = {lessonName, lessonId};
    console.log(d);
    navigate('/LessonBook', {state : d});

  }

    return(
        <div className="card" style={{width: '18rem', height:'500px', marginTop:'20px'}}>
            <img className="card-img-top" style={{width: '100%', height:'200px', objectFit:'contain'}} src={lesson.img} alt="Card image cap" />
            <div className = "card-body">
                <h5 className="card-title">{lesson.name}</h5>
                <p className="card-description">{lesson.description}</p>
                <p className="card-description" style={{fontWeight: 'bold'}}>${lesson.price}</p>
            </div>
            <div className = "card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <button className="btn btn-primary" onClick={handleBook}>Book</button>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-primary" onClick={handleInfo}>More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LessonCard