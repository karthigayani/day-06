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

### Adding App to api link

- Google search -> mockapi.io -> login with github -> click on `+` icon behind projects -> name your projectname (Eg: `movieappapi` letters must be full-small) -> click on `create`
- click on your created project -> newResource -> enter a name (eg: `movie` component name where the datas gonna be used).
- enter the data and its type -> press create.
- You will get the button in the name of your `newResource` you have created.
- click on the button `movie` -> You will see data -> click on it -> it will open a dialogue box with empty array -> clear it by pressing backspace key -> then copy paste the api array -> press on `update`.
- you can edit the array data whenever you want.
- then click on the newResource you have created `movie` you will get the apilink with your datas.
- `If you want to create new api means -> click on newResource and follow the same steps.`
- `In mockapi.io trail version provide only 1 project and 5 newResource only `

### How to use api link in your app ?

- fetch method.
- put the fetch method in your App component.

### Day - 11 STARTED

### Life cycle method:

- To avoid double time printing
- Life cycle method:(class component) - file:///C:/Users/Admin/Downloads/arejh-bhr77.webp
- Life cycle method:(function component) - file:///C:/Users/Admin/Downloads/a09tn-u1aye.webp
- How many times useEffect will run ? It depends upon dependency array. If you didn't mention dependency array it will callback/run on every changes of state & props.
- When you put empty array in useEffect , callback will call once after the function/component mounted. ie., it act likes DidMount
- when you put return inside the useEffect, it act as willUnmount.
- `use effect is generally used for console,get notification for any changes & data fetch`
- `UseEffect will trigger/callback after the App component build/mounted.`

### CRUD

- C -> Create -> Post
- R -> Read -> Get
- U -> Update -> Put
- D -> Delete -> Delete

=> Axios - Not an inbuilt Library - You need to install it.
=> Fetch - Inbuilt library - Not need to install external library - So your App/Website loading data & time will be saved.

### Applying render Props pattern

- deletebutton added in movie list as JSX. Here you are rendering the props. So we called as `renderProps`.

### Container (data) & Presentational (view) | Smart (data) & Presentational (view) Pattern

- Smart/Container
- Here Movielist -> Smart/Container component -> It deals with data
- Movie -> Presentational component -> It deals with view

### Learn more about patterns -> https://javascriptpatterns.vercel.app/patterns/react-patterns/conpres

### Learn about `mansonry layout`

### Component navigation in vs `press/hold down "ctrl" key and the place the curser on the component`

### Added "Fira Code" font ligatures in vs for better view.

### Applied CSS emmet setting for JSX

**\*\***\***\*\*** GET & DELETE **\*\***\*\*\*\***\*\***

### Day-12 Started

- Styling the Delete Button using material-ui

### `margin-left-auto` property in CSS

- It can be applied only when the items are inside the flex.
- you can put `sx instead of style` when you styling material-ui components. (Applied in `MovieList.js` file at IconButton, also in `App.js inside tollbar`)
- What is the difference b/w style and sx?
  -> when you put `style` it act as inline CSS, so correction becomes difficuilt.
  -> when you put `sx` it act as External CSS, so correction becomes easy.

### POST method steps:

- 1. method - POST => mention method type POST
- 2. body - data (JSON) => sending data as JSON format
- 3. header - JSON => Mention JSON in header. (Here you are conforming/telling to the server that your data is JSON)
- Why we converting to `JSON (String)` format,
  1. because it is a common/intermediate language to communicate with other language. (For Eg: Your server maybe phython/JS/C/C++/Java/PHP You can easily communicate through JSON)
  2. Easy to access.
- XML also an intermediate language, but the syntax are very large.

### Header:

- It is mostly used for sending cookies
- It presents in all methods (POST,GET,PUT,DELETE)
- Type:

1. Request Header - Eg: cookies.
2. Response Header

### Body

- It presents in (POST & PUT) methods

### Form Validations

- Eg -> file:///C:/Users/Admin/Downloads/az2vp-h06d1.webp
- Eg : Login form/ Aadhar form etc...

### Usage of Form Validations

1. `To avoid storing junk data.`

- For Eg: When you didn't add user name in login form you are not able to login again. So it is a junk data. because their is no use of storing it.

2. `To improve user experience.`

- Using Form Validations you can instruct the user to get proper data you want.
- You can also tell to the user already having account...

### FORMIK & YUP.JS package

- Form Validations is done in react using `the FORMIK & YUP.JS` packages.
- FORMIK - Working with form is easy using formik
- YUP.JS - validation
- Overallflow -> file:///C:/Users/Admin/Downloads/a5emd-0pzs8.webp
- Formik doc => https://formik.org/docs/overview
- yup.js doc => https://github.com/jquense/yup
- Installing command => npm install formik yup

- yup import statement => `import * as yup from 'yup'`;
- FORMIK import statement => import { useFormik } from "formik";
- useFormik syntax : https://formik.org/docs/api/useFormik

### Steps:

- stop running react app , type `npm install formik yup` and press enter in terminal followed by your app name.
- Check whether the packages installed or not at the package.json file.
- Follow the steps in `BasicForm.js` file.
- Error flow => file:///C:/Users/Admin/Downloads/avz9u-9hmqy.webp

### Learn regex for to create strong form validation -> https://regexone.com/

### Day - 13 Started

### creating strong form validation using regex

- Eg: email validation
- open formix doc link -> https://formik.org/docs/overview
- You can see validation on the L.H.S side, click on it.
- scroll down and copy the regex code (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)for email validation and put it at movieValidationSchema inside the matches method.

### brief note for /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

1. ^ : Matches the start of a string
2. [A-Z0-9._%+-] : Matches any uppercase letter, digit, period, underscore, percent sign, plus sign, or hyphen
3. - : Matches the previous expression one or more times
4. @ : Matches the "@" symbol
5. [A-Z0-9.-] : Matches any uppercase letter, digit, period, or hyphen
6. \. : Matches a literal period (since "." is a special character in regular expressions)
7. [A-Z]{2,4} : Matches any uppercase letter, exactly 2 to 4 times
8. $ : Matches the end of the string
9. The /i at the end of the pattern makes the expression case-insensitive, so it will match both uppercase and lowercase letters.

### redux -> https://redux.js.org/

- Redux is a state management library.
- state(current value) => current data of all components in the app.
- also it is a 3rd party library like formik,yup,react router dom.
- react router dom is not built by facebook, but it had a trust from react.
- Likewise redux is a trusted / arthorized library of react.
- So redux had a hook in react for working with redux methodology.
- redux is an advanced concept. Working with redux for smaller app is much difficult. But for larger application you will realise the benefits.
- `redux working flow is an important interview question`

### why redux is important?

1.  In everyapp state is dependent on some other state.
    Eg: profile pic in facebook.
    - When you change profile pic, it will changed all the places where the profile pic shown on facebook.
2.  So redux philosophy is don't kept the states in every component. Which means keeping all the states in a central place called store.
3.  This store is called `Single source of truth`.
4.  So you can take the data from store for which ever component in need by use/subscribe it
5.  You can rewind the data in redux.
6.  For the popularity and demand of redux, react introduced `useReducer` hook for implementing redux in react.

### how to implement redux ?

- Eg flow => file:///C:/Users/Admin/Downloads/ag1wd-lueoj.webp
- For eg: When you want to order a thing in amazon. 1 -> You search the product in amazon -> 2. Before ordering amazon verify/checks whether the product is available or not in their store.
- So amazon only have the access to check the product availability in their store. You/others could not have the access to check.
- So it is a unidirectional flow.

1. Redux flow => file:///C:/Users/Admin/Downloads/aom8v-u1jl2.webp

   1. Reducer is the only person access to the store.

2. With and without redux => file:///C:/Users/Admin/Downloads/akude-steww.webp
3. Redux Eg: Problem => https://codesandbox.io/s/blissful-roman-6u90q9?file=/src/App.js

### Day-14

1. Redux Eg: Problem => https://codesandbox.io/s/blissful-roman-6u90q9?file=/src/App.js
2. color updation flow => file:///C:/Users/Admin/Downloads/a2fxi-njt9j.webp

### React Recap:

### Day-14 completed

### Backend Day-01 Dec-09

### Databases

- Special software to store data
- Where does database live?
- It can be in Laptop/PC. But Laptop/PC will not handle/support more request from clients at the same time.
- So we go for cloud computing.

### Cloud

- Eg of Cloud Storage Providers - file:///C:/Users/Admin/Downloads/a4dmi-qv6py.webp
- Can Cloud Storage Providers run software ? No❌ Because it is just a part of the cloud. It only store the data.
- What is Cloud ?
- Renting PC.
- Eg of Cloud Providers - file:///C:/Users/Admin/Downloads/ab901-jgo0z.webp
- AWS - Amazon Web Services. It is one who introduced the cloud renting concept. It is in No.1 place.
- Cloud Market - file:///C:/Users/Admin/Downloads/aut0f-w88ty.webp
- Why you are not buying instead of renting?
  1.If your buying - file:///C:/Users/Admin/Downloads/a36ba-vc7dm.webp
  2.If your Renting - file:///C:/Users/Admin/Downloads/ah1ag-qj167.webp
- PC-Specs before buying/renting - file:///C:/Users/Admin/Downloads/ayacq-llefc.webp
- How to choose ? - file:///C:/Users/Admin/Downloads/apy4z-utvmx.webp
- Cloud OS is `linux`

### Why linux ?

1. In windows & MAC we have to pay license.
2. But `linux` is Free service also it is a open source. So you can fix the problem easily.
3. Security is high.
4. It had different Flavours or distributions/distros and that flavours have different version.
5. But in windows/MAC , they have only versions.
6. AWS Linux distro - file:///C:/Users/Admin/Downloads/a6h56-5n6t7.webp
7. 80% of the world running on `linux`.
8. Reason for using linux - file:///C:/Users/Admin/Downloads/abmb5-77e0o.webp

### React ReCap MCQ

1. Why do you use `<noscript>` tag in react?

- It will show alert message when JavaScript is not enabled in your browser.
- JavaScript is like lifebreathe/heartbeat of React.
- JavaScript is used to bootstrap/Start the React App.

2. When you consider a function as component?

- Function name should be Start with capital letter.
- It should return atleast one JSX element.

3. What is inside the return ?

- JSX - JavaScript XML

4. End of the day JSX converted to ?

- JavaScript with the help of Webpack and Babel.

5. What is the command for building the react app local?

- `npm run build`

6. Why do you need to use classname? / Why not we directly use class instead of className?

- class is a reserved keyword in JS.
- JSX is finally converted to JS. It will make confusion. So to avoid this we use className.

7. What is {} in JSX ?

- Template Syntax.

8. How to loop in JSX?

- Mapping.

9. function welcome`({name})`{
   ....
   } What is this syntax name in ES6? Which variable you are destructuring ?

- Object destructuring.
- props destructuring

10. props is used to pass data from ---component to --- component?

- Parent to child.

11. Props is --- directional?

- Unidirectional/onedirectional.
- Parent to child.

12. When we use mapping, we can face warning ? How to overcome/fix that warning? `Warning: Each child in a list should have a unique "key" prop.`

- You have to add key attribute in return JSX(p/div) while mapping
- key must be unique value. It may be an index/id.
- Refer the Link -> https://codesandbox.io/s/practical-proskuriakova-mf7xed?file=/src/App.js

13. How to send Child (info) to parent ?

- Refer the Link -> https://codesandbox.io/s/kind-brown-6z24nr?file=/src/App.js

14. Solve the error in code

- Refer the Link -> https://codesandbox.io/s/bold-heyrovsky-wrtkx9?file=/src/App.js

15. Why adding key attribute is important ? `Important interview question`

- In react we use virtual DOM, to get the real benifit of react.
- Hooks setSate is used to update the VDOM.

### Virtual DOM

1. It is the Copy of the Real DOM
2. It is a Large {key: value}
3. Updating it does not cost performance
4. To access VDOM you could use hooks (eg : setState)
5. Once the update is done on the virtual DOM, then the Real DOM is updated.
6. Comparison - Reconcilliation - VDOM & Real DOM
7. key helps to quickly compare the changes (like index no. in array) b/w VDOM & Real DOM
8. document.\* in React - Looses performance
9. VDOM is introduced to increase the performance of your website/webapp.
10. It is key value pair structure.
    See notes image for reference.

### Why React is so fast?

- Virtual DOM is the copy of the real DOM, but why don't we directly update the real DOM. If you change an element all the elements surrounding it Should also be updated/affected/rearranged.
- So updating the real DOM is a costly operation. and loss in performance.
- So instead of updating the real DOM, we can first update the virtual DOM. Then batch all the updates together and finally update the real DOM.
- This saves lot of performance, because Virtual DOM is a big key:value pair.
- Updating values in an Object doesn't costy. You can update values 10k times too. It doesn't affect the performance.
- Once all the updates are done in the virtual DOM, Camparing/diffing operation is done with Virtual DOM and real DOM.
- Whatever the changes done, only that is send to the real DOM.
- Now the real DOM is updated. So the process of sinking the virtual DOM and real DOM is called as Reconcilliation.
- And this is the reason we should not be using `document.*` in react, because it directly access the real DOM.

### How do you access Virtual DOM ?

- Using Hooks.

16. Name the hooks we are using in your React App?

- useState, useNavigate, useParams, useContext, useEffect, useReducer.

17. What is the datatype of Hook ?

- In JavaScript the only thing you are calling is function. So all the hooks are functions.
- So the datatype of Hook is `function`.
  => Function: JavaScript doesn't have a function data type but when we find the data type of a function using the typeof operator, we find that it returns a function. This is because a function is an object in JavaScript. Ideally the data type of a function should return an object but instead, it returns a function.

18. How do you identify a function is a hook?

- It should starts with use.

19. Solve the Problem :

- Refer the Link -> https://codesandbox.io/s/magical-joana-jy9nb5?file=/src/App.js

20. What are the two ways to toggle(Hide & Display) data ?

- 1. Conditional Styling - (Display none & block)
- 2. Conditional Rendering

21. What are the different types of routers?

- There are 2 types of routers.
- 1. `#` router
- 2. `browser` router

22. `#` router only work in older browser `Yes/No` ?

- No. Because `#` router will work both in new & older browser.

23. What is the path must be given to get `404` error?

- path = "\*"

24. Why link is needed ? instead of `<a>` tag.

- In general we use anchor tag for page navigation. But when you use that it refresh your page every time. - So it will affect smooth performance of SPA property.
- So we go for link tag `<Link to="/">Home</Link>`
- Link tag navigate the pages without refreshing the page.

25. How do you capture the id value from the URL ?

- Using useParams hook.

26. How do you change the URL programatically ?

- Using useNavigate hook.

27. How do you move forward 3 pages ?

- navigate(3)
