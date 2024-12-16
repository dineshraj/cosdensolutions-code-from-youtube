import { Todo } from "../types/Todo";

const todos = [
  {
    id: 1,
    title: "Learn HTML",
    completed: false,
  },
  {
    id: 2,
    title: "Learn CSS",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Javascript",
    completed: false,
  },
  {
    id: 4,
    title: "Learn React",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Next.js",
    completed: false,
  },
];

/**
 * Mock function that mimics fetching todos from a database.
 */
export const fetchTodos = async (_query = ""): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("fetched todos");

  // commented now as used for later (I was wrong before!)
  // const filteredTodos = todos.filter((todo) =>
  //   todo.title.toLowerCase().includes(query.toLowerCase())
  // );

  // Uncomment the line below to trigger an error
  // throw new Error();

  // return [...filteredTodos];
  return [...todos]
};

/**
 * Mock function that mimics adding a todo to a database.
 */
export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
  console.log('awaiting promise...');
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('adding', todo);
  

  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  // Todo is stored in memory and cleared on page reload
  todos.push(newTodo);

  console.log('pushed todo', todo);
  

  return newTodo;
};
