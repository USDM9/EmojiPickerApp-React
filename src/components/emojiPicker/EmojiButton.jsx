import styles from './emojiPicker.module.scss'

export const EmojiButton = ({ emoji, onClick }) => {
  function handleClick () {
    onClick(emoji)
  }

  return <button className={styles.emojiButton} onClick={handleClick}>{emoji.synbol}</button>
}
