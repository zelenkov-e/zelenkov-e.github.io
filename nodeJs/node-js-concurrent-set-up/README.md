Small set up App for using concurrent tool for communicate between claend and server sides

//When to Use the Proxy Setting

- Simplifying API Calls:

Without a proxy, you would need to include the full URL in your API calls, which can be cumbersome and make your code less portable. For example:

javascript
Copy code
fetch('http://localhost:3001/api/data')
.then(response => response.json())
.then(data => console.log(data));
With a proxy set up, you can simplify this to:

javascript
Copy code
fetch('/api/data')
.then(response => response.json())
.then(data => console.log(data));
Avoiding CORS Issues:

- Browsers enforce strict cross-origin policies. Setting up a proxy helps you avoid CORS issues by making it appear as though all requests are coming from the same origin (the React development server).
