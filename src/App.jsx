import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center">
      <Header />
      <div className="mt-6">
        <Profile name="John Doe" email="john@example.com" />
      </div>
      <Counter />
    </div>
  );
}

export default App;
