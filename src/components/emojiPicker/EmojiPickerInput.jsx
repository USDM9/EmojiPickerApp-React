import { useRef } from 'react'
import { EmojiPicker } from './EmojiPicker'
import styles from './emojiPicker.module.scss'

export const EmojiPickerInput = () => {
  const inputRef = useRef(null)
  return (
    <div className={styles.inputTextContainer}>
      <input className={styles.inputText} ref={inputRef} />
      <EmojiPicker ref={inputRef} />
    </div>
  )
}
