```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;

    const tick = () => {
      setCount(prevCount => prevCount + 1);
    };

    intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```