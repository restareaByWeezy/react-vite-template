import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  deleteTodos,
  getTodos,
  postTodos,
  updateTodos,
} from '@/services/todos';

export const useGetTodosQuery = () => {
  const { data, error, isLoading } = useQuery(['todos'], getTodos);

  return { data, error, isLoading };
};

export const usePostTodosMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(postTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  return { mutate, isLoading, error };
};

export const useDeleteTodosMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(
    (data: string[]) => deleteTodos(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']);
      },
    },
  );

  return { mutate, isLoading, error };
};

export const useUpdateTodosMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(
    (data: string[]) => updateTodos(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todos']);
      },
    },
  );

  return { mutate, isLoading, error };
};
