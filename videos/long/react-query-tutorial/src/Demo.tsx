import { ChangeEvent, FormEvent, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "./api";
import TodoCard from "./components/TodoCard";
import { Todo } from "./types/Todo";

interface DemoProps {
  filter: string;
  setFilter: (filter: string) => void;
  submittedFilter: string;
  setSubmittedFilter:  (submittedFilter: string) => void;
}

export default function Demo( { filter, setFilter, submittedFilter, setSubmittedFilter}: DemoProps) {
  const queryClient = useQueryClient()

  const [todoTitle, setTodoTitle] = useState("");

  const { data: todos, isError, isLoading } = useQuery({
    queryFn: () => fetchTodos(filter),
    queryKey: ['todos', { submittedFilter }]
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

  const filterTodos = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedFilter(filter)
  }

  if (isLoading) return <p>Loading...</p> 
  if (isError) return <p>Error. Guess you messed up</p>

  return (
    <>
      <form role="form" onSubmit={filterTodos}>
        <input value={filter} onChange={({ target }: ChangeEvent<HTMLInputElement>) => setFilter(target.value)} />
        <button>Filter</button>
      </form>

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
