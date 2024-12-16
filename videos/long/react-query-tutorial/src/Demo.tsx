import { ChangeEvent, FormEvent, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "./api";
import TodoCard from "./components/TodoCard";
import { Todo } from "./types/Todo";


export default function Demo() {
  const queryClient = useQueryClient()
  const [todoTitle, setTodoTitle] = useState("");

  const { data: todos, isError, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ['todos']
  });

  const { mutateAsync: addTodoItem } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => queryClient.invalidateQueries(['todos'])
  });

  const pushTodoItemToApi = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addTodoItem({ title: todoTitle })
      setTodoTitle('');
    } catch (e) {
      console.log('fool')
    }
  }

  if (isLoading) return <p>Loading...</p> 
  if (isError) return <p>Error. Guess you messed up</p>

  return (
    <>
      <form role="form" onSubmit={pushTodoItemToApi}>
        <input value={todoTitle} onChange={({ target }: ChangeEvent<HTMLInputElement>) => setTodoTitle(target.value)} />
        <button>Add todo</button>
      </form>
      <ul>
        {todos.map((todo: Todo, i: number) => (
          <TodoCard todo={todo} key={i} />
        ))}
      </ul>
    </>
  );
}
