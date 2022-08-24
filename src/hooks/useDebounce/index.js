import { useRef, useState, useEffect } from 'react';

/**
 * useDebounce
 * @param {any} value, value
 * @param {function} cb, callback
 * @param {number} delay, delay
 *
 * @returns {React.Node}
 *
 */
export default function useDebounce(value, cb, delay = 500) {
  const [debounceValue, setDebounceValue] = useState(value);
  const previousValue = useRef(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (previousValue.current !== value) {
        setDebounceValue(value);
        previousValue.current = value;

        if (cb) {
          cb();
        }
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, cb]);

  return debounceValue;
}
