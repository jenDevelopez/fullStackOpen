import Content from "./Content"
import Header from "./Header"

function Course({ course }) {
  return (
    <div>
      <ul>
        {course.map((course) => (
          <li key={course.id}>
            <div>
              <Header title={course.name} />
              <Content parts={course.parts} />
            </div>
          </li>
        ))}
      </ul>
     </div>
  )
}

export default Course