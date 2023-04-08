import { useEffect, useRef, useState, forwardRef } from 'react'
import { data as emojiList } from './data'
import { EmojiButton } from './EmojiButton'
import { EmojiSearch } from './emojiSearch'
import styles from './emojiPicker.module.scss'

export const EmojiPicker = forwardRef((props, inputRef) => {
  const [isOpen, setIsOpen] = useState(false)
  const [emojis, setEmojis] = useState(emojiList)
  const containerRef = useRef(null)

  useEffect(() => {
    window.addEventListener('click', e => {
      if (!containerRef.current.contains(e.target)) {
        setIsOpen(false)
        setEmojis(emojiList)
      }
    })
  }, [])

  function handleClickOpen () {
    setIsOpen(!isOpen)
  }

  function handleSearch (e) {
    const query = e.target.value.toLowerCase()
    if (query) {
      const search = emojiList.filter(emoji => {
        return emoji.name.toLowerCase().includes(query) || emoji.keywords.toLowerCase().includes(query)
      })

      setEmojis(search)
    } else {
      setEmojis(emojiList)
    }
  }

  function handleOnClickEmoji (emoji) {
    const cursorPos = inputRef.current.selectionStart
    const text = inputRef.current.value
    const prev = text.slice(0, cursorPos)
    const next = text.slice(cursorPos)

    inputRef.current.value = prev + emoji.synbol + next

    inputRef.current.selectionStart = cursorPos + emoji.synbol.length

    inputRef.current.selectionEnd = cursorPos + emoji.synbol.length

    inputRef.current.focus()
  }

  function EmojiPickerContainer () {
    return (
      <div className={styles.emojiList}>
        <div>{emojis.map(
          emoji => <EmojiButton onClick={handleOnClickEmoji} key={emoji.synbol} emoji={emoji} />)}
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={styles.inputContainer}>
      <button className={styles.emojiPickerButton} onClick={handleClickOpen}>😍</button>
      {isOpen
        ? <div className={styles.emojiPickerContainer}><EmojiSearch onSearch={handleSearch} /><EmojiPickerContainer /></div>
        : ''}
    </div>
  )
})

export default EmojiPicker
