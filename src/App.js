import Layout from "./components/Layout";
import HomePage from "./pages/HomePage"
import BookDetailPage from "./pages/BookDetailPage"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ScrollToTopAuto from "./components/ScrollToTopAuto";
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import SchoolDetailPage from "./pages/SchoolDetailPage"
import SchoolsPage from "./pages/SchoolsPage"
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import BooksWithIdentity from "./pages/BooksWithIdentity";



function App() {
  return (
    <Router>
      <ScrollToTopAuto />
      <Layout>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/book/:id" component={BookDetailPage} />
        <Route path="/schools" component={SchoolsPage} />
        <Route path="/school/:id" component={SchoolDetailPage} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/books-with-id" component={BooksWithIdentity} />
        {/*? after path value makes it optional */}

      </Layout>
    </Router>
  );
}

export default App;
