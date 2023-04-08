import { createRoot } from 'react-dom/client'
import '../index.css'
import { EmojiPickerInput } from './components/emojiPicker/EmojiPickerInput'
import styles from './components/emojiPicker/emojiPicker.module.scss'
const root = createRoot(document.getElementById('app'))

root.render(
  <main className={styles.mainContainer}>
    <EmojiPickerInput />
  </main>
)
