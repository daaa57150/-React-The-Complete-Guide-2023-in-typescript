import { useCallback, useEffect, useState } from "react";

export function useFetch<T>(fetchFn: () => Promise<T>, initial: T) {

  const [data, setData] = useState<T>(initial);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await fetchFn();
      setData(data);
    }
    catch (error) {
      if(error instanceof Error) {
        setError(error);
      } else {
        setError(new Error(error as string))
      }
    }

    setIsLoading(false);
  }, [fetchFn]);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return { isLoading, data, setData, error };
}
