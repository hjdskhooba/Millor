## Description

### Website Description

A website where people can order coffee drinks to go from a coffee shop. Users can order coffee as a guest or use
their created account. Authenticated users can also view their previous orders.

### Project Descriptions

#### Goal of this project

The goal of this project was to show the ability to use the tools mentioned [below](#tools) and implement the
features also shown [below](#features). Another goal was to have experience with the Javascript frameworks and
libraries I had learned. With these tools, I created a responsive website that communicates with the backend to fetch
and store: cart sessions, available drinks, orders, and registered users. My decision to create a coffee shop website
is due to my favorite morning hobby of drinking espresso drinks and making them.

#### Development Process

The database used in this project is MongoDB. Originally the drinks and cart sessions were in Firebase, but I wanted
more experience working with MongoDB. I also started with only ReactJS, but then decided to create a full-stack project
with NextJS. With NextJS, it was easy to host the project on Vercel for production and implement serverless functions
.

The features mentioned below started as to do features I wanted to implement (Please see my previous commits to see
how that process went through). I started out with a project I did partially guided by
[Maximilian](https://github.com)'s React course in the project named
[Food Order Page](https://github.com/academind/react-complete-guide-code/tree/17-practice-food-order-http-forms).
The first page I had was the menu page, then the home page, then the authentication page, and finally the account page.
These four pages have multiple React components
and CSS modules for the styling.

Each time I finished a page, I move to debug and checked how many times a component rendered to make sure I was not
making unnecessary renders, and if so, I would try to change my component structure first and then use React’s hooks
like Callback, React.memo, and useMemo. I also checked how many times the backend server was called and restructured my
code to minimize server calls, like using Vercel’s SWR hook for data caching.

### Tools

- **Javascript** and **NodeJS**
- **SCSS** modules
- [**ReactJS**](https://reactjs.org) component framework
- [**Redux**](https://redux.js.org) state management
- [**Vercel**](https://vercel.com) hosting

## Usage

Click the website link [above](#live-demo) to try out the project. Try out on your phone too to experience the mobile
layout. Use the app as a registered user or a guest user. If you do not want to create an account, then try the
following demo account provided for you:

demo@gmail.com
1234567
