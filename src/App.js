import SearchResult from './SearchResult';
import emojiList from './emojiList'
import Search from './Search';
import Header from './Header';

export default function App() {

  return (
    <>
      <Header />
      <div>
        <Search emojiList={emojiList} />
      </div>
    </>
  )
}