import React, { useEffect, useState } from "react";
import { client } from "../axios";
import { ACTION_TYPES } from "../context/todosActionTypes";
import { useTodosContext } from "../hooks/useTodosContext";

export default function Home() {
  const { state, dispatch } = useTodosContext();
  useEffect(() => {
    const fetchTodos = async () => {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      try {
        const { data } = await client("/api/todos");
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      }
    };
    fetchTodos();
  }, [dispatch]);

  return (
    <section className='min-h-screen px-4'>
      <div className="container mx-auto p-4">
        <div className="px-8 py-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">Todos</h1>
          {state.isLoading && <div>Loading...</div>}
          {state.hasError ? (
            <div>Error fetching todos</div>
          ) : (
            state.todos.map((todo) => (
              <div className="" key={todo._id}>
                <label htmlFor={todo._id} className='flex items-center gap-1'>
                  <input type="checkbox" name={todo._id} id={todo._id} />
                  <h4 className="text-lg font-bold">{todo.title}</h4>
                </label>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
