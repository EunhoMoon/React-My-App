import { useEffect, useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {
  // http 요청 (jquery ajax(X), fetch, axios(외부 라이브러리))
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  // 빈 배열 한번만 실행
  useEffect(() => {
    // 다운로드 가정 = fetch(), axios(), ajax()
    let datas = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    // 빈데이터
    setBoards([...datas]);
    setUser({ id: 1, username: 'test' });
  }, []);

  return (
    <div>
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
        setUser={setUser}
      />
    </div>
  );
};

export default HomePage;
