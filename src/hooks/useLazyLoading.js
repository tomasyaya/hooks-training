import {useEffect, useState, useRef} from 'react';

export const useLazyLoading = () => {
  const [show, setShow] = useState(null);
  const element = useRef(null);
  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const [{isIntersecting},] = entries;
      if(isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  },[element])
  return [show, element]
}