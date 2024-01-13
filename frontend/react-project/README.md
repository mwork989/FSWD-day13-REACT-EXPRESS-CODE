how we can create react project


install local dependency to project
 
1. npm install <package name>


install global dependency in entire system


1. npm install -g <package name> 
  

  npm install -g react@18.2.0


when we want multiple projects to be written using multiple version of same library/paclage/dependency/tool then   we have to npx - node package executor ( only available from node 16 onwards)

  it provides virutal enviroment to run global packages without installing


  npx create-react-app@5.0.1 my-app-react5

  npx create-react-app@4.0.0 my-app-react4

  npx creat-react-app my-app : by default picks the latest version




npm run build -- command convers the react js written code to plain js code
so every browser can understand -and we call this process as transpilation 


Why we have to choose react over plain javascript for web development?
------------------------------------

React, a popular JavaScript library for building user interfaces, offers several advantages over using plain JavaScript for web development

1. Component-Based Architecture: React's component-based structure allows for reusable and manageable code.making the codebase more organized and easier to maintain.

2. Virtual DOM (Document Object Model): React uses a virtual DOM to optimize rendering. This means that instead of updating the whole DOM every time a change occurs, React updates only the components that have actually changed. This results in better performance and a smoother user experience.

3.Declarative UI: React's declarative nature makes it easier to understand and predict how the UI will look and behave

4.Strong Community and Ecosystem: React has a vast community and a rich ecosystem of libraries and tools.

5.JSX Syntax: JSX is a syntax extension that makes writing the code that generates the UI components more readable and similar to writing HTML. 


Important point to be noted

when we use someone else code we have to follow their pattern or rules mentioned in the package for better use


Note1:


Understanding the differences between a package, a library, a dependency, and a framework is crucial in the realm of software development


Package:

Definition: A package is a piece of software or a module that you can include in your project. It often comes in the form of a code library or a tool that performs a specific task.
Usage: Packages can be installed and managed using package managers like npm for Node.js or pip for Python. They often include metadata like a package name, version, and dependencies.


Library:

Definition: A library is a collection of pre-written code that developers can use to optimize tasks, rather than writing code from scratch. Libraries typically provide a set of functions, classes, or routines.
Usage: You can call upon a library in your own code to perform specific functions, thereby reducing the amount of code you need to write. For example, jQuery is a popular JavaScript library for simplifying DOM manipulation.


Dependency:

Definition: A dependency is a package or library that your project needs in order to function properly. Dependencies are external pieces of code or software that your project relies on.
Usage: When you use a framework, library, or any external package in your project, it becomes a dependency. They are often listed in a file (like package.json in Node.js projects) and can be automatically installed using a package manager.

Framework:

Definition: A framework is a robust structure that provides a foundation for developing software applications. It dictates the architecture and provides a set of guidelines or best practices.
Usage: Frameworks often enforce a certain way of doing things and come with pre-written code and templates to scaffold out your project. For instance, React is a framework for building user interfaces, and Django is a high-level Python web framework.

react vs angular ---

library vs framework



24/12/-2023

A URL is a reference (an address) to a resource on the Internet. It specifies the location of a web resource (like a web page) and the mechanism for retrieving it, typically via HTTP or HTTPS. 

"HTTP" stands for "Hypertext Transfer Protocol." It is the foundation of data communication for the World Wide Web. 

HTTP defines how messages are formatted and transmitted, and what actions web servers and browsers should take in response to various commands.

 For example, when you enter a URL in your web browser, this actually sends an HTTP command to the web server directing it to fetch and transmit the requested web page.


HTTP (Hypertext Transfer Protocol) methods, also known as HTTP verbs, define the action to be performed on a given resource


GET: Requests data from a specified resource. It's used to retrieve information from the server. GET requests should only retrieve data and should not have any other effect on the data.


POST: Sends data to a server to create/update a resource. It's often used when submitting form data or uploading a file.

PUT: Replaces all current representations of the target resource with the uploaded content. It's used to update a resource completely.

DELETE: Removes the specified resource. This method is used to delete a resource identified by a URL.


Install postman , mongodb 7 version

https://github.com/mwork989/FSWD-day13-REACT-EXPRESS-CODE



13/01/2023  React study notes
-----------------------

Agenda -
1. Understand components in REact functional vs class based
2. why you should choose function based
3. writing the code in ES6 way
4. event and data binding and syntax, we are able to do some styling 
5. Routing in react


For implementing routing in react we have to follow these steps

react-router-dom always choose 4 month old package for stability and bugs information

1.npm install react-router-dom
2.configuring the router and router provider
3.we created a layout for navigating and where to display the content during
navigating outlet tag from react router dom will be used
4. Defning the routes in App.jsx 
5. Link tag is being used for navigating coming from react router dom
we did thise additonal step in react routing because its a add on package
so we need to communicate to react how to utilize this


