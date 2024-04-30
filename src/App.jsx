
import Header from './components/Header/Header';
import Examples from './components/Examples';
import CoreConcepts from './components/CoreConcepts';
function App() {

  return (
    <>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />

      </main>
    </>
  );
}

export default App;
