import SearchResult from './SearchResult';
import emojiList from './emojiList'
import Search from './Search';

export default function App() {

  return (
    <>
      <div>
        <Search emojiList={emojiList} />
      </div>
    </>
  )
}