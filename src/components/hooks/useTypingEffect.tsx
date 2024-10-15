import { useState, useEffect } from 'react'

export function useTypingEffect(
  texts: string[],
  typingSpeed = 50, // A velocidade padrão de digitação
  deletingSpeed = 25, // A velocidade padrão de deleção
  delay = 2000 // Atraso antes de deletar ou iniciar nova frase
) {
  const [currentText, setCurrentText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentGreeting = texts[greetingIndex]

    const handleTyping = () => {
      if (isDeleting) {
        // Se estamos deletando, removemos um caractere por vez
        setCurrentText(prev => prev.slice(0, -1))
        if (currentText === '') {
          setIsDeleting(false)
          setGreetingIndex(prev => (prev + 1) % texts.length) // Alterna para a próxima frase
          setCharIndex(0)
        }
      } else {
        // Se estamos digitando, adicionamos um caractere por vez
        setCurrentText(currentGreeting.slice(0, charIndex + 1))
        if (charIndex === currentGreeting.length) {
          // Quando terminamos de digitar, iniciamos a deleção após um atraso
          setTimeout(() => setIsDeleting(true), delay)
        }
      }
      // Avança o índice de caracteres dependendo se está deletando ou digitando
      setCharIndex(prev => (isDeleting ? prev : prev + 1))
    }

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(typingTimeout)
  }, [charIndex, greetingIndex, isDeleting, texts, currentText, typingSpeed, deletingSpeed, delay])

  return currentText
}
