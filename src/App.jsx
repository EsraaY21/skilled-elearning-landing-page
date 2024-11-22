import "./App.css";
import Footer from "./components/Footer";
import CourseList from "./components/CourseList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <CourseList />
      </main>
      <Footer />
    </>
  );
}

export default App;
