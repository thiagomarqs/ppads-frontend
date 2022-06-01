import { useEffect, useState } from 'react';
import { User } from '../../../../entities/User';
import { ReportsService } from '../../../../services/ReportsService';

const reportsService = new ReportsService();

const mapUserToName = (user: User) => user.username;

const mapUsersToName = (users: User[]) => users.map(u => mapUserToName(u));

export default function Top5MembersThatEvaluatedTheMost() {

  const [userNames, setUserNames] = useState<string[]>([]);

  useEffect(() => {
    reportsService
      .getTop5UserThatEvaluatedTheMost(sessionStorage.getItem('token'))
      .then(r => {
        const names = mapUsersToName(r.data.data)
        setUserNames(names);
      })
    ;
  }, [])
  
  return (
    <div>
      <h1>5 Membros Que Mais Avaliaram</h1>
      {userNames.map(name => <h2>{name}</h2>)}
    </div>
  )
}