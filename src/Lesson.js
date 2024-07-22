import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import LessonCard from './LessonCard';
import LessonFilter from './LessonFilter';
import {lessonsData} from './LessonData';
import Footer from './Footer';


function Lesson() {

    const [lessonType, setLessonType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [requiresHorse, setRequiresHorse] = useState('');

    const handlePrice = (type, value) => {
        if (type === 'min'){
            setMinPrice(value);
        } else {
            setMaxPrice(value);
        }
    }
    const handleLessonType = (type) => {
        setLessonType(type);
    }
    const handleDifficulty = (type) => {
        setDifficulty(type);
    }
    const handleRequireHorses = (type) => {
        setRequiresHorse(type);
    }

    const filteredLessons = lessonsData.filter((lesson) => {
        return(
        (lessonType === '' || lesson.lessontype === lessonType) &&
        (minPrice === '' || lesson.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || lesson.price <= parseFloat(maxPrice)) &&
        (difficulty === '' || lesson.difficulty === difficulty) &&
        (requiresHorse === '' || lesson.requiresHorse === (requiresHorse === 'true'))
        );
    });

    return(
    <div>
      <div className="container mt-5">
      <h1>Lessons</h1>
      <LessonFilter
        lessonType={lessonType}
        onLessonTypeChange={handleLessonType}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onPriceChange={handlePrice}
        difficulty={difficulty}
        onDifficultyChange={handleDifficulty}
        requiresHorse={requiresHorse}
        onRequiresHorseChange={handleRequireHorses}
      />
      <div className="row">
        {filteredLessons.map((lesson) => (
        <div className="col-md-4">
          <LessonCard key={lesson.id} lesson={lesson} />
        </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
    );
}

export default Lesson