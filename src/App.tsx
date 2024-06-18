import React from 'react';
import './App.css';
import './index.css';
import ChipsWithNoUpdate from "./views/chipsWithNoUpdate";
import ChipsWithUpdate from "./views/chipsWithUpdate";
import ChipsWithNoDelete from "./views/chipsWithNoDelete";
import ChipsWithIcon from "./views/chipWithIcon";
import ChipsWithIconAndDelete from "./views/chipsWithDeleteAndIcon";
import ChipsWithClick from "./views/chipsWithClick";
import ChipsWithCustomIcon from "./views/chipsWithCustomIcon";
import ChipsWithDisabled from "./views/chipsWithDisabled";
import ChipsWithPop from "./views/chipsWithPop";
import ChipsWithShift from "./views/chipsWithShift";

const initialState = ["Chip 1", "Chip 2", "Chip 3"]

function App() {

  return (
    <div className="App">
      <main>
        <div className="w-full items-center px-4 py-8 sm:px-8 sm:py-8 flex-col flex gap-8 justify-center">
          <h1 className="text-white font-bold text-5xl sm:text-7xl">
            Lists, functionalities & Chips
          </h1>
          <div className="w-full items-center justify-evenly flex-wrap flex gap-4 justify-center">
            <ChipsWithNoUpdate initialState={initialState} />
            <ChipsWithUpdate initialState={initialState} />
            <ChipsWithNoDelete initialState={initialState} />
            <ChipsWithIcon initialState={initialState} />
            <ChipsWithIconAndDelete initialState={initialState} />
            <ChipsWithClick initialState={initialState} />
            <ChipsWithCustomIcon initialState={initialState} />
            <ChipsWithDisabled initialState={initialState} />
            <ChipsWithShift initialState={initialState} />
            <ChipsWithPop initialState={initialState} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
