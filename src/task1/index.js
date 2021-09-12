import * as React from "react";
import { Counter } from "./counter";
import { GenreToggle } from "./genreToggle";
import { helloWorld } from "./helloWorld";
import { Search } from "./search";

import "./styles.css";

export function Task1 () {
    return <div className='wrap'>
        <h1>Task 1</h1>
        {helloWorld}
        <Counter />
        <Search />
        <GenreToggle />
    </div>
}
