import React from "react";
import './Widget.css'
import { Button } from "../Button/Button";

export function Widget({array}) {


    return (
        <>
            <section>
                {/* tiene que mapear el array que entra por params */}
                <h2>Title</h2>

                <Button></Button>
            </section>
        </>
    )
}