import { useQuery } from 'react-query'
import { fetchTeamMembers } from '../api/api';
import { IResponse } from '../Pages/Homepage';

const useMember = () => {
  return useQuery<IResponse[]>(
    ["fetch-team-members"],
    () => fetchTeamMembers(),
    {
      refetchOnWindowFocus: false,
      onError: err => console.log('net not connected')
    }
  );
}

export default useMember