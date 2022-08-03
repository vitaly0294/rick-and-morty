import { useMemo } from "react";

export const useSortedEpisodes = (episodes, sort) => {
  const sortedEpisodes = useMemo(() => {
    if (sort) {
      return [...episodes].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return episodes;
  }, [sort, episodes]);

  return sortedEpisodes;
}

export const useEpisodes = (episodes, sort, query) => {
  const sortedEpisodes = useSortedEpisodes(episodes, sort);
  const sortedAndSerchedEpisodes = useMemo(() => {
    return sortedEpisodes.filter(episode => episode.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedEpisodes]);

  return sortedAndSerchedEpisodes;
}