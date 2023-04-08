import styles from './emojiPicker.module.scss'

export const EmojiSearch = ({ onSearch }) => {
  function handleChange (e) {
    onSearch(e)
  }

  return <input className={styles.search} onChange={handleChange} />
}
