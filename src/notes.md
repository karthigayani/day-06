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

Step:1 import `BrowserRouter` from `react-router-dom` to `index.js` file
Step:2 wrap your app in `<BrowserRouter>`
Now you can use React Router anywhere in your app!
Step:3 replace the default markup with some routes and create your route components
Step:4 Create route path
Customer can't move pages by entering the links.
Step:5 Create links.

- In general we use anchor tag for page navigation. But when you use that it refresh your page every time. So it will affect smooth performance of SPA property.
- So we go for link tag `<Link to="/">Home</Link>`
- Link tag navigate the pages without refreshing the page.

### Hash vs / Browser router

- Hash router:

1. Older browser
2. Eg: IE
3. Works both in new and Old browsers

- Browser router:

1. Newer browsers
2. Additional features
3. Only in new browsers

### How to convert Browser router to Hash router:

- Instead of using `BrowserRouter` use `HashRouter`

### Routing Flow:

`User` -> Nav link (URL Changes- Routes Trigger) -> `Routes` (Contain bunch"group" of route) -> `Route` (Matches URL to the component) -> `Screen display`

### Redirect

-When you land in 404 page

1. People typing random in URL
2. No longer the page exists
   `*` -> matches any path
   `<Route path="*" element={<NotFound >}/>`

### When do you redirect

1. Brand acquisition
2. Marketing team - trends
3. Security
   // /films -> /movies
   <Route path = "/films" element={<Navigate replace to="/movies" /> }/>

### Lifting the state up technique

-App(data)
-> (props) MovieList(data)
-> (props) AddColor(data)

- Here, we are lifting the data in the MovieList to App for to share the data to AddColor. Why because , you can share the data through props (Parent -> Child(props))
- MovieList & AddColor are siblings App is the parent for them.

### Routing hooks - useNavigate

Use it when you want to change URL programmatically (clicked on a button)
`Eg: changing URL programmatically` when you buy an order from shopping App (after payment), it automatically redirected to tracking page(Successfully ordered page). If the payment failes it goes to retry page (Error page).

- Here, the user not going to success page/error page, we programmed to go to the pages automatically.
- This can be done by useNavigate hook

-> `useNavigate - Functionalities`

1. navigate("/about) -> about page
2. navigate(-1) -> backward 🔙 - 1 page backward
3. navigate(1) -> forward ⏩ - 1 page forward

### Day-09 Notes:

- : -> converts into variable (Matches any movieid) id- stores value(number) inside the id
- here the variable `id` is user defined (abc,xyz,id....)

### Routing hooks - useParams

Get parameter from url

- Dynamic path

1. path = "/about/:id"
2. const {id} = useParams()

### useParams flow:

file:///C:/Users/Admin/Downloads/a49o9-hbe8l.webp

- Step 1: useNavigate changes the url
- Step 2: url matching taking place `App.js -> "/movies/:id" `
- Step 3: component matching taking place using useParams
- Step 4: extracting the `id`value

### React context

- It is introduced to overcome `Props drilling`.
  Eg: MovieApp components -> file:///C:/Users/Admin/Downloads/aponw-nn52z.webp

`Disadvantages of props drilling:`

- Performance reduced
- Reusability reduced
- Forceful kepting the props.

- Context overcome props drilling by `Pub / Sub Model`. {Publisher/Subscriber}
  Eg: Pub - Youtuber, YouTube - Provider, Sub - people who have subcribed.
- `In react terms` -> file:///C:/Users/Admin/Downloads/akyze-gymrr.webp
- Pub - createContext
- Provider - context.Provider
- Sub - useContext.
- React context flow: file:///C:/Users/Admin/Downloads/a0y9o-38xdj.webp

### Day - 10

- Props drilling Eg -> https://codesandbox.io/s/nifty-sammet-mrgqsu?file=/src/App.js

- React context Eg : 1 -> https://codesandbox.io/s/confident-hooks-97f6h9?file=/src/App.js

- Final App using React context-> https://codesandbox.io/s/sad-shannon-kqsq84?file=/src/App.js

- React context Eg : 2 -> https://codesandbox.io/s/async-star-24vrf7?file=/src/App.js

### Applying Dark & Light theme Using mui

- Google search -> mui.com -> get started -> customization L.H.S -> Dark theme -> copy the `darkTheme` variable declaration part (createTheme - createContext) and paste it in your App component -> Then import the mui theme components needed -> Then wrap Your App return JSX part with mui `ThemeProvider` -> enter the value `theme={}`-> and then Save it
- Your App becomes responsive to dark/light theme without subscribing, why because your all mui components are already subscribed with `ThemeProvider` by default. So the components from mui are responsive to dark/light theme.
- before wraping with `themeprovider` wrap with `paper` component from mui for better presentation.
- Also import paper component from mui.
- Google search -> mui.com -> get started -> components L.H.S -> Surfaces -> paper -> Then import the mui paper components needed -> Then wrap Your App return JSX part with mui `paper` -> enter the elevation ={4} value (user defined value )-> and then Save it

### Add button for theme

- Google search -> mui.com -> get started -> customization L.H.S -> Dark theme -> Toggling color mode -> copy the `brightness4icon & brightness7icon` component and paste where you needed-> Then import the mui `brightness4icon & brightness7icon` icon statements ->
- note : put `brightness4icon & brightness7icon` inside `startIcon` attribute . You copy it from mui eg: code itself.
