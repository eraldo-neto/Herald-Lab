import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, []);

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);  //<> == definição de retorno { lessons == retorno data // Lesson[] == array de interface Lesson}

  console.log(data);

  return (
    <main>
      <h1 className="title">Hello World</h1>

      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </main>
  )
}

export default App
