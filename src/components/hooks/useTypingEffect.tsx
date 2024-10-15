import { useState, useEffect } from 'react'

export function useTypingEffect(words: string[], typingSpeed = 150, delay = 2000) {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingIndex, setTypingIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[loopNum % words.length]
    let timeoutId: ReturnType<typeof setTimeout>

    if (!isDeleting && typingIndex < currentWord.length) {
      timeoutId = setTimeout(() => {
        setText(currentWord.substring(0, typingIndex + 1))
        setTypingIndex(typingIndex + 1)
      }, typingSpeed)
    } else if (isDeleting && typingIndex > 0) {
      timeoutId = setTimeout(() => {
        setText(currentWord.substring(0, typingIndex - 1))
        setTypingIndex(typingIndex - 1)
      }, typingSpeed)
    } else if (typingIndex === currentWord.length && !isDeleting) {
      timeoutId = setTimeout(() => setIsDeleting(true), delay)
    } else if (typingIndex === 0 && isDeleting) {
      setIsDeleting(false)
      setLoopNum(prev => prev + 1)
    }

    return () => clearTimeout(timeoutId)
  }, [text, typingIndex, isDeleting, words, typingSpeed, delay, loopNum])

  return text
}
