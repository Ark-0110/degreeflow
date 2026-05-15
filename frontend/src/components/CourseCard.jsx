function CourseCard({ course }) {
    return (
      <div className="card">
        <h3>{course.code}</h3>
        <p>{course.name}</p>
        <p>Credits: {course.credits}</p>
        <p>Status: {course.status}</p>
      </div>
    );
  }
  
  export default CourseCard;