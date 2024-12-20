```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```