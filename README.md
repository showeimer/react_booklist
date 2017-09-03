# React Booklist

Create an application that uses actions and reducers to show content for a book list

## Getting Started

- To get started you will need to use create-react-app to quickly scaffold a project. You should migrate your components into a components folder in the src directory and the styles into a styles folder in the src directory. Link up all pages to make sure they working and test using npm run start in the console, use Ctrl+c to exit.

- You will need use npm install --save redux and npm install --save react-redux in the terminal to save Redux to your project dependencies and make it available for import.

- In your index.js file in your src directory, you will need to copy and paste the contents of the index.js file from the starter files.

- You will need to create a data folder and create a books.js file inside of the data folder. Copy and paste the contents from the starter file books.js into your file.

- You will need to create containers, actions, and reducers folders as well. You will need to add the corresponding files from the starter files to the folders in your application (for example actions/index.js in the starter files will need to be copied or moved into src/actions/index.js in your project).

- You should have the following separate components:
  - Components: App.js
  - Containers: BookList.js
  - Containers: BookDetail.js
  - Your app should mimic the functionality of the example provided at the end of this document.

- You will need to create the action of selecting a book, determine its payload and make sure that it is exported properly to your reducers.

- In your reducer file (reducers/index.js) you will need to make sure that your reducers are working properly.

- In the BookList container component, you will need to make sure there is a proper map function in place to sort through the data from your reducer. (Hint: mapStateToProps will put the state of your books somewhere easy for you to retrieve it...)

- All files should be linked and you should not receive any errors in your console.

- You will need to style your application (don't forget Bootstrap!).

## Results

![](mockup.gif)
