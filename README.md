# React useEffect setTimeout memory leak

This example demonstrates a common mistake in React: using setTimeout within useEffect without proper cleanup. This leads to memory leaks and unexpected behavior.

## Bug
The `MyComponent` uses `setTimeout` inside `useEffect` without cleanup.  Each render creates a new timer. This results in multiple timers running concurrently even if the component unmounts, causing memory leaks.

## Solution
The solution uses the return value of `useEffect` to clear the timer before the component unmounts or before the next timer is set.
