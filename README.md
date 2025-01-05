# React useEffect setInterval Memory Leak

This repository demonstrates a common error in React components using `setInterval` within the `useEffect` hook: not properly cleaning up the interval when the component unmounts. This can lead to memory leaks and unexpected behavior.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` file provides the corrected version.

## Bug
The issue lies in how the `setInterval` is handled.  The `intervalId` is defined outside the `useEffect` but the `useEffect` cleanup is called once.  If the component re-renders (eg. due to a state update), this will create new intervals and old intervals won't be properly cleared. This results in multiple intervals running concurrently.