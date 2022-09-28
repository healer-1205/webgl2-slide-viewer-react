import React, { useState, createContext, useContext, ReactNode } from "react";

export interface ImageContextInterface {
    name: string;
    updateName(params: any): void;
}

const initialState: ImageContextInterface = {
    name: "",
    updateName: () => {},
};

export const ImageContext = createContext<ImageContextInterface>(
    initialState as ImageContextInterface
);

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState<string>("");

    const updateName = (val: string) => {
        setName(val);
    };

    return (
        <ImageContext.Provider
            value={{
                name,
                updateName,
            }}
        >
            {children}
        </ImageContext.Provider>
    );
};
