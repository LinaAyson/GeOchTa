import React from "react";

const Info = () => {
    return (

        <div className="flex items-center justify-center w-screen h-screen bg-purple-700">
            <h1 className="text-6xl text-white portrait:hidden">Landscape mode</h1>
            <h1></h1>
            <h1 className="text-6xl text-white landscape:hidden">Portrait mode</h1>
        </div>
    );
}

export default Info;