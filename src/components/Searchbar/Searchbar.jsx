import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';

function Searchbar({ handleSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleInput = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSearch = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Enter a search word!');
      return;
    }
    handleSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchbar}>
      <input
        className={styles.input}
        onChange={handleInput}
        value={searchQuery}
        name="searchInput"
        type="text"
        autoComplete="off"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

export default Searchbar;
