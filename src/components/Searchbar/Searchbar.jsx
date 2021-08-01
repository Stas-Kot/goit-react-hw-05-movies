import React from 'react';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';

function Searchbar({ handleSubmit }) {
  const handleSearch = e => {
    const searchQuery = e.target.elements.searchInput.value;
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Enter a search word!');
      return;
    }
    handleSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchbar}>
      <input
        className={styles.input}
        name="searchInput"
        type="text"
        autoComplete="off"
        autoFocus
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

export default Searchbar;
