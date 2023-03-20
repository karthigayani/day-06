### Nov-25-React

### things to check in PC

- 5min to 14min rec

### How to keep notes in online ?

- Old : https://www.notion.so/
- New and prefered : https://figjam.new/

### array destructuring:

- What is the value of a & b ?
  function double(){
  return[n, n*2];
  }
  const [a,b] = double(10);
- a = 10 ; b = 20;

### React Router:

- 3rd party package

### why routing ?

1. when no routing

- Hit refresh you are lost
- cannot bookmark

2. When you have routing

- App will be Organized(Professional outlook)
- Ease of access
- Sharing URL (Sharing is caring)
- Secure route (login while entering)

### - In old days routing is used in MPA. But it takes more time to load.

### How to get smooth interface of routing in SPA?

- By installing the `react-router-dom`
- Installation Step : npm<space>i<space>react-router-dom

- technic - when you want to see a particular page, it will hide the other page.
- Eg: If you want to see `contact` page means , it hides the `about` page and shows only the `contact` page.
- So this the big application of `conditional rendering`.

### `react-router-dom version 6.4 is new one... not used on more application. so we go for version 6.3

`Steps: This is common for all packages installation.`

If you exactly want the particular version means do like this `npm i react-router-dom@6.3` here `@6.3` is the version.

- npm<space>install<space>react-router-dom@6.3
- You can also do like this: npm<space>i<space>react-router-dom@6.3
- If you want to work with latest version means you don't need to mention the version. Just do like this `npm i react-router-dom`
  For eg:
- npm<space>install<space>react-router-dom
- You can also do like this: npm<space>i<space>react-router-dom

`To check whether the package is installed or not by src -> package.json -> dependencies -> see the package & its version`

### Installation setups (procedures) are mostly available in chrome.

google search -> packagename with version -> you can see the procedures (steps) under installation sub heading.
Eg:`https://reactrouter.com/en/v6.3.0/getting-started/installation`
