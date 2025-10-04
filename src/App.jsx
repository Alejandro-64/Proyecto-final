import Theme from "./components/Theme/Theme";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <AppRoutes />
        <Theme />
      </main>
      <Footer />
    </>
  );
}

export default App;
