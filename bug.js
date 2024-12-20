```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setTimeout without cleanup
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```